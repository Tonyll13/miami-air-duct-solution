"use client";

import Image from "next/image";
import { useId, useState } from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
  className?: string;
};

export default function BeforeAfter({ beforeSrc, afterSrc, alt, className }: Props) {
  const id = useId();
  const [pos, setPos] = useState(50); // 0..100

  return (
    <div className={`relative w-full overflow-hidden rounded-xl bg-zinc-100 ${className ?? ""}`}>
      {/* base aspect ratio like the screenshot */}
      <div className="relative aspect-[3/2] w-full">
        {/* BEFORE (base) */}
        <Image
          src={beforeSrc}
          alt={`${alt} before`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 25vw"
          priority={false}
        />

        {/* AFTER (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${pos}%` }}
          aria-hidden="true"
        >
          <div className="relative h-full w-full">
            <Image
              src={afterSrc}
              alt={`${alt} after`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white/80 shadow"
          style={{ left: `${pos}%` }}
          aria-hidden="true"
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-2 py-1 text-xs font-semibold shadow"
          style={{ left: `${pos}%`, transform: "translate(-50%, -50%)" }}
          aria-hidden="true"
        >
        </div>

        {/* Range input (invisible but interactive) */}
        <label htmlFor={id} className="sr-only">
          Compare before and after
        </label>
        <input
          id={id}
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
    </div>
  );
}
