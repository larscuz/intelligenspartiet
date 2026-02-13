const { getSessionFromRequest } = require('./_auth');
const {
  getR2EnvStatus,
  buildObjectKey,
  createPresignedPutUrl,
  buildPublicObjectUrl,
} = require('./_r2');

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

module.exports = async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  const r2Status = getR2EnvStatus();
  if (!r2Status.ok) {
    sendJson(res, 500, {
      error: `R2 env mangler: ${r2Status.missing.join(', ')}`,
      missing: r2Status.missing,
      resolved: r2Status.resolved,
      sources: r2Status.sources,
    });
    return;
  }

  const session = getSessionFromRequest(req);
  if (!session.ok) {
    sendJson(res, 401, { error: 'Ikke autentisert. Logg inn i adminpanelet.' });
    return;
  }

  if (req.method === 'GET') {
    sendJson(res, 200, {
      ok: true,
      configured: true,
      bucket: r2Status.resolved.bucket,
      public_base_url: r2Status.resolved.publicBaseUrl,
      account_id: r2Status.resolved.accountId,
      session_email: session.email || '',
    });
    return;
  }

  if (req.method !== 'POST') {
    sendJson(res, 405, { error: 'Method not allowed. Use GET or POST.' });
    return;
  }

  const body = parseBody(req);
  const filename = String(body.filename || '').trim();
  const contentType = String(body.content_type || '').trim();
  const folder = String(body.folder || 'uploads').trim();
  const expiresInRaw = Number(body.expires_in || 900);
  const expiresIn = Number.isFinite(expiresInRaw)
    ? Math.max(60, Math.min(3600, Math.round(expiresInRaw)))
    : 900;

  if (!filename) {
    sendJson(res, 400, { error: 'filename er påkrevd.' });
    return;
  }

  const key = buildObjectKey({ folder, filename, contentType });
  const signed = createPresignedPutUrl({ key, expiresIn });
  const publicUrl = buildPublicObjectUrl(key);

  sendJson(res, 200, {
    ok: true,
    key,
    upload_url: signed.uploadUrl,
    public_url: publicUrl,
    expires_in: signed.expiresIn,
    expires_at: signed.expiresAt,
    content_type: contentType || null,
  });
};
