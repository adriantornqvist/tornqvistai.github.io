/*
  TornqvistAI annonseside: innstillinger.
  Endre verdiene her. Både /ring og /ring/takk leser denne fila.
*/
window.TQ_CONFIG = {
  // Nummeret folk ringer for å teste agenten (Grace i Retell)
  demoNumber: "+47 69 00 23 20",

  // Nummeret du ringer leads fra. Vises på takkesiden.
  myNumber: "+47 930 23 747",
  myName: "Adrian Tørnqvist",
  email: "adrian.tornqvist@tornqvistai.no",

  // Tilbudet
  price: 2990,          // kr per måned eks. mva
  minutes: 750,         // inkluderte minutter per måned
  overage: 3,           // kr per minutt over inkludert
  bindingMonths: 6,     // avtaleperiode i måneder
  liveDays: 7,          // dager fra oppstartsskjema til agenten er live

  // Pilotplasser. Øk pilotTaken med 1 hver gang du får en kunde.
  pilotTotal: 10,
  pilotTaken: 0,

  // Google-skjemaet "TornqvistAI Ki agent". Svarene havner i regnearket som er koblet til skjemaet.
  googleForm: {
    action: "https://docs.google.com/forms/d/e/1FAIpQLScGaX3-k0r7bENTa1OVNouVTw8Pvdh3zq0fSNgtluSmSJ-9UQ/formResponse",
    fields: {
      navn: "entry.328391711",     // Navn
      epost: "entry.1728012172",   // E-post adresse (eier/ansvarlig)
      firma: "entry.527120261",    // Firma navn
      telefon: "entry.178783385",  // Telefon
      bransje: "entry.1151705592", // Bransje
      tapte: "entry.1024925704",   // Tapte samtaler per uke (cirka)
      kilde: "entry.897316661"     // Kilder
    }
  },

  // Skal e-post være obligatorisk i skjemaet på siden? false = valgfritt (gir flere leads)
  requireEmail: false,

  // Meta Pixel-ID fra Meta Events Manager.
  // Tom = ingen sporing og ingen cookie-banner.
  metaPixelId: ""
};
