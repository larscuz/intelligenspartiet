export type RlStatement = {
  subject:
    | "TECHNOLOGY"
    | "IDEA"
    | "INSTITUTION"
    | "EVENT"
    | "BREAKTHROUGH"
    | "SYSTEM"
    | "INDIVIDUAL";
  domain:
    | "SOCIETY"
    | "POLITICS"
    | "ECONOMY"
    | "TECHNOLOGY"
    | "MEDIA"
    | "CULTURE"
    | "SCIENCE"
    | "EDUCATION"
    | "ENVIRONMENT"
    | "INFRASTRUCTURE"
    | "ORGANIZATIONS"
    | "INDIVIDUALS";
  verb: "EXISTS" | "GROWS" | "DECLINES" | "TRANSFORMS" | "INFLUENCES";
  magnitude: "LOW" | "MEDIUM" | "HIGH" | "EXTREME";
  time: "NOW" | "LT1Y" | "Y1_3" | "Y3_10" | "GT10Y";
  certainty: "HYPOTHESIS" | "INDICATION" | "PROBABLE" | "CONFIRMED";
};

const SUBJECTS = [
  "TECHNOLOGY",
  "IDEA",
  "INSTITUTION",
  "EVENT",
  "BREAKTHROUGH",
  "SYSTEM",
  "INDIVIDUAL",
] as const;

const DOMAINS = [
  "SOCIETY",
  "POLITICS",
  "ECONOMY",
  "TECHNOLOGY",
  "MEDIA",
  "CULTURE",
  "SCIENCE",
  "EDUCATION",
  "ENVIRONMENT",
  "INFRASTRUCTURE",
  "ORGANIZATIONS",
  "INDIVIDUALS",
] as const;

const VERBS = ["EXISTS", "GROWS", "DECLINES", "TRANSFORMS", "INFLUENCES"] as const;
const MAGNITUDES = ["LOW", "MEDIUM", "HIGH", "EXTREME"] as const;
const TIMES = ["NOW", "LT1Y", "Y1_3", "Y3_10", "GT10Y"] as const;
const CERTAINTIES = ["HYPOTHESIS", "INDICATION", "PROBABLE", "CONFIRMED"] as const;

const DOMAIN_TO_ANGLE: Record<RlStatement["domain"], number> = {
  SOCIETY: 0,
  POLITICS: 30,
  ECONOMY: 60,
  TECHNOLOGY: 90,
  MEDIA: 120,
  CULTURE: 150,
  SCIENCE: 180,
  EDUCATION: 210,
  ENVIRONMENT: 240,
  INFRASTRUCTURE: 270,
  ORGANIZATIONS: 300,
  INDIVIDUALS: 330,
};

const TIME_TO_RADIUS: Record<RlStatement["time"], number> = {
  NOW: 0.12,
  LT1Y: 0.18,
  Y1_3: 0.24,
  Y3_10: 0.30,
  GT10Y: 0.34,
};

const MAGNITUDE_TO_LENGTH: Record<RlStatement["magnitude"], number> = {
  LOW: 0.08,
  MEDIUM: 0.12,
  HIGH: 0.16,
  EXTREME: 0.2,
};

const CERTAINTY_TO_DOTS: Record<RlStatement["certainty"], number> = {
  HYPOTHESIS: 0,
  INDICATION: 1,
  PROBABLE: 2,
  CONFIRMED: 3,
};

