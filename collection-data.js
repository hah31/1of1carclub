/* ============================================================
   1 OF 1 CAR CLUB - COLLECTION DATA
   collection-data.js

   HOW TO ADD A CAR (60-second version):
   1. Copy the template at the bottom of this file.
   2. Fill in id, year, displayName, shortNote, and status.
   3. Set featured: true if the car gets long-form treatment.
   4. Drop photos in /assets/cars/[id]/ (e.g. /assets/cars/964-rs-01/01.jpg).
   5. Add photo objects to the photos array: { src: 'assets/cars/[id]/01.jpg', alt: '...' }
   6. Push. Done.

   FIELD REFERENCE:
   id           - URL-safe string, unique, used as photo folder name
   year         - number or null (null = not yet confirmed)
   yearDisplay  - string override for display (e.g. 'Mid-1990s'), or null to use year
   displayName  - what appears on the card and in the featured heading
   shortNote    - one sentence for the grid card (null = no note rendered)
   longStory    - array of paragraph strings for featured treatment (null = shortNote used)
   featured     - boolean, true = car gets featured article on the collection page
   photos       - array of { src, alt } objects. First photo used on the card.
                  Empty array = editorial placeholder rendered instead.
   badge        - short string for the accent badge (null = no badge)
   tags         - array of strings, reserved for future filtering
   status       - 'current' | 'past'
   confirm      - internal note string, rendered as HTML comment in source (null = none)
   ============================================================ */

