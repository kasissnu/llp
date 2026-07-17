export const whatsappNumber = "917604025885";

export const contactFields = [
  { label: "Name", name: "name" },
  { label: "Phone", name: "phone" },
  { label: "Location", name: "location" },
  { label: "Guest count", name: "guest-count" },
] as const;

export const eventFields = [
  { label: "Event name", name: "event-name" },
  { label: "Event date", name: "event-date" },
  { label: "Requirements", name: "event-requirements" },
] as const;

export type BookingSubmission = {
  name: string;
  phone: string;
  location: string;
  guestCount: string;
  eventName: string;
  eventDate: string;
  eventRequirements: string;
};

export type BookingSheetPayload = BookingSubmission & {
  submittedAt: string;
  source: string;
};

function getStringValue(value: FormDataEntryValue | null | undefined) {
  return typeof value === "string" ? value.trim() : "";
}

export function readBookingSubmission(formData: FormData): BookingSubmission {
  return {
    name: getStringValue(formData.get("name")),
    phone: getStringValue(formData.get("phone")),
    location: getStringValue(formData.get("location")),
    guestCount: getStringValue(formData.get("guest-count")),
    eventName: getStringValue(formData.get("event-name")),
    eventDate: getStringValue(formData.get("event-date")),
    eventRequirements: getStringValue(formData.get("event-requirements")),
  };
}

export function formatBookingTimestamp(date = new Date()) {
  const datePart = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    timeZone: "Asia/Kolkata",
  }).format(date);
  const timePart = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    hour12: false,
    minute: "2-digit",
    timeZone: "Asia/Kolkata",
  }).format(date);

  return `${datePart}, ${timePart}`;
}

export function buildBookingSheetPayload(submission: BookingSubmission): BookingSheetPayload {
  return {
    ...submission,
    submittedAt: formatBookingTimestamp(),
    source: "website-book-form",
  };
}

export function buildWhatsAppMessage(submission: BookingSubmission) {
  const lines = ["New booking enquiry - Leading Lines Photography", ""];

  lines.push("Contact details");
  const contactLines = [
    { label: "Name", value: submission.name },
    { label: "Phone", value: submission.phone },
    { label: "Location", value: submission.location },
    { label: "Guest count", value: submission.guestCount },
  ];

  contactLines.forEach((field) => {
    if (field.value) {
      lines.push(`${field.label}: ${field.value}`);
    }
  });

  const eventLines = [
    { label: "Event name", value: submission.eventName },
    { label: "Event date", value: submission.eventDate },
    { label: "Requirements", value: submission.eventRequirements },
  ].filter((field) => field.value.length > 0);

  if (eventLines.length > 0) {
    lines.push("", "Event details");
    eventLines.forEach((field) => {
      lines.push(`${field.label}: ${field.value}`);
    });
  }

  return encodeURIComponent(lines.join("\n"));
}
