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
        <input name="phone" type="tel" required />
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