const TOKEN_ALIASES = {
  subject: {
    TECH: "TECHNOLOGY",
    TECHNOLOGY: "TECHNOLOGY",
    IDE: "IDEA",
    IDEA: "IDEA",
    INSTITUTION: "INSTITUTION",
    INST: "INSTITUTION",
    EVENT: "EVENT",
    EVT: "EVENT",
    BREAKTHROUGH: "BREAKTHROUGH",
    BRK: "BREAKTHROUGH",
    SYSTEM: "SYSTEM",
    SYS: "SYSTEM",
    INDIVIDUAL: "INDIVIDUAL",
    IND: "INDIVIDUAL",
  },
  domain: {
    SOC: "SOCIETY",
    SOCIETY: "SOCIETY",
    POL: "POLITICS",
    POLITICS: "POLITICS",
    ECO: "ECONOMY",
    ECONOMY: "ECONOMY",
    TECH: "TECHNOLOGY",
    TECHNOLOGY: "TECHNOLOGY",
    MEDIA: "MEDIA",
    CULTURE: "CULTURE",
    CUL: "CULTURE",
    SCI: "SCIENCE",
    SCIENCE: "SCIENCE",
    EDU: "EDUCATION",
    EDUCATION: "EDUCATION",
    ENV: "ENVIRONMENT",
    ENVIRONMENT: "ENVIRONMENT",
    INF: "INFRASTRUCTURE",
    INFRASTRUCTURE: "INFRASTRUCTURE",
    ORG: "ORGANIZATIONS",
    ORGANIZATIONS: "ORGANIZATIONS",
    INDS: "INDIVIDUALS",
    INDIVIDUALS: "INDIVIDUALS",
  },
  verb: {
    EXISTS: "EXISTS",
    IS: "EXISTS",
    GROWS: "GROWS",
    GROW: "GROWS",
    DECLINES: "DECLINES",
    DECLINE: "DECLINES",
    TRANSFORMS: "TRANSFORMS",
    TRANSFORM: "TRANSFORMS",
    INFLUENCES: "INFLUENCES",
    INFLUENCE: "INFLUENCES",
  },
  magnitude: {
    LOW: "LOW",
    MEDIUM: "MEDIUM",
    HIGH: "HIGH",
    EXTREME: "EXTREME",
  },
  time: {
    NOW: "NOW",
    LT1Y: "LT1Y",
    Y1_3: "Y1_3",
    Y3_10: "Y3_10",
    GT10Y: "GT10Y",
  },
  certainty: {
    HYPOTHESIS: "HYPOTHESIS",
    INDICATION: "INDICATION",
    PROBABLE: "PROBABLE",
    CONFIRMED: "CONFIRMED",
  },
};

function toRad(angleDeg: number) {
  return ((angleDeg - 90) * Math.PI) / 180;
}

function polar(cx: number, cy: number, radius: number, angleDeg: number) {
  const theta = toRad(angleDeg);
  return {
    x: cx + radius * Math.cos(theta),
    y: cy + radius * Math.sin(theta),
  };
}

function assertEnum(field: string, value: string, allowed: readonly string[]) {
  if (!allowed.includes(value)) {
    throw new Error(`Invalid ${field}: ${value}. Expected one of: ${allowed.join(", ")}`);
  }
}

function validateStatement(statement: RlStatement) {
  assertEnum("subject", statement.subject, SUBJECTS);
  assertEnum("domain", statement.domain, DOMAINS);
  assertEnum("verb", statement.verb, VERBS);
  assertEnum("magnitude", statement.magnitude, MAGNITUDES);
  assertEnum("time", statement.time, TIMES);
  assertEnum("certainty", statement.certainty, CERTAINTIES);
}

export function parseCanonicalSentence(input: string): RlStatement {
  const tokens = input
    .split(".")
    .map((token) => token.trim().toUpperCase())
    .filter(Boolean);

  if (tokens.length !== 6) {
    throw new Error(
      `Canonical sentence must have 6 tokens, got ${tokens.length}. Format: SUBJECT.DOMAIN.VERB.MAGNITUDE.TIME.CERTAINTY`
    );
  }

  function resolve<K extends keyof typeof TOKEN_ALIASES>(kind: K, token: string) {
    const value = TOKEN_ALIASES[kind][token as keyof (typeof TOKEN_ALIASES)[K]];
    if (!value) {
      throw new Error(`Unknown ${kind} token: ${token}`);
    }
    return value;
  }

  const statement: RlStatement = {
    subject: resolve("subject", tokens[0]) as RlStatement["subject"],
    domain: resolve("domain", tokens[1]) as RlStatement["domain"],
    verb: resolve("verb", tokens[2]) as RlStatement["verb"],
    magnitude: resolve("magnitude", tokens[3]) as RlStatement["magnitude"],
    time: resolve("time", tokens[4]) as RlStatement["time"],
    certainty: resolve("certainty", tokens[5]) as RlStatement["certainty"],
  };

  validateStatement(statement);
  return statement;
}

export function serializeCanonicalSentence(statement: RlStatement): string {
  validateStatement(statement);
  return [
    statement.subject,
    statement.domain,
    statement.verb,
    statement.magnitude,
    statement.time,
    statement.certainty,
  ].join(".");
}

