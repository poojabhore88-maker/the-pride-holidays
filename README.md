# The Pr♦de Holidays Website

A modern, responsive travel website built with HTML, CSS, and JavaScript. Features Google Sheets integration for lead management and WhatsApp integration for customer communication.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Deep blue and orange color scheme with clean typography
- **Lead Management**: All enquiries are automatically saved to Google Sheets
- **WhatsApp Integration**: Direct WhatsApp chat functionality with pre-filled messages
- **Email Notifications**: Automatic email notifications for new enquiries
- **Customer Auto-reply**: Automated email responses to customers
- **Multiple Pages**: Home, Destinations, Services, About, and Contact pages

## Pages Overview

### Home Page
- Hero section with company branding
- Comprehensive enquiry form
- Trust indicators (clear pricing, WhatsApp support, end-to-end support)
- Success modal with WhatsApp and email buttons

### Destinations Page
- Six destination categories (Beaches, Hills, Spiritual, Adventure, Family, Honeymoon)
- "Coming Soon" placeholders for future content
- Quick enquiry functionality for each category
- Category-specific information and features

### Services Page
- Six service offerings (Tour Packages, Bookings, Visa Support, Insurance, Custom Itineraries, Group Travel)
- Process timeline showing how it works
- Service-specific enquiry forms

### About Page
- Company story and values
- Detailed "How It Works" process
- Our promises and commitments
- Statistics and call-to-action

### Contact Page
- Multiple contact methods (WhatsApp, Email, Phone)
- Comprehensive contact form
- Office hours and response times
- FAQ section

## Setup Instructions

### 1. Google Sheets Setup

1. Create a new Google Sheet named "Unexia Leads"
2. Set up the following columns in row 1:
   - Timestamp
   - Name
   - Phone
   - Email
   - Segment
   - Destination
   - Travel Dates
   - Travellers
   - Budget
   - Departure City
   - Hotel Preference
   - Notes
   - Source Page
   - Status

### 2. Google Apps Script Setup

1. Open your Google Sheet
2. Go to Extensions → Apps Script
3. Paste the following code:

```javascript
const SHEET_NAME = "Sheet1"; // change if your tab name differs

function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME);

    const data = JSON.parse(e.postData.contents);

    const row = [
      new Date(),                       // Timestamp
      data.name || "",
      data.phone || "",
      data.email || "",
      data.segment || "",
      data.destination || "Not decided",
      data.dates || "",
      data.travellers || "",
      data.budget || "",
      data.departureCity || "",
      data.hotelPreference || "",
      data.notes || "",
      data.source || "",
      "New"                             // Status
    ];

    sheet.appendRow(row);

    // Optional: notify you by email
    if (data.notifyTo) {
      MailApp.sendEmail({
        to: data.notifyTo,
        subject: `New Trip Enquiry — ${data.name || "Unknown"}`,
        htmlBody: `
          <p><b>Name:</b> ${data.name || ""}</p>
          <p><b>Phone:</b> ${data.phone || ""}</p>
          <p><b>Email:</b> ${data.email || ""}</p>
          <p><b>Segment:</b> ${data.segment || ""}</p>
          <p><b>Destination:</b> ${data.destination || "Not decided"}</p>
          <p><b>Dates:</b> ${data.dates || ""}</p>
          <p><b>Travellers:</b> ${data.travellers || ""}</p>
          <p><b>Budget:</b> ${data.budget || ""}</p>
          <p><b>Departure City:</b> ${data.departureCity || ""}</p>
          <p><b>Hotel:</b> ${data.hotelPreference || ""}</p>
          <p><b>Notes:</b> ${data.notes || ""}</p>
          <p><b>Source:</b> ${data.source || ""}</p>
        `
      });
    }

    // Optional: auto-reply to customer
    if (data.email && data.autoReply === true) {
      MailApp.sendEmail({
        to: data.email,
        subject: "The Pr♦de Holidays — We received your trip enquiry",
        htmlBody: `
          <p>Hi ${data.name || ""},</p>
          <p>Thanks for contacting <b>The Pr♦de Holidays</b> — <i>From Dream to Destination</i>.</p>
          <p>We've received your enquiry and will reach out shortly on WhatsApp/Email with package options.</p>
          <p>— Team The Pr♦de Holidays</p>
        `
      });
    }

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click Deploy → New deployment
5. Choose "Web app"
6. Execute as: "Me"
7. Who has access: "Anyone"
8. Click Deploy
9. Copy the Web App URL

### 3. Website Configuration

1. Open `script.js` file
2. Replace `PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE` with your actual Web App URL
3. Replace `youremail@example.com` with your email address
4. Replace all WhatsApp numbers (`91XXXXXXXXXX`) with your actual WhatsApp business number

### 4. WhatsApp Integration

Update all WhatsApp links in the HTML files:
- Replace `91XXXXXXXXXX` with your actual WhatsApp number (with country code)
- The pre-filled message template will automatically include user data from forms

## File Structure

```
unexia-travels/
├── index.html          # Home page
├── destinations.html    # Destinations page
├── services.html        # Services page
├── about.html          # About page
├── contact.html        # Contact page
├── styles.css          # All styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Customization

### Colors
The color scheme uses CSS variables in `styles.css`:
- `--primary-blue`: Main brand color (#1e3a8a)
- `--primary-orange`: Accent color (#f97316)

### WhatsApp Number
Update the WhatsApp number in all HTML files:
- Search for `91XXXXXXXXXX`
- Replace with your number including country code

### Email Address
Update the email address in `script.js`:
- Search for `youremail@example.com`
- Replace with your email

## Deployment

This website can be deployed on any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting
- Any traditional web hosting

## Features for Future Enhancement

### Destination Data Structure
The website is structured to easily add real destinations:

```javascript
const destination = {
  name: "Goa",
  slug: "goa",
  category: ["Beaches", "Family"],
  heroImage: "path/to/image.jpg",
  bestMonths: "November to February",
  duration: "3-5 Days",
  highlights: ["Beautiful beaches", "Water sports", "Nightlife", "Portuguese heritage"],
  startingPrice: "8,000"
}
```

### Additional Features to Consider
- Image gallery for destinations
- Customer testimonials
- Blog section
- Online payment integration
- Customer login area
- Advanced search and filtering

## Support

For any questions or issues with setup, please contact the development team or refer to the Google Apps Script documentation.

## License

This project is proprietary to The Pr♦de Holidays. All rights reserved.
