import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/app/lib/supabaseAdmin";

async function getAccessToken() {
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_OAUTH_CLIENT_ID!,
      client_secret: process.env.GOOGLE_OAUTH_CLIENT_SECRET!,
      refresh_token: process.env.GOOGLE_OAUTH_REFRESH_TOKEN!,
      grant_type: "refresh_token",
    }),
  });

  const json = await res.json();
  if (!res.ok) throw new Error(json?.error_description || "Token refresh failed");
  return json.access_token as string;
}

export async function POST(req: Request) {
  // Protect this endpoint
  const auth = req.headers.get("authorization") || "";
  const expected = `Bearer ${process.env.REVIEWS_SYNC_SECRET}`;
  if (auth !== expected) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  const locationName = process.env.GBP_LOCATION_NAME; // "accounts/.../locations/..."
  if (!locationName) {
    return NextResponse.json({ ok: false, message: "Missing GBP_LOCATION_NAME" }, { status: 500 });
  }

  try {
    const accessToken = await getAccessToken();

    // GBP reviews list (v4)
    const url = `https://mybusiness.googleapis.com/v4/${locationName}/reviews?pageSize=50&orderBy=updateTime desc`;
    const r = await fetch(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const j = await r.json();
    if (!r.ok) throw new Error(j?.error?.message || "Failed to fetch reviews");

    const now = new Date();
    const expiresAt = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString(); // 30 days

    const rows = (j?.reviews ?? []).map((rev: any) => ({
      review_id: rev.name, // unique id
      location_name: locationName,
      rating: rev.starRating ? Number(String(rev.starRating).replace(/\D/g, "")) : null,
      comment: rev.comment ?? null,
      reviewer_name: rev.reviewer?.displayName ?? null,
      reviewer_uri: rev.reviewer?.profileUrl ?? null,
      reviewer_photo_url: rev.reviewer?.profilePhotoUrl ?? null,
      create_time: rev.createTime ?? null,
      update_time: rev.updateTime ?? null,
      synced_at: now.toISOString(),
      expires_at: expiresAt,
    }));

    // Upsert
    if (rows.length) {
      const { error } = await supabaseAdmin
        .from("gbp_reviews")
        .upsert(rows, { onConflict: "review_id" });

      if (error) throw new Error(error.message);
    }

    // Enforce TTL (compliance)
    await supabaseAdmin.from("gbp_reviews").delete().lt("expires_at", now.toISOString());

    return NextResponse.json({ ok: true, count: rows.length });
  } catch (e: any) {
    return NextResponse.json({ ok: false, message: e?.message || "Sync failed" }, { status: 500 });
  }
}