export function canonicalizeCanonicalSentence(input: string): string {
  return serializeCanonicalSentence(parseCanonicalSentence(input));
}

function drawMarker(
  ctx: CanvasRenderingContext2D,
  subject: RlStatement["subject"],
  point: { x: number; y: number },
  color: string
) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 2;

  if (subject === "TECHNOLOGY") {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
    ctx.stroke();
  } else if (subject === "IDEA") {
    ctx.beginPath();
    ctx.moveTo(point.x, point.y - 6);
    ctx.lineTo(point.x + 6, point.y + 5);
    ctx.lineTo(point.x - 6, point.y + 5);
    ctx.closePath();
    ctx.stroke();
  } else if (subject === "INSTITUTION") {
    ctx.strokeRect(point.x - 5, point.y - 5, 10, 10);
  } else if (subject === "EVENT") {
    ctx.beginPath();
    ctx.moveTo(point.x, point.y - 6);
    ctx.lineTo(point.x + 6, point.y);
    ctx.lineTo(point.x, point.y + 6);
    ctx.lineTo(point.x - 6, point.y);
    ctx.closePath();
    ctx.stroke();
  } else if (subject === "BREAKTHROUGH") {
    for (let i = 0; i < 10; i += 1) {
      const r = i % 2 === 0 ? 6 : 2.6;
      const a = (-90 + i * 36) * (Math.PI / 180);
      const x = point.x + Math.cos(a) * r;
      const y = point.y + Math.sin(a) * r;
      if (i === 0) ctx.beginPath();
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
  } else if (subject === "SYSTEM") {
    for (let i = 0; i < 6; i += 1) {
      const a = (-90 + i * 60) * (Math.PI / 180);
      const x = point.x + Math.cos(a) * 6;
      const y = point.y + Math.sin(a) * 6;
      if (i === 0) ctx.beginPath();
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
  } else {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 2.6, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

function drawArrowHead(
  ctx: CanvasRenderingContext2D,
  from: { x: number; y: number },
  to: { x: number; y: number },
  color: string,
  size: number
) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const px = -uy;
  const py = ux;

  const b = {
    x: to.x - ux * size + px * (size * 0.58),
    y: to.y - uy * size + py * (size * 0.58),
  };
  const c = {
    x: to.x - ux * size - px * (size * 0.58),
    y: to.y - uy * size - py * (size * 0.58),
  };

  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(to.x, to.y);
  ctx.lineTo(b.x, b.y);
  ctx.lineTo(c.x, c.y);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawCertaintyDots(
  ctx: CanvasRenderingContext2D,
  statement: RlStatement,
  start: { x: number; y: number },
  end: { x: number; y: number },
  color: string,
  control?: { x: number; y: number }
) {
  const dotCount = CERTAINTY_TO_DOTS[statement.certainty];
  if (dotCount <= 0) return;

  ctx.save();
  ctx.fillStyle = color;

  for (let i = 1; i <= dotCount; i += 1) {
    const t = i / (dotCount + 1);
    let x = start.x + (end.x - start.x) * t;
    let y = start.y + (end.y - start.y) * t;

    if (statement.verb === "TRANSFORMS" && control) {
      const u = 1 - t;
      x = u * u * start.x + 2 * u * t * control.x + t * t * end.x;
      y = u * u * start.y + 2 * u * t * control.y + t * t * end.y;
    }

    ctx.beginPath();
    ctx.arc(x, y, 2.2, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

export function drawSemanticGlyphToContext(
  ctx: CanvasRenderingContext2D,
  statement: RlStatement,
  options?: {
    backgroundColor?: string;
    lineColor?: string;
    gridColor?: string;
  }
) {
  validateStatement(statement);

  const w = ctx.canvas.width;
  const h = ctx.canvas.height;
  const size = Math.min(w, h);
  const cx = w * 0.5;
  const cy = h * 0.5;

  const backgroundColor = options?.backgroundColor ?? "rgba(6,14,24,0.74)";
  const lineColor = options?.lineColor ?? "rgba(102,221,255,0.96)";
  const gridColor = options?.gridColor ?? "rgba(102,221,255,0.58)";

  ctx.clearRect(0, 0, w, h);

  ctx.fillStyle = backgroundColor;
  ctx.beginPath();
  ctx.arc(cx, cy, size * 0.42, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = gridColor;
  ctx.lineWidth = 2.1;
  ctx.beginPath();
  ctx.arc(cx, cy, size * 0.38, 0, Math.PI * 2);
  ctx.stroke();

  ctx.lineWidth = 1.6;
  ctx.beginPath();
  ctx.arc(cx, cy, size * 0.12, 0, Math.PI * 2);
  ctx.stroke();

  const domainAngle = DOMAIN_TO_ANGLE[statement.domain];
  const timeRadius = TIME_TO_RADIUS[statement.time] * size;
  const vectorLength = MAGNITUDE_TO_LENGTH[statement.magnitude] * size;
  const anchor = polar(cx, cy, timeRadius, domainAngle);

  const theta = toRad(domainAngle);
  const ux = Math.cos(theta);
  const uy = Math.sin(theta);
  const tx = -uy;
  const ty = ux;

  ctx.strokeStyle = lineColor;
  ctx.lineWidth = 2.4;
  ctx.lineCap = "round";

  let start = { x: anchor.x, y: anchor.y };
  let end = { x: anchor.x + ux * vectorLength, y: anchor.y + uy * vectorLength };
  let control: { x: number; y: number } | undefined;

  if (statement.verb === "EXISTS") {
    start = {
      x: anchor.x - tx * (vectorLength * 0.48),
      y: anchor.y - ty * (vectorLength * 0.48),
    };
    end = {
      x: anchor.x + tx * (vectorLength * 0.48),
      y: anchor.y + ty * (vectorLength * 0.48),
    };
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
    drawCertaintyDots(ctx, statement, start, end, lineColor);
  } else if (statement.verb === "DECLINES") {
    end = { x: anchor.x - ux * vectorLength, y: anchor.y - uy * vectorLength };
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
    drawArrowHead(ctx, start, end, lineColor, 7);
    drawCertaintyDots(ctx, statement, start, end, lineColor);
  } else if (statement.verb === "TRANSFORMS") {
    control = {
      x: anchor.x + tx * (vectorLength * 0.34) + ux * (vectorLength * 0.34),
      y: anchor.y + ty * (vectorLength * 0.34) + uy * (vectorLength * 0.34),
    };
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.quadraticCurveTo(control.x, control.y, end.x, end.y);
    ctx.stroke();
    drawArrowHead(ctx, control, end, lineColor, 7);
    drawCertaintyDots(ctx, statement, start, end, lineColor, control);
  } else if (statement.verb === "INFLUENCES") {
    const offset = 3.4;
    const s1 = { x: anchor.x + tx * offset, y: anchor.y + ty * offset };
    const e1 = { x: end.x + tx * offset, y: end.y + ty * offset };
    const s2 = { x: anchor.x - tx * offset, y: anchor.y - ty * offset };
    const e2 = { x: end.x - tx * offset, y: end.y - ty * offset };

    ctx.beginPath();
    ctx.moveTo(s1.x, s1.y);
    ctx.lineTo(e1.x, e1.y);
    ctx.moveTo(s2.x, s2.y);
    ctx.lineTo(e2.x, e2.y);
    ctx.stroke();

    drawArrowHead(ctx, s1, e1, lineColor, 6.6);
    drawArrowHead(ctx, s2, e2, lineColor, 6.6);
    drawCertaintyDots(ctx, statement, s1, e1, lineColor);
  } else {
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
    drawArrowHead(ctx, start, end, lineColor, 7);
    drawCertaintyDots(ctx, statement, start, end, lineColor);
  }

  ctx.fillStyle = lineColor;
  ctx.beginPath();
  ctx.arc(cx, cy, 5, 0, Math.PI * 2);
  ctx.fill();

  drawMarker(ctx, statement.subject, anchor, lineColor);
}

export function drawCanonicalGlyphToContext(
  ctx: CanvasRenderingContext2D,
  canonical: string,
  options?: {
    backgroundColor?: string;
    lineColor?: string;
    gridColor?: string;
  }
) {
  const statement = parseCanonicalSentence(canonical);
  drawSemanticGlyphToContext(ctx, statement, options);
}
