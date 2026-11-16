# Nairobi Gems

Static site (no build step). Deploy with GitHub Pages: Settings → Pages → Deploy from branch → `main` / root.

## Events carousel

The hero shows up to 8 upcoming events, soonest first. Events dated before today (Nairobi time) disappear automatically.

### Option 1: edit `events.json`
Each event: `title`, `date` (YYYY-MM-DD), `time`, `venue`, `price`, `category`, `image`, `ticket_url`.
Remove the `"sample": true` events (they show a "Sample event" tag) before going live.

### Option 2: Google Sheet (update from your phone, no redeploy)
1. Make a sheet with this header row: `title, date, time, venue, price, category, image, ticket_url`
2. File → Share → Publish to web → choose the sheet tab → **CSV** → Publish.
3. Paste the link into `EVENTS_CSV_URL` at the top of the events section in `script.js`.

The published sheet is public. Only put information there that you want visitors to see.
If the sheet can't be reached, the site falls back to `events.json`.

Ticket links open in a new tab and get `utm_source=nairobigems` so organisers and analytics can see the referrals.
