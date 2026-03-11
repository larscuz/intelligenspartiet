(function initRadarLanguageRuntime(globalScope) {
  "use strict";

  var SUBJECTS = [
    "TECHNOLOGY",
    "IDEA",
    "INSTITUTION",
    "EVENT",
    "BREAKTHROUGH",
    "SYSTEM",
    "INDIVIDUAL",
  ];

  var DOMAINS = [
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
  ];

  var VERBS = ["EXISTS", "GROWS", "DECLINES", "TRANSFORMS", "INFLUENCES"];
  var MAGNITUDES = ["LOW", "MEDIUM", "HIGH", "EXTREME"];
  var TIMES = ["NOW", "LT1Y", "Y1_3", "Y3_10", "GT10Y"];
  var CERTAINTIES = ["HYPOTHESIS", "INDICATION", "PROBABLE", "CONFIRMED"];

  var DOMAIN_TO_ANGLE = {
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

  var TIME_TO_RADIUS = {
    NOW: 0.12,
    LT1Y: 0.18,
    Y1_3: 0.24,
    Y3_10: 0.30,
    GT10Y: 0.34,
  };

  var MAGNITUDE_TO_LENGTH = {
    LOW: 0.08,
    MEDIUM: 0.12,
    HIGH: 0.16,
    EXTREME: 0.2,
  };

  var CERTAINTY_TO_DOTS = {
    HYPOTHESIS: 0,
    INDICATION: 1,
    PROBABLE: 2,
    CONFIRMED: 3,
  };

  var TOKEN_ALIASES = {
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

  function assertEnum(field, value, allowed) {
    if (allowed.indexOf(value) === -1) {
      throw new Error(
        "Invalid " + field + ": " + value + ". Expected one of: " + allowed.join(", ")
      );
    }
  }

  function validateStatement(statement) {
    if (!statement || typeof statement !== "object") {
      throw new Error("Statement must be an object.");
    }

    assertEnum("subject", statement.subject, SUBJECTS);
    assertEnum("domain", statement.domain, DOMAINS);
    assertEnum("verb", statement.verb, VERBS);
    assertEnum("magnitude", statement.magnitude, MAGNITUDES);
    assertEnum("time", statement.time, TIMES);
    assertEnum("certainty", statement.certainty, CERTAINTIES);

    return true;
  }

  function parseCanonicalSentence(sentence) {
    if (typeof sentence !== "string") {
      throw new Error("Canonical sentence must be a string.");
    }

    var tokens = sentence
      .split(".")
      .map(function normalizeToken(token) {
        return token.trim().toUpperCase();
      })
      .filter(Boolean);

    if (tokens.length !== 6) {
      throw new Error(
        "Canonical sentence must have 6 tokens, got " +
          tokens.length +
          ". Format: SUBJECT.DOMAIN.VERB.MAGNITUDE.TIME.CERTAINTY"
      );
    }

    function resolve(kind, token) {
      var resolved = TOKEN_ALIASES[kind] && TOKEN_ALIASES[kind][token];
      if (!resolved) {
        throw new Error("Unknown " + kind + " token: " + token);
      }
      return resolved;
    }

    var statement = {
      subject: resolve("subject", tokens[0]),
      domain: resolve("domain", tokens[1]),
      verb: resolve("verb", tokens[2]),
      magnitude: resolve("magnitude", tokens[3]),
      time: resolve("time", tokens[4]),
      certainty: resolve("certainty", tokens[5]),
    };

    validateStatement(statement);
    return statement;
  }

  function toRad(angleDeg) {
    return ((angleDeg - 90) * Math.PI) / 180;
  }

  function polar(cx, cy, radius, angleDeg) {
    var theta = toRad(angleDeg);
    return {
      x: cx + radius * Math.cos(theta),
      y: cy + radius * Math.sin(theta),
    };
  }

  function drawMarker(ctx, subject, point, color) {
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
      for (var i = 0; i < 10; i += 1) {
        var r = i % 2 === 0 ? 6 : 2.6;
        var a = (-90 + i * 36) * (Math.PI / 180);
        var x = point.x + Math.cos(a) * r;
        var y = point.y + Math.sin(a) * r;
        if (i === 0) ctx.beginPath();
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
    } else if (subject === "SYSTEM") {
      for (var h = 0; h < 6; h += 1) {
        var angle = (-90 + h * 60) * (Math.PI / 180);
        var hx = point.x + Math.cos(angle) * 6;
        var hy = point.y + Math.sin(angle) * 6;
        if (h === 0) ctx.beginPath();
        if (h === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
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

  function drawArrowHead(ctx, from, to, color, size) {
    var dx = to.x - from.x;
    var dy = to.y - from.y;
    var len = Math.sqrt(dx * dx + dy * dy) || 1;
    var ux = dx / len;
    var uy = dy / len;
    var px = -uy;
    var py = ux;

    var a = to;
    var b = {
      x: to.x - ux * size + px * (size * 0.58),
      y: to.y - uy * size + py * (size * 0.58),
    };
    var c = {
      x: to.x - ux * size - px * (size * 0.58),
      y: to.y - uy * size - py * (size * 0.58),
    };

    ctx.save();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.lineTo(c.x, c.y);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function drawCertaintyDots(ctx, statement, start, end, color, controlPoint) {
    var dotCount = CERTAINTY_TO_DOTS[statement.certainty];
    if (dotCount <= 0) return;

    ctx.save();
    ctx.fillStyle = color;

    for (var i = 1; i <= dotCount; i += 1) {
      var t = i / (dotCount + 1);
      var x;
      var y;

      if (statement.verb === "TRANSFORMS" && controlPoint) {
        var u = 1 - t;
        x =
          u * u * start.x +
          2 * u * t * controlPoint.x +
          t * t * end.x;
        y =
          u * u * start.y +
          2 * u * t * controlPoint.y +
          t * t * end.y;
      } else {
        x = start.x + (end.x - start.x) * t;
        y = start.y + (end.y - start.y) * t;
      }

      ctx.beginPath();
      ctx.arc(x, y, 2.2, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }

  function drawStatementGlyphToContext(ctx, statement, options) {
    validateStatement(statement);

    var opts = options || {};
    var w = ctx.canvas.width;
    var h = ctx.canvas.height;
    var size = Math.min(w, h);
    var cx = w * 0.5;
    var cy = h * 0.5;

    var bgColor = opts.backgroundColor || "rgba(6,14,24,0.74)";
    var lineColor = opts.lineColor || "rgba(102,221,255,0.96)";
    var gridColor = opts.gridColor || "rgba(102,221,255,0.58)";

    ctx.clearRect(0, 0, w, h);

    ctx.fillStyle = bgColor;
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

    var domainAngle = DOMAIN_TO_ANGLE[statement.domain];
    var timeRadius = TIME_TO_RADIUS[statement.time] * size;
    var vectorLength = MAGNITUDE_TO_LENGTH[statement.magnitude] * size;
    var anchor = polar(cx, cy, timeRadius, domainAngle);

    var theta = toRad(domainAngle);
    var ux = Math.cos(theta);
    var uy = Math.sin(theta);
    var tx = -uy;
    var ty = ux;

    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 2.4;
    ctx.lineCap = "round";

    var start = { x: anchor.x, y: anchor.y };
    var end = { x: anchor.x + ux * vectorLength, y: anchor.y + uy * vectorLength };
    var control = null;

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
      drawCertaintyDots(ctx, statement, start, end, lineColor, null);
    } else if (statement.verb === "DECLINES") {
      end = { x: anchor.x - ux * vectorLength, y: anchor.y - uy * vectorLength };
      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();
      drawArrowHead(ctx, start, end, lineColor, 7);
      drawCertaintyDots(ctx, statement, start, end, lineColor, null);
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
      var offset = 3.4;
      var s1 = { x: anchor.x + tx * offset, y: anchor.y + ty * offset };
      var e1 = { x: end.x + tx * offset, y: end.y + ty * offset };
      var s2 = { x: anchor.x - tx * offset, y: anchor.y - ty * offset };
      var e2 = { x: end.x - tx * offset, y: end.y - ty * offset };

      ctx.beginPath();
      ctx.moveTo(s1.x, s1.y);
      ctx.lineTo(e1.x, e1.y);
      ctx.moveTo(s2.x, s2.y);
      ctx.lineTo(e2.x, e2.y);
      ctx.stroke();

      drawArrowHead(ctx, s1, e1, lineColor, 6.6);
      drawArrowHead(ctx, s2, e2, lineColor, 6.6);
      drawCertaintyDots(ctx, statement, s1, e1, lineColor, null);
    } else {
      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();
      drawArrowHead(ctx, start, end, lineColor, 7);
      drawCertaintyDots(ctx, statement, start, end, lineColor, null);
    }

    ctx.fillStyle = lineColor;
    ctx.beginPath();
    ctx.arc(cx, cy, 5, 0, Math.PI * 2);
    ctx.fill();

    drawMarker(ctx, statement.subject, anchor, lineColor);
    return true;
  }

  function drawCanonicalGlyphToContext(ctx, canonical, options) {
    var statement = parseCanonicalSentence(canonical);
    return drawStatementGlyphToContext(ctx, statement, options);
  }

  var runtime = {
    parseCanonicalSentence: parseCanonicalSentence,
    validateStatement: validateStatement,
    drawStatementGlyphToContext: drawStatementGlyphToContext,
    drawCanonicalGlyphToContext: drawCanonicalGlyphToContext,
    constants: {
      SUBJECTS: SUBJECTS.slice(),
      DOMAINS: DOMAINS.slice(),
      VERBS: VERBS.slice(),
      MAGNITUDES: MAGNITUDES.slice(),
      TIMES: TIMES.slice(),
      CERTAINTIES: CERTAINTIES.slice(),
    },
  };

  globalScope.RadarLanguageRuntime = runtime;
})(typeof window !== "undefined" ? window : globalThis);