window.COLLECTION_DATA = {

  /* ----------------------------------------------------------
     CURRENT COLLECTION
     ---------------------------------------------------------- */
  current: [

    {
      id: 'carrera-gt-01',
      year: 2005,
      yearDisplay: null,
      displayName: 'Carrera GT',
      shortNote: 'Naturally aspirated V10. Six-speed manual. No traction control. One of the most demanding road cars Porsche has ever built. This one gets driven.',
      longStory: [
        'Porsche built 1,270 Carrera GTs between 2004 and 2006. The engine started as a Le Mans racing unit. When the racing program was shelved, Porsche adapted it into a 5.7-liter naturally aspirated V10 and put it in a road car.',
        'The gearbox uses a wood-and-leather shift knob. Carbon fiber was too stiff for the mechanical feel the engineers wanted. That specificity runs through every decision in the car.',
        'There is no traction control in the conventional sense. The car was built to communicate, not to correct. Most buyers were not ready for it. The ones who were describe it as the most alive road car they have ever driven.',
        'The founder has owned five across his history with the car. The examples in the collection now are driven.',
      ],
      featured: true,
      photos: [],
      badge: null,
      tags: ['carrera-gt', 'v10', 'road-car'],
      status: 'current',
      confirm: null,
    },

    {
      id: 'carrera-gt-02',
      year: null,
      yearDisplay: null,
      displayName: 'Carrera GT',
      shortNote: 'A second example in the current collection. Two Carrera GTs in one room is a statement.',
      longStory: null,
      featured: false,
      photos: [],
      badge: null,
      tags: ['carrera-gt', 'v10', 'road-car'],
      status: 'current',
      confirm: 'CONFIRM: Year of the second Carrera GT in the current collection.',
    },

    {
      id: '993-gt2-r',
      year: null,
      yearDisplay: 'Mid-1990s',
      displayName: '993 GT2 R',
      shortNote: 'The factory race version of the 993 GT2. Built by Porsche Motorsport for GT competition. One of very few in existence. Not a street car.',
      longStory: [
        'The 993 GT2 R is not a road car with a track package. It is a factory-built competition vehicle, produced for GT class racing in the mid-1990s.',
        'Twin-turbocharged. Rear-wheel drive only. No all-wheel-drive system to soften the delivery. Built by Porsche Motorsport to go racing, which is exactly what it did.',
        'The 993 generation was the last air-cooled 911 Porsche built. This is one of the most significant examples of that generation in a private collection.',
      ],
      featured: true,
      photos: [],
      badge: 'Factory race car',
      tags: ['993', 'gt2', 'race-car', 'air-cooled'],
      status: 'current',
      confirm: 'CONFIRM: Exact year, racing history, livery, chassis details, provenance. More specifics make this section significantly stronger.',
    },

    {
      id: 'dp-motorsport-01',
      year: null,
      yearDisplay: null,
      displayName: 'DP Motorsport Build',
      shortNote: 'A DP Motorsport conversion. Working on 911s since the 1970s. Base model and year to be confirmed.',
      longStory: [
        'DP Motorsport has been building and converting Porsches since the 1970s. Their work does not fit a clean category. Not a restoration, not a replica, not a restomod. An interpretation, executed by people who have spent longer thinking about 911s than most collectors have been alive.',
        'The DP cars in this collection are not display pieces. They were built to be used and they are used.',
      ],
      featured: true,
      photos: [],
      badge: null,
      tags: ['dp-motorsport', '911'],
      status: 'current',
      confirm: 'CONFIRM: Year, base model (930? 964? 993?), build specification. If the car has a DP designation or name, use it. The more specific, the better this section reads.',
    },

    {
      id: 'dp-motorsport-02',
      year: null,
      yearDisplay: null,
      displayName: 'DP Motorsport Build',
      shortNote: 'A second DP build in the collection. Each one distinct. Year and base model to be confirmed.',
      longStory: null,
      featured: false,
      photos: [],
      badge: null,
      tags: ['dp-motorsport', '911'],
      status: 'current',
      confirm: 'CONFIRM: Year and base model.',
    },

    {
      id: 'american-speed-01',
      year: null,
      yearDisplay: null,
      displayName: 'American Speed (I)',
      shortNote: 'One of two cars from the collection in production for the Amazon MGM film American Speed, starring Tom Holland and Austin Butler.',
      longStory: null,
      featured: false,
      photos: [],
      badge: 'In production',
      tags: ['film', 'american-speed'],
      status: 'current',
      confirm: 'CONFIRM: Year, model, and nature of involvement in production.',
    },

    {
      id: 'american-speed-02',
      year: null,
      yearDisplay: null,
      displayName: 'American Speed (II)',
      shortNote: 'The second car from the collection appearing in American Speed.',
      longStory: null,
      featured: false,
      photos: [],
      badge: 'In production',
      tags: ['film', 'american-speed'],
      status: 'current',
      confirm: 'CONFIRM: Year, model, and nature of involvement in production.',
    },

    /* --- American Speed featured entry (the editorial write-up) ----
       This is the long-form featured treatment for the American Speed
       story. The two grid cards above (american-speed-01/02) are the
       individual car entries. This entry is the story itself.
       ---------------------------------------------------------------- */
    {
      id: 'american-speed-feature',
      year: null,
      yearDisplay: null,
      displayName: 'American Speed',
      shortNote: 'Two cars from the collection are in production for the Amazon MGM film American Speed, starring Tom Holland and Austin Butler.',
      longStory: [
        'Porsche built the 935 for Group 5 international racing in the mid-1970s, then sold customer versions to teams willing to run them. The car was turbocharged, wide-body, purpose-designed for endurance racing. Customer 935s won everywhere they ran.',
        'In 1979, a Kremer-prepared 935 K3 driven by Klaus Ludwig, Bill Whittington, and Don Whittington won the 24 Hours of Le Mans outright. The Whittington brothers came from Fort Lauderdale. They were not factory drivers. They raced through the American IMSA series, funding their own program against factory teams with every structural advantage. At Le Mans, co-driving with Ludwig, they came out ahead of all of them.',
        'It remains one of the more improbable results in Le Mans history.',
        'What followed was harder. Federal investigations in the early 1980s connected the Whittington brothers\' racing budget to cocaine trafficking, money laundering, and tax evasion. Bill and Don Whittington were convicted and served federal prison sentences. The Le Mans record stood, complicated by everything behind it.',
        'Amazon MGM Studios is producing a film about the whole story. American Speed, produced by Charles Roven through Atlas Entertainment, stars Tom Holland and Austin Butler. Roven produced Oppenheimer and the Dark Knight trilogy. RD Whittington and Douglas Banker serve as co-producers.',
        'Two cars from this collection are involved in the production.',
      ],
      featured: true,
      photos: [],
      badge: 'In production',
      tags: ['film', 'american-speed', '935', 'le-mans'],
      status: 'current',
      confirm: 'CONFIRM: Which two cars from the collection are involved, and the nature of their involvement in production. Film stills or production stills may be available for use once cleared.',
    },

    /* --- TBD: 13+ additional current cars to be supplied by the founder.
         Replace id, year, displayName, shortNote with real details.
         Keep status: 'current'. Set confirm: null once confirmed.
         ---------------------------------------------------------------- */
    { id: 'tbd-01', year: null, yearDisplay: null, displayName: '911', shortNote: null, longStory: null, featured: false, photos: [], badge: null, tags: [], status: 'current', confirm: 'CONFIRM: All details.' },
    { id: 'tbd-02', year: null, yearDisplay: null, displayName: '911', shortNote: null, longStory: null, featured: false, photos: [], badge: null, tags: [], status: 'current', confirm: 'CONFIRM: All details.' },
    { id: 'tbd-03', year: null, yearDisplay: null, displayName: '911', shortNote: null, longStory: null, featured: false, photos: [], badge: null, tags: [], status: 'current', confirm: 'CONFIRM: All details.' },
    { id: 'tbd-04', year: null, yearDisplay: null, displayName: '911', shortNote: null, longStory: null, featured: false, photos: [], badge: null, tags: [], status: 'current', confirm: 'CONFIRM: All details.' },
    { id: 'tbd-05', year: null, yearDisplay: null, displayName: '911', shortNote: null, longStory: null, featured: false, photos: [], badge: null, tags: [], status: 'current', confirm: 'CONFIRM: All details.' },
    { id: 'tbd-06', year: null, yearDisplay: null, displayName: '911', shortNote: null, longStory: null, featured: false, photos: [], badge: null, tags: [], status: 'current', confirm: 'CONFIRM: All details.' },
    { id: 'tbd-07', year: null, yearDisplay: null, displayName: '911', shortNote: null, longStory: null, featured: false, photos: [], badge: null, tags: [], status: 'current', confirm: 'CONFIRM: All details.' },
    { id: 'tbd-08', year: null, yearDisplay: null, displayName: '911', shortNote: null, longStory: null, featured: false, photos: [], badge: null, tags: [], status: 'current', confirm: 'CONFIRM: All details.' },
    { id: 'tbd-09', year: null, yearDisplay: null, displayName: '911', shortNote: null, longStory: null, featured: false, photos: [], badge: null, tags: [], status: 'current', confirm: 'CONFIRM: All details.' },
    { id: 'tbd-10', year: null, yearDisplay: null, displayName: '911', shortNote: null, longStory: null, featured: false, photos: [], badge: null, tags: [], status: 'current', confirm: 'CONFIRM: All details.' },
    { id: 'tbd-11', year: null, yearDisplay: null, displayName: '911', shortNote: null, longStory: null, featured: false, photos: [], badge: null, tags: [], status: 'current', confirm: 'CONFIRM: All details.' },
    { id: 'tbd-12', year: null, yearDisplay: null, displayName: '911', shortNote: null, longStory: null, featured: false, photos: [], badge: null, tags: [], status: 'current', confirm: 'CONFIRM: All details.' },
    { id: 'tbd-13', year: null, yearDisplay: null, displayName: '911', shortNote: null, longStory: null, featured: false, photos: [], badge: null, tags: [], status: 'current', confirm: 'CONFIRM: All details.' },

  ],

  /* ----------------------------------------------------------
     PAST COLLECTION
     These render in the compact "Ownership history" section.
     They do not appear in the main card grid.
     ---------------------------------------------------------- */
  past: [

    {
      id: 'carrera-gt-history',
      year: null,
      yearDisplay: null,
      displayName: '5 Carrera GTs',
      shortNote: 'Five Carrera GTs owned across the founder\'s history with the car. Each one driven the way the car was intended.',
      longStory: null,
      featured: false,
      photos: [],
      badge: null,
      tags: ['carrera-gt'],
      status: 'past',
      confirm: null,
    },

  ],

};

/* ============================================================
   NEW CAR TEMPLATE - copy and fill in below

   {
     id: 'make-model-year',           // e.g. '964-rs-1992'
     year: 1992,                       // number, or null if unknown
     yearDisplay: null,                // string override, or null
     displayName: '964 Carrera RS',    // what appears on the card
     shortNote: 'One sentence.',       // or null
     longStory: [                      // null if no featured treatment
       'First paragraph.',
       'Second paragraph.',
     ],
     featured: false,                  // true = featured article section
     photos: [                         // empty = editorial placeholder
       { src: 'assets/cars/964-rs-1992/01.jpg', alt: '1992 964 Carrera RS' },
     ],
     badge: null,                      // short string or null
     tags: ['964', 'rs', 'air-cooled'],
     status: 'current',               // 'current' or 'past'
     confirm: null,                   // internal note or null
   },

   ============================================================ */
