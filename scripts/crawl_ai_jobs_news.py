#!/usr/bin/env python3
"""Fetch AI + jobs related headlines and store them as JSON for the website."""

from __future__ import annotations

import argparse
import json
import re
import sys
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime
from html import unescape
from pathlib import Path
from urllib.parse import quote_plus
from urllib.request import Request, urlopen
from xml.etree import ElementTree as ET

DEFAULT_QUERIES = [
    "AI jobs layoffs automation",
    "artificial intelligence replacing workers",
    "AI workforce reskilling upskilling",
    "kunstig intelligens arbeidsplasser",
    "AI jobb oppsigelser",
]

NEGATIVE_STEMS = {
    "layoff",
    "job cut",
    "replace",
    "replac",
    "redundan",
    "firing",
    "fired",
    "oppsig",
    "erstatt",
    "kutt",
    "jobb tap",
    "job loss",
    "eliminat",
    "displac",
}

POSITIVE_STEMS = {
    "reskill",
    "upskill",
    "training",
    "train",
    "hiring",
    "new job",
    "kompetanse",
    "omskol",
    "etterutdanning",
    "retrain",
}

RSS_TEMPLATE = (
    "https://news.google.com/rss/search?"
    "q={query}&hl=en-US&gl=US&ceid=US:en"
)

USER_AGENT = "Mozilla/5.0 (compatible; IntelligenspartietNewsCrawler/1.0)"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Crawl AI and job-market headlines into assets/data/ai-jobs-news.json"
    )
    parser.add_argument(
        "--limit",
        type=int,
        default=90,
        help="Maximum number of items in output (default: 90)",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=Path("assets/data/ai-jobs-news.json"),
        help="Output JSON path",
    )
    parser.add_argument(
        "--query",
        action="append",
        default=[],
        help="Extra search query. Can be passed multiple times.",
    )
    return parser.parse_args()


def fetch_url(url: str) -> bytes:
    req = Request(url, headers={"User-Agent": USER_AGENT})
    with urlopen(req, timeout=20) as response:
        return response.read()


def strip_html(text: str) -> str:
    cleaned = re.sub(r"<[^>]+>", " ", text)
    cleaned = unescape(cleaned)
    cleaned = re.sub(r"\s+", " ", cleaned)
    return cleaned.strip()


def classify_tone(title: str, snippet: str) -> str:
    haystack = f"{title} {snippet}".lower()

    if any(stem in haystack for stem in NEGATIVE_STEMS):
        return "replacement_anxiety"
    if any(stem in haystack for stem in POSITIVE_STEMS):
        return "reskilling"
    return "neutral"


def parse_pub_date(raw: str | None) -> str:
    if not raw:
        return ""
    try:
        dt = parsedate_to_datetime(raw)
        if dt.tzinfo is None:
            dt = dt.replace(tzinfo=timezone.utc)
        return dt.astimezone(timezone.utc).isoformat()
    except Exception:
        return ""


def source_from_item(item: ET.Element, title: str) -> str:
    source_tag = item.find("source")
    if source_tag is not None and source_tag.text:
        return source_tag.text.strip()

    if " - " in title:
        maybe_source = title.split(" - ")[-1].strip()
        if 2 <= len(maybe_source) <= 64:
            return maybe_source

    return "Unknown"


def title_without_source(title: str, source: str) -> str:
    suffix = f" - {source}"
    if title.endswith(suffix):
        return title[: -len(suffix)].strip()
    return title.strip()


def crawl_queries(queries: list[str]) -> list[dict]:
    items: list[dict] = []
    seen: set[tuple[str, str]] = set()

    for query in queries:
        url = RSS_TEMPLATE.format(query=quote_plus(query))
        raw = fetch_url(url)
        root = ET.fromstring(raw)

        for channel_item in root.findall("./channel/item"):
            raw_title = (channel_item.findtext("title") or "").strip()
            if not raw_title:
                continue

            source = source_from_item(channel_item, raw_title)
            title = title_without_source(raw_title, source)
            link = (channel_item.findtext("link") or "").strip()
            snippet = strip_html(channel_item.findtext("description") or "")
            published_at = parse_pub_date(channel_item.findtext("pubDate"))

            dedupe_key = (title.lower(), link)
            if dedupe_key in seen:
                continue
            seen.add(dedupe_key)

            items.append(
                {
                    "title": title,
                    "source": source,
                    "url": link,
                    "snippet": snippet,
                    "published_at": published_at,
                    "tone": classify_tone(title, snippet),
                    "query": query,
                }
            )

    items.sort(key=lambda entry: entry.get("published_at") or "", reverse=True)
    return items


def build_payload(items: list[dict], queries: list[str], limit: int) -> dict:
    now = datetime.now(timezone.utc).isoformat()
    sliced = items[:limit]
    tone_counts = {
        "replacement_anxiety": sum(1 for item in sliced if item["tone"] == "replacement_anxiety"),
        "reskilling": sum(1 for item in sliced if item["tone"] == "reskilling"),
        "neutral": sum(1 for item in sliced if item["tone"] == "neutral"),
    }

    return {
        "generated_at": now,
        "total_items": len(sliced),
        "queries": queries,
        "tone_counts": tone_counts,
        "items": sliced,
    }


def main() -> int:
    args = parse_args()
    queries = DEFAULT_QUERIES + list(args.query)

    try:
        crawled = crawl_queries(queries)
    except Exception as exc:
        print(f"crawl failed: {exc}", file=sys.stderr)
        return 1

    payload = build_payload(crawled, queries, args.limit)

    output_path = args.output
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")

    print(f"wrote {payload['total_items']} items to {output_path}")
    print("tone counts:", payload["tone_counts"])
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
