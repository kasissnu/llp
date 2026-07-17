"use client";

import type { FormEvent } from "react";
import styles from "./book.module.css";
import {
  buildBookingSheetPayload,
  buildWhatsAppMessage,
  readBookingSubmission,
  whatsappNumber,
} from "./booking-data";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function normalizePhoneInput(value: string) {
  const trimmed = value.trim();

  if (trimmed.startsWith("+")) {
    const digits = trimmed.slice(1).replace(/\D/g, "").slice(0, 12);
    return `+${digits}`;
  }

  return trimmed.replace(/\D/g, "").slice(0, 10);
}

export function BookingForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const submission = readBookingSubmission(formData);
    const payload = buildBookingSheetPayload(submission);
    const body = JSON.stringify(payload);

    const isQueued =
      typeof navigator.sendBeacon === "function" &&
      navigator.sendBeacon(
        "/api/bookings",
        new Blob([body], {
          type: "application/json",
        }),
      );

    if (!isQueued) {
      void fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
        keepalive: true,
      }).catch((error) => {
        console.error("Failed to queue booking submission", error);
      });
    }

    window.fbq?.("track", "Lead");

    const message = buildWhatsAppMessage(submission);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className={styles.bookingForm} onSubmit={handleSubmit}>
      <label>
        Your name
        <input name="name" type="text" required />
      </label>
      <label>
        Phone number
        <input
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          // placeholder="e.g. 9876543210 or +919876543210"
          pattern={"^(?:\\+91\\s*\\d{10}|\\d{10})$"}
          title="Enter a 10-digit phone number, or +91 followed by 10 digits. A space after +91 is allowed."
          maxLength={13}
          required
          onInput={(event) => {
            const input = event.currentTarget;
            input.value = normalizePhoneInput(input.value);
          }}
        />
      </label>
      <label>
        Location
        <input name="location" type="text" placeholder="Example: Bangalore, Mysore, Goa" required />
      </label>
      <label>
        Estimated guest count
        <input name="guest-count" type="number" min="1" />
      </label>
      <fieldset className={styles.eventDetailsSection}>
        <legend>Event details</legend>
        
        <div className={styles.eventDetailsGrid}>
          <label>
            Event name
            <input name="event-name" type="text" placeholder="Example: Sangeet, wedding, reception" required />
          </label>
          <label>
            Event date
            <input name="event-date" type="date" />
          </label>
          <label className={styles.eventDetailsWide}>
            Requirements
            <textarea
              name="event-requirements"
              placeholder="Tell us about timings, venue notes, family priorities, shot references, or anything else we should know."
              rows={5}
            />
          </label>
        </div>
      </fieldset>
      
      <button type="submit">Chat With Us on WhatsApp</button>
    </form>
  );
}
