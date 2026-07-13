"use client";

import type { FormEvent } from "react";
import styles from "./book.module.css";

const whatsappNumber = "917604025885";

const fixedFields = [
  { label: "Name", name: "name" },
  { label: "Phone", name: "phone" },
  { label: "Location", name: "location" },
  { label: "Guest count", name: "guest-count" },
];

const eventFields = [
  { label: "Event name", name: "event-name" },
  { label: "Event date", name: "event-date" },
  { label: "Requirements", name: "event-requirements" },
];

function getValue(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function appendField(lines: string[], label: string, value: string) {
  if (!value) return;
  lines.push(`${label}: ${value}`);
}

export function BookingForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const lines = ["New booking enquiry - Leading Lines Photography", ""];

    lines.push("Contact details");
    fixedFields.forEach((field) => appendField(lines, field.label, getValue(formData, field.name)));

    const eventLines = eventFields
      .map((field) => ({
        label: field.label,
        value: getValue(formData, field.name),
      }))
      .filter((field) => field.value.length > 0);

    if (eventLines.length > 0) {
      lines.push("", "Event details");
      eventLines.forEach((field) => appendField(lines, field.label, field.value));
    }

    const message = encodeURIComponent(lines.join("\n"));
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
      <button type="submit">Send booking enquiry on WhatsApp</button>
    </form>
  );
}
