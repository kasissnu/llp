"use client";

import type { FormEvent } from "react";
import { QuoteEstimator } from "./QuoteEstimator";
import styles from "./book.module.css";

const whatsappNumber = "917604025885";

const fixedFields = [
  { label: "Name", name: "name" },
  { label: "Phone", name: "phone" },
  { label: "Location", name: "location" },
  { label: "Guest count", name: "guest-count" },
];

const quoteFields = [
  { label: "Selected events", name: "quote-selected-events" },
  { label: "Deliverables", name: "quote-deliverables" },
  { label: "Premium upgrades", name: "quote-upgrades" },
  { label: "Travel/logistics", name: "quote-travel-logistics" },
  { label: "Estimated total", name: "quote-estimate-starting-price" },
  { label: "Estimate line items", name: "quote-estimate-line-items" },
];

const durationLabels: Record<string, string> = {
  "2-4": "Up to 4 hours",
  "4-6": "Up to 6 hours",
  "full-day": "Full day",
};

const eventFieldLabels: Record<string, string> = {
  date: "date",
  duration: "duration",
  location: "location",
  photographers: "photographers",
  time: "time",
  videographers: "videographers",
};

const skippedRawFields = new Set([
  "quote-deliverable",
  "quote-outside-base-city",
  "quote-selected-event",
  "quote-upgrade",
]);

function getValue(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function formatEventFieldName(name: string) {
  const match = name.match(/^quote-(.+)-(date|duration|location|photographers|time|videographers)$/);

  if (!match) return null;

  const [, eventSlug, fieldName] = match;
  return `${titleFromSlug(eventSlug)} ${eventFieldLabels[fieldName]}`;
}

function formatValue(name: string, value: string) {
  if (name.endsWith("-duration")) {
    return durationLabels[value] ?? value;
  }

  return value;
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

    const eventLines: string[] = [];
    Array.from(new Set(Array.from(formData.keys())))
      .sort()
      .forEach((name) => {
        const label = formatEventFieldName(name);
        const value = getValue(formData, name);

        if (!label || !value) return;

        eventLines.push(`${label}: ${formatValue(name, value)}`);
      });

    if (eventLines.length > 0) {
      lines.push("", "Event details", ...eventLines);
    }

    lines.push("", "Quote details");
    quoteFields.forEach((field) => appendField(lines, field.label, getValue(formData, field.name)));

    const extraLines: string[] = [];
    Array.from(new Set(Array.from(formData.keys())))
      .filter((name) => {
        return (
          !fixedFields.some((field) => field.name === name) &&
          !quoteFields.some((field) => field.name === name) &&
          !skippedRawFields.has(name) &&
          !formatEventFieldName(name)
        );
      })
      .sort()
      .forEach((name) => {
        const values = formData
          .getAll(name)
          .filter((value): value is string => typeof value === "string")
          .map((value) => value.trim())
          .filter(Boolean);

        if (values.length > 0) {
          extraLines.push(`${name}: ${values.join(", ")}`);
        }
      });

    if (extraLines.length > 0) {
      lines.push("", "Additional details", ...extraLines);
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
      <QuoteEstimator />
      <button type="submit">Send booking enquiry on WhatsApp</button>
    </form>
  );
}
