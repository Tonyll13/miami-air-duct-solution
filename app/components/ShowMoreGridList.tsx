"use client";

import * as React from "react";

export default function ShowMoreGridList({
  items,
  initialRows = 5,
}: {
  items: string[];
  initialRows?: number;
}) {
  const [open, setOpen] = React.useState(false);

  // Desktop default: 3 columns -> 5 rows = 15 items
  const initialCount = initialRows * 3;

  const visible = open ? items : items.slice(0, initialCount);
  const hasMore = items.length > initialCount;

  return (
    <div>
      <ul className="svcListGrid">
        {visible.map((v) => (
          <li key={v}>{v}</li>
        ))}
      </ul>

      {hasMore ? (
        <button
          type="button"
          className="svcShowMoreBtn"
          onClick={() => setOpen((x) => !x)}
        >
          {open ? "Show less" : "Show more"}
        </button>
      ) : null}
    </div>
  );
}
