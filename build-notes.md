# 1 of 1 Car Club -- Build Notes
## Phase 3 Update (Phase 2 original notes preserved below)

---

## How to add a new car (60 seconds)

**You only ever touch one file: `collection-data.js`.**

1. Open `collection-data.js`
2. Copy the template block at the bottom of the file
3. Fill in the fields (at minimum: `id`, `displayName`, `shortNote`, `status`)
4. Drop photos in `/assets/cars/[id]/` (e.g., `/assets/cars/964-rs-1992/01.jpg`)
5. Add photo objects to the `photos` array
6. Push to deploy

The grid, featured section, and past collection list all update automatically on the next page load. No HTML changes required.

### Complete example entry

```js
{
  id: '964-rs-1992',           // unique, URL-safe. Also the photo folder name.
  year: 1992,                   // number, or null
  yearDisplay: null,            // string override (e.g. 'Early 1990s'), or null
  displayName: '964 Carrera RS',
  shortNote: 'The lightweight RS. Built to go fast, nothing else.',
  longStory: [                  // null if no featured treatment wanted
    'Porsche built the 964 Carrera RS to homologate for motorsport competition.',
    'It weighed less than 2,600 pounds from the factory.',
  ],
  featured: false,              // true = full article in the Featured section
  photos: [
    {
      src: 'assets/cars/964-rs-1992/01.jpg',
      alt: '1992 964 Carrera RS, Guards Red'
    },
  ],
  badge: null,                  // short accent label, or null
  tags: ['964', 'rs', 'air-cooled'],
  status: 'current',           // 'current' or 'past'
  confirm: null,               // internal note (rendered as HTML comment), or null
},
```

### Photo folder convention

```
assets/
  cars/
    [car-id]/
      01.jpg    <-- primary photo, used on the grid card
      02.jpg    <-- optional additional photos
      03.jpg
```

The first item in the `photos` array is used on the grid card. If the array is empty, the editorial placeholder is shown automatically.

### Photo specs (for photographer briefing)

- **Card photos**: 1200x800px minimum, 3:2 ratio, JPG
- **Featured car photos**: 1600x1200px minimum, 4:3 ratio, JPG
- File size: compress to under 300KB per image before committing
- Naming: `01.jpg`, `02.jpg` etc. (sequential, no spaces)

### Deploying changes

```bash
git add collection-data.js assets/cars/[car-id]/
git commit -m "Add [year model]"
git push
```

Cloudflare Pages deploys automatically on push to main.

---

## Replacing photo placeholders

When real photos come in, for any section:

1. Replace the `.ph` div (the warm-gray block) with a real `<img>` tag, or
2. Update the `photos` array in `collection-data.js` for collection page entries

**Hero (index.html):**
Swap the `.ph.ph--hero` div for:
```html
<video autoplay muted loop playsinline style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">
  <source src="assets/hero.mp4" type="video/mp4">
</video>
```
Or for a still image:
```html
<img src="assets/hero.jpg" alt="[description]"
     style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover" loading="eager">
```

**Track section, events photo strip, philosophy image break:**
Same pattern. Find the `.ph` div and replace with an `<img>`. The parent container is already sized correctly.

---

## Form (FormSubmit.co)

**Destination**: hello@1of1carclub.com
**Activation**: FormSubmit requires clicking a confirmation link on the first submission. Submit the form once from the live domain, check hello@1of1carclub.com for the activation email, click the link. After that, all submissions deliver normally.

**Post-submit redirect**: Set to `https://1of1carclub.com/thanks.html`. If the domain changes, update the `_next` hidden input in `index.html`.

**Test before launch**: Fill in the form on the live site, submit, and confirm the email arrives at hello@1of1carclub.com with all fields populated.

---

## Phase 3 decisions

### Em-dashes
All em-dashes (`&mdash;`, `&#8212;`, literal `—`) have been removed from every HTML file. Replacements:
- "X -- Y" constructions became two sentences (period, then new sentence)
- Parenthetical uses became actual parentheses
- Colons were used where an em-dash introduced a list or elaboration
- The title tag separator changed from `&mdash;` to ` | `

### Data architecture
`collection-data.js` exposes `window.COLLECTION_DATA` with `current` and `past` arrays. `script.js` reads from this on DOMContentLoaded and populates three containers:
- `#collection-grid` (non-featured current cars)
- `#featured-section` (featured:true cars, alternating layout)
- `#past-collection-list` (past array)

The American Speed editorial entry (`id: 'american-speed-feature'`) lives in `current` with `featured: true`. It does not appear in the grid but generates a full featured article. The two physical car entries (`american-speed-01`, `american-speed-02`) are separate non-featured entries and appear in the grid.

### Placeholder card design
Cards with empty `photos` arrays render an editorial placeholder: the year in large serif, model name below, a tiny "Photo pending" label, and an inner inset border that references vintage brochure layouts. TBD cards (where `confirm` is set) use a slightly more muted treatment. The same system works for featured car media sections.

### OG image
`assets/og-placeholder.svg` is a text-based SVG (no external fonts, renders anywhere). Replace with a real 1200x630 JPEG before or after launch. Update the `og:image` meta tag in all three pages and `thanks.html` when the real image is ready.

### Favicon
`assets/favicon.svg` is a small typographic mark. Replace when the final logo is available.

### count display
The `#collection-count` element defaults to "20+ cars" in the HTML and is not updated by JavaScript. This is intentional: the count should reflect the founder's description of the collection (20+), not the raw length of the data array.

---

## Phase 2 notes (original, preserved)

### Typography
Fraunces serif + Inter sans + JetBrains Mono. All loaded via Google Fonts single import. Swap by updating the `@import` at the top of style.css.

### Color
Cream `#F5F1EA`, charcoal `#1A1A1A`, red `#A4312A`, navy `#1F3A68`. Red appears on: section accent rules, "What this is" column label, CTA buttons, badges. Navy on external links. Everything else is cream/charcoal.

### Navigation
Transparent over hero on index.html only (JS-controlled). Opaque cream on all other pages. Hamburger menu on mobile.

### FormSubmit
Form `_captcha` is `false` (disabled reCAPTCHA). Honeypot field is present. These are sufficient for low-volume form spam.
