/*
 * ============================================================
 *  SHREYA & YASH — SITE CONFIGURATION
 *  Edit ONLY this file to change the WhatsApp contact, venue,
 *  travel hubs, music or links. Nothing here is secret — it is public.
 * ============================================================
 */
window.SITE_CONFIG = {
  /* RSVP by WhatsApp ("Contact us on WhatsApp" button in the RSVP section).
     number: international format, digits only, no + or spaces. +91 9000655925 → '919000655925'.
     contactName: shown under the button. */
  whatsapp: {
    number: '919000655925',
    contactName: 'G. S Phani Kishore IRS',
    message: "Namaste! I have received Shreya and Yash's wedding invitation and would like to RSVP for the celebrations (9–11 February 2027). Warm congratulations to the family!"
  },

  /* Venue. lat/lng = the pin of the supplied Google Maps link (maps.app.goo.gl/EK5g5EVC9ymu3t748 resolves to
     Google's place "The Cabbana Resort and Spa", 31.2506326, 75.7301427 — checked 19 Oct 2026). */
  venue: {
    name: 'The Cabbana Resorts & Spa',
    address: 'NH-1, Highway, Phagwara, Jalandhar, Punjab',
    lat: 31.2506326,
    lng: 75.7301427,
    mapsShortUrl: 'https://maps.app.goo.gl/EK5g5EVC9ymu3t748'
  },

  /* Travel hubs (checked 19 Oct 2026).
     · roadKm: driving distance from the venue pin, OpenStreetMap routing (OSRM). Google's route may differ slightly.
     · verified: true = name, code, location and distance confirmed from the sources noted; false = shown as unconfirmed.
     · mapUrl: the link on the hub's name. The supplied share.google links could not be opened from the build
       environment (Google blocks automated access), so they are kept as supplied but unconfirmed. Phagwara & Chiheru
       were supplied with the same link, as were Amritsar & Chandigarh, so those four use a Google Maps search by name.
     · lat/lng: used as the origin for "Directions" so the route starts at the exact station/airport. */
  travelHubs: [
    // Location not confirmable: Wikipedia's coordinates for this station are wrong (74.765°E is near Amritsar). Distance is the guide's figure.
    { type: 'rail', name: 'Phagwara Junction Railway Station', code: 'PGW', approxKm: 6, verified: false },
    // Wikipedia: CEU, 31.262695, 75.706691
    { type: 'rail', name: 'Chiheru Railway Station', code: 'CEU', roadKm: 7, lat: 31.262695, lng: 75.706691, verified: true },
    // Wikipedia: JUC, 31.331, 75.591 (trainstracking.com: 31.327, 75.5813)
    { type: 'rail', name: 'Jalandhar City Junction Railway Station', code: 'JUC', roadKm: 19, lat: 31.331, lng: 75.591, mapUrl: 'https://share.google/UDuZAJBkLxoqCj8EA', verified: true },
    // Renamed from Adampur Airport on 1 Feb 2026 (pmindia.gov.in). Wikipedia / planemapper: AIP, 31.4331, 75.7606
    { type: 'air-regional', name: 'Shri Guru Ravidass Maharaj Ji Airport, Adampur', code: 'AIP', roadKm: 32, lat: 31.4331, lng: 75.7606, mapUrl: 'https://share.google/A6f77Fm3INXCLNkfk', verified: true },
    // planemapper: ATQ, 31.7096, 74.7973
    { type: 'air-international', name: 'Sri Guru Ram Dass Jee International Airport, Amritsar', code: 'ATQ', roadKm: 112, lat: 31.7096, lng: 74.7973, verified: true },
    // Renamed 2022; at Jhiurheri, Mohali. planemapper: IXC, 30.6735, 76.7885
    { type: 'air-international', name: 'Shaheed Bhagat Singh International Airport, Chandigarh', code: 'IXC', roadKm: 136, lat: 30.6735, lng: 76.7885, verified: true }
  ],

  instagramUrl: 'https://instagram.com/somethingpaprika/',

  /* Background music. The site tries to start it when the invitation opens (muted first if the browser
     requires, then with sound at the guest's first tap); the guest can mute it at any time.
     Set to '' to remove the music and its control. */
  musicUrl: 'assets/audio/sunehra.mp3'
};
