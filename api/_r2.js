const crypto = require('crypto');

function pickEnv(candidates) {
  for (const candidate of candidates) {
    const value = String(candidate.value || '').trim();
    if (value) {
      return {
        value,
        source: candidate.name,
      };
    }
  }
  return {
    value: '',
    source: '',
  };
}

function encodeRfc3986(input) {
  return encodeURIComponent(String(input || '')).replace(/[!'()*]/g, (char) => `%${char.charCodeAt(0).toString(16).toUpperCase()}`);
}

function encodePath(pathValue) {
  return String(pathValue || '')
    .split('/')
    .filter(Boolean)
    .map((segment) => encodeRfc3986(segment))
    .join('/');
}

function hash(value) {
  return crypto.createHash('sha256').update(value).digest('hex');
}

function hmac(key, value, format = 'buffer') {
  return crypto.createHmac('sha256', key).update(value).digest(format);
}

function toAmzDate(date = new Date()) {
  const iso = date.toISOString();
  return iso.replace(/[:-]|\.\d{3}/g, '');
}

function toDateStamp(amzDate) {
  return String(amzDate || '').slice(0, 8);
}

function resolveR2Env() {
  const account = pickEnv([
    { name: 'R2_ACCOUNT_ID', value: process.env.R2_ACCOUNT_ID },
    { name: 'CLOUDFLARE_ACCOUNT_ID', value: process.env.CLOUDFLARE_ACCOUNT_ID },
  ]);

  const bucket = pickEnv([
    { name: 'R2_BUCKET', value: process.env.R2_BUCKET },
  ]);

  const accessKeyId = pickEnv([
    { name: 'R2_ACCESS_KEY_ID', value: process.env.R2_ACCESS_KEY_ID },
  ]);

  const secretAccessKey = pickEnv([
    { name: 'R2_SECRET_ACCESS_KEY', value: process.env.R2_SECRET_ACCESS_KEY },
  ]);

  const publicBaseUrl = pickEnv([
    { name: 'R2_PUBLIC_BASE_URL', value: process.env.R2_PUBLIC_BASE_URL },
  ]);

  return {
    accountId: account.value,
    bucket: bucket.value,
    accessKeyId: accessKeyId.value,
    secretAccessKey: secretAccessKey.value,
    publicBaseUrl: publicBaseUrl.value.replace(/\/+$/, ''),
    sources: {
      accountId: account.source || null,
      bucket: bucket.source || null,
      accessKeyId: accessKeyId.source || null,
      secretAccessKey: secretAccessKey.source || null,
      publicBaseUrl: publicBaseUrl.source || null,
    },
  };
}

function getR2EnvStatus() {
  const resolved = resolveR2Env();
  const missing = [];
  if (!resolved.accountId) missing.push('R2_ACCOUNT_ID');
  if (!resolved.bucket) missing.push('R2_BUCKET');
  if (!resolved.accessKeyId) missing.push('R2_ACCESS_KEY_ID');
  if (!resolved.secretAccessKey) missing.push('R2_SECRET_ACCESS_KEY');
  if (!resolved.publicBaseUrl) missing.push('R2_PUBLIC_BASE_URL');

  return {
    ok: missing.length === 0,
    missing,
    resolved: {
      accountId: resolved.accountId || null,
      bucket: resolved.bucket || null,
      hasAccessKeyId: Boolean(resolved.accessKeyId),
      hasSecretAccessKey: Boolean(resolved.secretAccessKey),
      publicBaseUrl: resolved.publicBaseUrl || null,
    },
    sources: resolved.sources,
  };
}

function sanitizeFolder(inputFolder) {
  const cleaned = String(inputFolder || '')
    .trim()
    .replace(/^\/*/, '')
    .replace(/\/*$/, '')
    .replace(/[^a-zA-Z0-9/_-]+/g, '-')
    .replace(/-{2,}/g, '-');

  if (!cleaned || cleaned.includes('..')) {
    return 'uploads';
  }

  return cleaned;
}

function sanitizeFilename(inputName) {
  const raw = String(inputName || '').split('/').pop() || 'file';
  const normalized = raw.normalize('NFKD').replace(/[^\x00-\x7F]/g, '');
  const collapsed = normalized.replace(/[^a-zA-Z0-9._-]+/g, '-').replace(/-{2,}/g, '-').replace(/^-+|-+$/g, '');
  return collapsed || 'file';
}

function splitFilename(filename) {
  const safe = sanitizeFilename(filename);
  const match = safe.match(/^(.*?)(\.[a-zA-Z0-9]{1,10})?$/);
  const base = String(match && match[1] || 'file').slice(0, 80) || 'file';
  const ext = String(match && match[2] || '').toLowerCase();
  return { base, ext };
}

function inferExtension(contentType = '') {
  const type = String(contentType || '').toLowerCase().trim();
  if (type === 'video/mp4') return '.mp4';
  if (type === 'video/webm') return '.webm';
  if (type === 'image/jpeg') return '.jpg';
  if (type === 'image/png') return '.png';
  if (type === 'image/webp') return '.webp';
  if (type === 'image/gif') return '.gif';
  return '';
}

function buildObjectKey({ folder, filename, contentType }) {
  const safeFolder = sanitizeFolder(folder);
  const { base, ext } = splitFilename(filename);
  const inferredExt = ext || inferExtension(contentType) || '';
  const timestamp = Date.now();
  const random = crypto.randomBytes(4).toString('hex');
  return `${safeFolder}/${timestamp}-${random}-${base}${inferredExt}`;
}

function buildSigningKey(secretAccessKey, dateStamp, region, service) {
  const kDate = hmac(`AWS4${secretAccessKey}`, dateStamp);
  const kRegion = hmac(kDate, region);
  const kService = hmac(kRegion, service);
  return hmac(kService, 'aws4_request');
}

function createPresignedPutUrl({ key, expiresIn = 900 }) {
  const env = resolveR2Env();
  const host = `${env.accountId}.r2.cloudflarestorage.com`;
  const method = 'PUT';
  const region = 'auto';
  const service = 's3';
  const now = new Date();
  const amzDate = toAmzDate(now);
  const dateStamp = toDateStamp(amzDate);
  const credentialScope = `${dateStamp}/${region}/${service}/aws4_request`;
  const canonicalUri = `/${encodePath(env.bucket)}/${encodePath(key)}`;

  const query = {
    'X-Amz-Algorithm': 'AWS4-HMAC-SHA256',
    'X-Amz-Credential': `${env.accessKeyId}/${credentialScope}`,
    'X-Amz-Date': amzDate,
    'X-Amz-Expires': String(expiresIn),
    'X-Amz-SignedHeaders': 'host',
  };

  const canonicalQueryString = Object.keys(query)
    .sort()
    .map((queryKey) => `${encodeRfc3986(queryKey)}=${encodeRfc3986(query[queryKey])}`)
    .join('&');

  const canonicalRequest = [
    method,
    canonicalUri,
    canonicalQueryString,
    `host:${host}\n`,
    'host',
    'UNSIGNED-PAYLOAD',
  ].join('\n');

  const stringToSign = [
    'AWS4-HMAC-SHA256',
    amzDate,
    credentialScope,
    hash(canonicalRequest),
  ].join('\n');

  const signingKey = buildSigningKey(env.secretAccessKey, dateStamp, region, service);
  const signature = hmac(signingKey, stringToSign, 'hex');
  const uploadUrl = `https://${host}${canonicalUri}?${canonicalQueryString}&X-Amz-Signature=${signature}`;

  return {
    uploadUrl,
    expiresIn,
    expiresAt: new Date(now.getTime() + expiresIn * 1000).toISOString(),
  };
}

function buildPublicObjectUrl(key) {
  const env = resolveR2Env();
  return `${env.publicBaseUrl}/${encodePath(key)}`;
}

module.exports = {
  getR2EnvStatus,
  buildObjectKey,
  createPresignedPutUrl,
  buildPublicObjectUrl,
};
