import { NextResponse } from "next/server";
import { buildBookingSheetPayload, type BookingSubmission } from "../../book/booking-data";

export const runtime = "nodejs";

const defaultWebhookUrl =
  "https://script.google.com/macros/s/AKfycbzM7tveLHR4wE8SFIsyHhYlEUZ6O7KW3WGUU62aWyiXS2ll7OYkbbxfAG6p36QRAr3Z7w/exec";

function isBookingSubmission(value: unknown): value is BookingSubmission {
  if (!value || typeof value !== "object") return false;

  const submission = value as Record<string, unknown>;
  return [
    "name",
    "phone",
    "location",
    "guestCount",
    "eventName",
    "eventDate",
    "eventRequirements",
  ].every((key) => typeof submission[key] === "string");
}

export async function POST(request: Request) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL ?? defaultWebhookUrl;

  if (!webhookUrl) {
    return NextResponse.json(
      {
        error:
          "GOOGLE_SHEETS_WEBHOOK_URL is not configured. Add a Google Apps Script web app URL to enable sheet submissions.",
      },
      { status: 503 },
    );
  }

  const body = await request.json().catch(() => null);

  if (!isBookingSubmission(body)) {
    return NextResponse.json({ error: "Invalid booking payload." }, { status: 400 });
  }

  const payload = buildBookingSheetPayload(body);
  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const details = await response.text().catch(() => "");
    return NextResponse.json(
      {
        error: "Google Sheets webhook rejected the submission.",
        details: details.slice(0, 300),
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
