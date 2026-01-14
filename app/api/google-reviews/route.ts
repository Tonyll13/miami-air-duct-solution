import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/app/lib/supabaseAdmin";

export async function GET() {
  const { data, error } = await supabaseAdmin
    .from("gbp_reviews")
    .select("review_id,rating,comment,reviewer_name,reviewer_uri,reviewer_photo_url,create_time")
    .gt("expires_at", new Date().toISOString())
    .order("create_time", { ascending: false })
    .limit(20);

  if (error) {
    return NextResponse.json({ reviews: [] }, { status: 200 });
  }

  // מחזירים בפורמט שדומה למה שהקומפוננטה שלך מצפה לו
  const reviews = (data ?? []).map((r) => ({
    rating: r.rating ?? 5,
    relativePublishTimeDescription: r.create_time
      ? new Date(r.create_time).toLocaleDateString()
      : "",
    text: { text: r.comment ?? "" },
    authorAttribution: {
      displayName: r.reviewer_name ?? "Google user",
      uri: r.reviewer_uri ?? undefined,
    },
  }));

  return NextResponse.json({ reviews }, { status: 200 });
}
