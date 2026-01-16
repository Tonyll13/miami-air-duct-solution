export function cleanJsonLd<T>(obj: T): T {
  // מסיר keys עם undefined/null/"" ומסיר מערכים ריקים (רקורסיבי)
  const walk = (v: any): any => {
    if (Array.isArray(v)) {
      const arr = v.map(walk).filter((x) => x !== undefined);
      return arr.length ? arr : undefined;
    }
    if (v && typeof v === "object") {
      const out: any = {};
      for (const [k, val] of Object.entries(v)) {
        const cleaned = walk(val);
        if (
          cleaned === undefined ||
          cleaned === null ||
          cleaned === "" ||
          (typeof cleaned === "object" && !Array.isArray(cleaned) && Object.keys(cleaned).length === 0)
        ) {
          continue;
        }
        out[k] = cleaned;
      }
      return Object.keys(out).length ? out : undefined;
    }
    return v;
  };

  return (walk(obj) ?? obj) as T;
}
