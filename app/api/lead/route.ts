import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function esc(v: unknown) {
  return String(v ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[c] as string));
}

function normalizePhone(v: string) {
  return v.replace(/[^\d+]/g, "").trim();
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body?.name ?? "").trim();
    const phone = normalizePhone(String(body?.phone ?? ""));
    const email = String(body?.email ?? "").trim();
    const address = String(body?.address ?? "").trim();
    const service = String(body?.service ?? "").trim();
    const message = String(body?.message ?? "").trim();

    // Consents can come as "on", true, "true", etc.
    const smsInfoConsent =
      body?.smsInfoConsent === "on" || body?.smsInfoConsent === true || body?.smsInfoConsent === "true";
    const smsMarketingConsent =
      body?.smsMarketingConsent === "on" || body?.smsMarketingConsent === true || body?.smsMarketingConsent === "true";

    if (!name || !address || !service || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // ✅ At least one contact method
    if (!phone && !email) {
      return NextResponse.json(
        { success: false, message: "Please provide either a phone number or an email address." },
        { status: 400 }
      );
    }

    // ✅ If phone provided, require at least one SMS consent
    if (phone && !(smsInfoConsent || smsMarketingConsent)) {
      return NextResponse.json(
        { success: false, message: "SMS consent is required when a phone number is provided." },
        { status: 400 }
      );
    }

    const to = process.env.LEADS_TO_EMAIL;
    const from = process.env.LEADS_FROM_EMAIL;
    const apiKey = process.env.RESEND_API_KEY;

    if (!to || !from || !apiKey) {
      return NextResponse.json(
        { success: false, message: "Server email config missing" },
        { status: 500 }
      );
    }

    const subject = `New Lead: ${service} — ${name}`;

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.4">
        <h2 style="margin:0 0 12px">New Website Lead</h2>
        <table cellpadding="6" cellspacing="0" style="border-collapse:collapse">
          <tr><td><b>Name</b></td><td>${esc(name)}</td></tr>
          <tr><td><b>Phone</b></td><td>${phone ? esc(phone) : "<i>(not provided)</i>"}</td></tr>
          <tr><td><b>Email</b></td><td>${email ? esc(email) : "<i>(not provided)</i>"}</td></tr>
          <tr><td><b>Address</b></td><td>${esc(address)}</td></tr>
          <tr><td><b>Service</b></td><td>${esc(service)}</td></tr>
          <tr><td><b>SMS Consent (Info)</b></td><td>${smsInfoConsent ? "Yes" : "No"}</td></tr>
          <tr><td><b>SMS Consent (Marketing)</b></td><td>${smsMarketingConsent ? "Yes" : "No"}</td></tr>
        </table>
        <h3 style="margin:16px 0 6px">Message</h3>
        <div style="white-space:pre-wrap;border:1px solid #eee;padding:10px;border-radius:8px">
          ${esc(message)}
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      replyTo: email || undefined,
      html,
    });

    if (error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (e: any) {
    return NextResponse.json(
      { success: false, message: e?.message || "Unknown error" },
      { status: 500 }
    );
  }
}
