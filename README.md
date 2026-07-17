# Leading Lines Photography

A Next.js and Tailwind CSS website for Leading Lines Photography, inspired by editorial wedding photography portfolios.

## Google Sheets booking sync

The booking form now posts submissions to `/api/bookings`, which forwards them to your Google Apps Script web app URL.

1. Create a Google Sheet with a tab named `Bookings`.
2. In Google Sheets, open `Extensions > Apps Script` and paste this script:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Bookings") ||
    SpreadsheetApp.getActiveSpreadsheet().insertSheet("Bookings");
  const data = JSON.parse(e.postData.contents);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Submitted At",
      "Source",
      "Name",
      "Phone",
      "Location",
      "Guest Count",
      "Event Name",
      "Event Date",
      "Requirements",
    ]);
  }

  sheet.appendRow([
    data.submittedAt || Utilities.formatDate(new Date(), "Asia/Kolkata", "dd/MM, HH:mm") + " IST",
    data.source || "website-book-form",
    data.name || "",
    data.phone || "",
    data.location || "",
    data.guestCount || "",
    data.eventName || "",
    data.eventDate || "",
    data.eventRequirements || "",
  ]);

  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Deploy the script as a web app.
4. `GOOGLE_SHEETS_WEBHOOK_URL` is already set to your provided webhook URL in the app, but you can override it in your Next.js environment if it ever changes.
5. Restart the app and submit the booking form once to verify the row lands in the sheet.

The `Submitted At` column will now save in a simple IST format like `17/07, 11:41 IST`.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.
# llp
