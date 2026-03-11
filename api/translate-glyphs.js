const { getSessionFromRequest } = require('./_auth');

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(payload));
}

function parseBody(req) {
  if (!req.body) return {};
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body || '{}');
    } catch {
      return {};
    }
  }
  return req.body;
}

function pickFirstEnv(names) {
  for (const name of names) {
    const value = String(process.env[name] || '').trim();
    if (value) return { value, source: name };
  }
  return { value: '', source: '' };
}

function resolveGeminiConfig() {
  const key = pickFirstEnv([
    'GEMINI_API_KEY',
    'GOOGLE_AI_API_KEY',
    'GOOGLE_AI_STUDIO_API_KEY',
    'GOOGLE_API_KEY',
    'GEMINI_KEY',
  ]);
  const model = pickFirstEnv([
    'GEMINI_TRANSLATE_MODEL',
    'GEMINI_MODEL',
  ]);
  return {
    apiKey: key.value,
    apiKeySource: key.source || null,
    model: model.value || 'gemini-2.0-flash',
    modelSource: model.source || 'default(gemini-2.0-flash)',
  };
}

function normalizeGlyphInput(item, fallbackIndex) {
  const indexValue = Number(item && item.index);
  const index = Number.isInteger(indexValue) && indexValue >= 0 ? indexValue : fallbackIndex;
  return {
    index,
    id: String(item && item.id ? item.id : `item-${index}`).trim() || `item-${index}`,
    label: String(item && item.label ? item.label : '').trim(),
    note: String(item && item.note ? item.note : '').trim(),
    label_nb: String(item && item.label_nb ? item.label_nb : '').trim(),
    note_nb: String(item && item.note_nb ? item.note_nb : '').trim(),
  };
}

function extractModelText(responsePayload) {
  const candidates = Array.isArray(responsePayload && responsePayload.candidates)
    ? responsePayload.candidates
    : [];
  for (const candidate of candidates) {
    const parts = Array.isArray(candidate && candidate.content && candidate.content.parts)
      ? candidate.content.parts
      : [];
    const text = parts
      .map((part) => (part && typeof part.text === 'string' ? part.text : ''))
      .join('\n')
      .trim();
    if (text) return text;
  }
  return '';
}

function extractJsonObject(rawText) {
  const text = String(rawText || '').trim();
  if (!text) return null;

  try {
    return JSON.parse(text);
  } catch {
    // continue
  }

  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  if (fenced && fenced[1]) {
    try {
      return JSON.parse(fenced[1]);
    } catch {
      // continue
    }
  }

  const firstBrace = text.indexOf('{');
  const lastBrace = text.lastIndexOf('}');
  if (firstBrace >= 0 && lastBrace > firstBrace) {
    const slice = text.slice(firstBrace, lastBrace + 1);
    try {
      return JSON.parse(slice);
    } catch {
      return null;
    }
  }

  return null;
}

function buildPrompt(items) {
  return [
    'Du er en profesjonell oversetter fra engelsk til norsk bokmål for redaksjonell UI-tekst.',
    'Oversett hver glyph til god, naturlig norsk.',
    'Regler:',
    '- Bruk alltid "KI" i stedet for "AI" i norsk tekst.',
    '- Behold formatteringsmarkører eksakt: (bold), (new line), (new paragraph).',
    '- Ikke oversett canonical-koder eller id-er.',
    '- Hold stilen kort, klar og redaksjonell.',
    '- Hvis tekst allerede er norsk, behold den.',
    '- Returner KUN gyldig JSON.',
    'Svarformat:',
    '{"items":[{"index":0,"label_nb":"...","note_nb":"..."}]}',
    'Input:',
    JSON.stringify(items, null, 2),
  ].join('\n');
}

async function callGeminiTranslate({ apiKey, model, items }) {
  const endpoint =
    `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [
        {
          role: 'user',
          parts: [{ text: buildPrompt(items) }],
        },
      ],
      generationConfig: {
        temperature: 0.2,
        topP: 0.9,
        responseMimeType: 'application/json',
      },
    }),
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message =
      payload && payload.error && payload.error.message
        ? payload.error.message
        : `Gemini API-feil (${response.status})`;
    throw new Error(message);
  }

  const text = extractModelText(payload);
  if (!text) {
    throw new Error('Gemini returnerte tomt svar.');
  }

  const parsed = extractJsonObject(text);
  if (!parsed || !Array.isArray(parsed.items)) {
    throw new Error('Gemini returnerte ikke gyldig JSON-format.');
  }

  return parsed.items.map((item, index) => {
    const safe = normalizeGlyphInput(item, index);
    return {
      index: safe.index,
      label_nb: String(item && item.label_nb ? item.label_nb : safe.label_nb).trim(),
      note_nb: String(item && item.note_nb ? item.note_nb : safe.note_nb).trim(),
    };
  });
}

module.exports = async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  const session = getSessionFromRequest(req);
  if (!session.ok) {
    sendJson(res, 401, { error: 'Ikke autentisert. Logg inn i adminpanelet.' });
    return;
  }

  if (req.method !== 'POST') {
    sendJson(res, 405, { error: 'Method not allowed. Use POST.' });
    return;
  }

  const body = parseBody(req);
  const inputItems = Array.isArray(body && body.items) ? body.items : [];
  if (!inputItems.length) {
    sendJson(res, 400, { error: 'Mangler items for oversettelse.' });
    return;
  }
  if (inputItems.length > 200) {
    sendJson(res, 400, { error: 'For mange items i ett kall (maks 200).' });
    return;
  }

  const normalizedItems = inputItems.map((item, index) => normalizeGlyphInput(item, index));
  const config = resolveGeminiConfig();
  if (!config.apiKey) {
    sendJson(res, 500, {
      error: 'Mangler Gemini API key. Sett GEMINI_API_KEY i environment variables.',
      missing: ['GEMINI_API_KEY'],
      api_key_source: config.apiKeySource,
      model: config.model,
      model_source: config.modelSource,
    });
    return;
  }

  try {
    const translated = await callGeminiTranslate({
      apiKey: config.apiKey,
      model: config.model,
      items: normalizedItems,
    });

    sendJson(res, 200, {
      ok: true,
      model: config.model,
      count: translated.length,
      items: translated,
    });
  } catch (error) {
    sendJson(res, 502, {
      error: String(error && error.message ? error.message : error || 'Ukjent oversettelsesfeil'),
      model: config.model,
      model_source: config.modelSource,
    });
  }
};
