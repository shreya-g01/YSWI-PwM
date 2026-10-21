# Shreya & Yash — Wedding Invitation Website

Static site, live on Vercel at https://shreya-yash-wedding-invite.vercel.app/ (it also works unchanged on GitHub Pages). No build step, no server code, no database. Guests RSVP through the **Contact us on WhatsApp** button in the RSVP section, which opens a WhatsApp chat with +91 9000655925 (G. S Phani Kishore IRS) with an RSVP message ready to send; nothing is collected or stored by the site.

## Files

| Path | Purpose |
| --- | --- |
| `index.html` | The whole invitation: markup, styles and scripts (envelope, scenes, save-the-date game, events, venue, travel, RSVP, gallery, music). |
| `config.js` | **The only file you should need to edit**: WhatsApp number, contact name and message, venue, travel hubs, Instagram, music. Public, so never put anything private in it. |
| `assets/img/envelope/` | The approved envelope artwork (`envelop opening.png`) cut into animation layers, and the ornate invitation card that rises out of it (see "Asset sources"). |
| `assets/img/` | Approved artwork, resized/re-encoded to WebP. |
| `assets/fonts/` | Parisienne, EB Garamond, Cormorant Garamond, Tiro Devanagari Hindi (SIL Open Font License, via Fontsource). |
| `assets/audio/sunehra.mp3` | Background music (from the supplied `Sunehra.mp3`). |
| `og-image.jpg` | 1200×630 link preview (WhatsApp, iMessage, Facebook); shows only "Shreya & Yash" as text. |
| `favicon.png`, `apple-touch-icon.png` | Icons cut from the monogram roundel. |
| `.nojekyll` | Tells GitHub Pages to serve files as-is. |

## Preview locally

```bash
cd path/to/this/folder
python3 -m http.server 8000
# open http://localhost:8000
```

## Publish

**Vercel (current).** The site is a plain static folder: import the repository in Vercel with the framework preset **Other**, no build command, output directory `/` (the root). Every push to `main` redeploys. The Open Graph tags (link previews) in `index.html` point to `https://shreya-yash-wedding-invite.vercel.app/`; if the address changes, update the two lines `og:image` and `og:url`.

**GitHub Pages (alternative).**


1. On github.com create a **public** repository named exactly `shreya-yash-wedding` (free Pages needs public). Leave it empty: no README, licence or .gitignore.
2. Upload **everything in this folder**, including the hidden `.nojekyll` file, to the repository root:
   - Website: **Add file → Upload files**, drag the folder contents in, **Commit changes**. Hidden files are easy to miss when dragging; if `.nojekyll` doesn't appear in the file list, create it with **Add file → Create new file**, name it `.nojekyll`, leave it empty and commit.
   - Or from a terminal inside this folder: `git remote add origin https://github.com/shreya-g01/shreya-yash-wedding.git && git push -u origin main`
3. **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main`, folder `/ (root)` → Save**.
4. After a minute or two the site is live at `https://shreya-g01.github.io/shreya-yash-wedding/`.
5. On GitHub Pages, change the two Open Graph lines `og:image` and `og:url` to the Pages address.

All paths are relative, so the site works at a domain root (Vercel) or under `/shreya-yash-wedding/` (GitHub Pages). Search engines are asked not to index the page (`<meta name="robots" content="noindex, nofollow">` in `index.html`); delete that line if you want it findable.

## Check the published site

- Open it in a private/incognito window. The envelope (the supplied artwork with its gold rose seal) appears; tap it: the flap lifts, the ornate ivory card with the names rises, then Ganesh Ji and the blessings follow. Rose petals keep falling gently through every section (a still scatter instead when the phone asks for reduced motion).
- Music: the button at the top right shows the real state. Most browsers start the music at your first tap (usually the envelope); tap the button to mute or unmute.
- RSVP → **Contact us on WhatsApp** opens a chat with +91 9000655925 with the RSVP message filled in.
- Browser developer tools → **Network**: every file under `assets/` loads with status 200; **Console** shows no errors.
- Paste the site link into WhatsApp to confirm the preview card.

## Changing things later

Edit `config.js` on GitHub (pencil icon → Commit). Changes are live within about a minute.

| To change | Edit in `config.js` |
| --- | --- |
| WhatsApp contact number | `whatsapp.number`: digits only with country code, e.g. `91` + the 10-digit mobile number |
| Name shown under the button | `whatsapp.contactName` |
| WhatsApp default message | `whatsapp.message` |
| Travel distances (once verified) | `travelHubs[].approxKm` / `roadKm`, set `verified: true` |
| Music | `musicUrl` (`''` removes the music and its button) |

## Asset sources

Web copies are generated from the supplied originals, which are never modified (copies kept in `site-build/originals/`). Treatment is resizing and WebP encoding unless noted.

| Output | Source (project file) | Notes |
| --- | --- | --- |
| `assets/img/envelope/invite-card*.webp` | the cut-out ornate ivory card supplied on 19 Oct 2026 (background already removed; original kept as `site-build/originals/invite card.png`) | Cropped to the card (empty transparent margin and a few invisible specks outside it removed); the artwork itself is unchanged. 640 px copy for phones |
| `assets/img/envelope/env-pocket*.webp`, `env-flap*.webp` | envelop opening.png | The artwork cut into its body and top flap (with the gold rose seal) by `site-build/envelope_layers.py`. Layered together they reproduce the original. The paper hidden under the seal was rebuilt from the artwork's own paper (slid along the bottom-flap creases) because it becomes visible when the flap lifts. |
| `env-paper.webp`, `env-flap-back.webp` | envelop opening.png | Plain paper sampled from the flap; used, shaded, for the inside of the envelope and the inside of the opened flap. |
| `assets/bg/*.webp` (11 paintings) | Section backgrounds, approved concept set | `prelude` = envelope backdrop |
| `jharokha.webp` | jharoka design 2.jpg | White background removed (outside, window and crown openings); the drawing is unchanged. Chosen over "jharoka arch.jpg" for its ivory-and-gold palette, finer linework and open window. |
| `sehrabandi.webp` | sehrabandi.png | Transparent padding trimmed; proportions unchanged |
| `ganesh-gold.webp` | ganesh illustration.png | |
| `hand-in-hand.webp`, `hand-in-hand-600.webp` | hand-in-hand.png | 600 px copy is served to phones |
| `couple.webp` | yash  shreya illustration.png | Original alpha kept |
| `monogram.webp` | Wedding Monogram Crest | |
| `event-*.webp`, `baraat/varmala/phere/vidai.webp` | Event and ceremony illustrations | |
| `game/*.webp` | ring/flower/pizza.png, couple pose PNGs | Save-the-date card game |
| `assets/photos/image-01…27.webp` | image 1.jpeg … image 27.jpeg | Long edge 1000 px, order = file number |
| `og-image.jpg` | earlier link-preview card | Date and location lines removed; the paper there is one flat colour, refilled exactly |

## Before sending the invitation

- [ ] Confirm the Phagwara Junction distance (shown as "about 6 km", from the content guide) and set `verified: true` in `config.js`.
- [ ] If the site address changes from the Vercel one, update the two Open Graph URLs.
- [ ] Open the site on a real iPhone (Safari) and an Android phone (Chrome): envelope and card, petals, music, game, scratch card, map, WhatsApp button, gallery; also turn the phone sideways once.
- [ ] Paste the link into WhatsApp and check the preview card.
