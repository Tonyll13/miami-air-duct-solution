"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type BlogCategory =
  | "Air Duct Cleaning"
  | "Dryer Vent Cleaning"
  | "Chimney"
  | "Attic Insulation"
  | "Commercial";

export type BlogPost = {
  title: string;
  slug: string;
  desc: string;
  category: BlogCategory;
  location?: "Miami" | "South Florida";
  intent?: "Guide" | "Cost" | "Safety" | "Signs";
  keywords?: string[];
};

const categories = [
  "All",
  "Air Duct Cleaning",
  "Dryer Vent Cleaning",
  "Chimney",
  "Attic Insulation",
  "Commercial",
] as const;

type Category = (typeof categories)[number];

function normalize(s: string) {
  return s.toLowerCase().trim();
}

export default function BlogSearchClient({ posts }: { posts: BlogPost[] }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<Category>("All");

  const filtered = useMemo(() => {
    const query = normalize(q);

    return posts.filter((p) => {
      if (cat !== "All" && p.category !== cat) return false;
      if (!query) return true;

      const haystack = normalize(
        [
          p.title,
          p.desc,
          p.category,
          p.location ?? "",
          p.intent ?? "",
          ...(p.keywords ?? []),
        ].join(" ")
      );

      return haystack.includes(query);
    });
  }, [posts, q, cat]);

  const clearAll = () => {
    setQ("");
    setCat("All");
  };

  return (
    <>
      {/* Search + Filters */}
      <div className="card" style={{ marginBottom: 16 }}>
        <div style={{ display: "grid", gap: 10 }}>
          <input
            className="leadFormInput"
            style={{
              width: "100%",
              padding: "12px 12px",
              border: "1px solid var(--border)",
              borderRadius: 12,
              fontSize: 16,
            }}
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder='Search: "air duct cleaning miami", "dryer vent fire risk", "attic insulation"...'
          />

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
            {categories.map((c) => {
              const active = c === cat;
              return (
                <button
                  key={c}
                  type="button"
                  className="svcChipSolid"
                  onClick={() => setCat(c)}
                  aria-pressed={active}
                  style={{
                    cursor: "pointer",
                    border: active ? "2px solid var(--text)" : "1px solid var(--border)",
                    opacity: active ? 1 : 0.9,
                  }}
                >
                  {c}
                </button>
              );
            })}

            <button
              type="button"
              className="secondaryBtn"
              onClick={clearAll}
              style={{ marginLeft: "auto" }}
            >
              Clear
            </button>
          </div>

          <p className="svcMini" style={{ margin: 0 }}>
            Showing <strong>{filtered.length}</strong> of <strong>{posts.length}</strong>
            {cat !== "All" ? (
              <>
                {" "}
                in <strong>{cat}</strong>
              </>
            ) : null}
            {q.trim() ? (
              <>
                {" "}
                matching <strong>“{q.trim()}”</strong>
              </>
            ) : null}
            .
          </p>
        </div>
      </div>

      {/* Results */}
      <div className="blogGrid">
        {filtered.map((p) => (
          <Link key={p.title} href={p.slug} className="card" style={{ display: "block" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
              <span className="svcChipSolid">{p.category}</span>
              {p.location ? <span className="svcChipSolid">{p.location}</span> : null}
              {p.intent ? <span className="svcChipSolid">{p.intent}</span> : null}
            </div>

            <h3 style={{ marginTop: 0 }}>{p.title}</h3>
            <p style={{ marginBottom: 10 }}>{p.desc}</p>

            <div className="mini" style={{ fontWeight: 900 }}>
              Read more →
            </div>
          </Link>
        ))}

        {!filtered.length ? (
          <div className="card" style={{ gridColumn: "1 / -1" }}>
            <h3 style={{ marginTop: 0 }}>No results</h3>
            <p style={{ marginBottom: 0 }}>
              Try a different keyword (example: <strong>“Miami”</strong>, <strong>“cost”</strong>,{" "}
              <strong>“signs”</strong>) or switch category.
            </p>
          </div>
        ) : null}
      </div>
    </>
  );
}
