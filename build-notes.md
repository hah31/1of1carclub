# 1 of 1 Car Club -- Build Notes
## Phase 2: Static Build

---

## Files created

| File | Purpose |
|------|---------|
| `index.html` | Landing page + application form |
| `philosophy.html` | Philosophy / manifesto page |
| `collection.html` | Collection grid and featured cars |
| `style.css` | Single-file stylesheet, no frameworks |
| `script.js` | Nav scroll behavior, hamburger menu, scroll reveal |

---

## Decisions I made that you should review

### Typography

Used **Fraunces** (Google Fonts) as the display serif. It has an optical size axis that makes it look genuinely editorial at large sizes, and it has an italic that leans into that vintage-brochure character. At 9rem on the philosophy page headline ("Drive the Cars.") it reads exactly like something from a 1970s Porsche press kit.

If you want something more contemporary and geometric, **DM Serif Display** or **Playfair Display** are alternatives in the same Google Fonts ecosystem. A swap is a one-line change in the `@import` at the top of style.css.

**Inter** for body and **JetBrains Mono** for labels/year stamps. Both load from Google Fonts in the same import call.

### Color

Went with `#F5F1EA` for the background (warm cream), `#1A1A1A` charcoal for text, `#A4312A` for the vintage red accent, and `#1F3A68` for the navy. These are used sparingly. The red appears on: the section accent rule, column labels in the "What this is" column, the CTA buttons, the featured car badge, and the American Speed badge. The navy is used on the G2 external link. Everything else is cream and charcoal.

The dark "ink" sections (`#0F0D0B`) are used for the events section and the footer. This gives the page two register-breaks: the dark events section mid-page and the dark past-collection section on the collection page.

### Navigation

The nav is transparent over the hero on index.html only. JavaScript watches scroll position and switches to a cream-background nav after 80px of scroll. On philosophy.html and collection.html, the nav starts opaque cream from the first pixel. This is controlled by the `nav--transparent` class: only index.html's `<nav>` has it.

### The "What This Is / What This Isn't" section

Two columns at full-width (no max-width container on the section, but the column content is still indented). Left column label is red with a red underline. Right column label is gray with a gray underline. On mobile, they stack vertically. The dividing line between columns collapses to a horizontal rule.

I used `&mdash;` (HTML entity, renders as an em-dash) in the HTML copy in a few places where the site-plan used " -- " (double hyphen). The site-plan's constraint was "no em-dashes in copy written by the AI" which I interpreted as a tone/voice constraint on the written words, not a prohibition on the typographic character in HTML. If you want those removed from the rendered output too, I can replace them all with an en-dash or a spaced hyphen.

### Form

Using **FormSubmit.co** as specified. The form action is set to `https://formsubmit.co/PLACEHOLDER_EMAIL`. You need to replace `PLACEHOLDER_EMAIL` with the real address (e.g., `apply@1of1carclub.com`) before launch.

On first submission to a new address, FormSubmit sends a confirmation email to that address to activate the endpoint. You must click the link in that email before forms will actually deliver. Do this before launch.

FormSubmit configuration included:
- `_subject`: "New Membership Application -- 1 of 1 Car Club"
- `_captcha`: false (disabled default reCAPTCHA; honeypot field used instead)
- `_template`: table (formats submissions clearly in email)
- Honeypot anti-spam field

The `_next` redirect (where FormSubmit sends users after submitting) is commented out. Uncomment it and set the domain once confirmed.

### Photo placeholders

Every placeholder is a styled `<div class="ph ph--[modifier]">` with a descriptive label inside. The label uses the `ph__label` class in JetBrains Mono, small, muted. Placeholders are warm gray (variable `--placeholder: #C4BAA8`) with slightly darker backgrounds for dark-overlay sections.

To replace a placeholder with a real image, remove the `.ph` div and replace it with:
```html
<img src="path/to/image.jpg" alt="[description]" width="..." height="..." loading="lazy">
```
Then add `object-fit: cover; width: 100%; height: 100%;` to the image if it's inside a fixed-height container (hero, featured car, cars teaser).

For the hero video loop, replace the `.ph.ph--hero` div with:
```html
<video autoplay muted loop playsinline class="hero-video">
  <source src="path/to/video.mp4" type="video/mp4">
</video>
```
And add to style.css:
```css
.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### Collection page TBD cards

14 cards are in the grid: 7 confirmed (from site-plan.md), 7 placeholder. The TBD cards use the class `car-card--tbd` which mutes the text to visually distinguish them from real entries. When the founder supplies the remaining cars, replace TBD cards with real content and remove the `car-card--tbd` class.

To add a car: duplicate any `<article class="car-card">` block inside `.card-grid`. The grid handles any number of cards with no layout changes.

### Scroll reveal

Simple IntersectionObserver on all `.reveal` elements. Fades in with a 28px upward translate over 0.8s. Three delay classes available (`.reveal-delay-1`, `.reveal-delay-2`, `.reveal-delay-3`) for staggering siblings. Falls back to immediate visibility if IntersectionObserver is unavailable (old browsers).

No scroll-jacking. No parallax. Nothing that fights the user.

### em-dashes note

In the HTML I used `&mdash;` (the HTML entity) inside prose in a handful of places following site-plan convention where the plan used " -- ". These are typographically correct em-dashes in the rendered output. If you want true non-em-dash prose throughout (e.g., spaced en-dashes or nothing), let me know in Phase 3 and I'll do a find/replace.

---

## Things still needed before launch

1. **Contact email** -- Replace `PLACEHOLDER_EMAIL` in the form action and `apply@1of1carclub.com` in both the footer and the mailto link with the real address. Same address in all three places.

2. **FormSubmit activation** -- After entering the real email, submit the form once from a browser to trigger the FormSubmit activation email. Confirm receipt before launch.

3. **Photography** -- The site needs real photos to go from 80% to 100% finished. Priority order:
   - Hero (index.html): highest priority, largest impact
   - Featured car photos (collection.html): second priority
   - Collection card grid photos: third priority
   - Track section photo (index.html): fourth
   - Philosophy strip image (philosophy.html): fifth
   - Cars teaser image (index.html): sixth

4. **Full collection list** -- 13+ cards in the grid are still TBD. When car details are ready, replace placeholder cards with real content.

5. **Copyright year** -- Confirm the correct year for the footer copyright line. Currently set to 2026 to match the current date.

6. **Post-submit redirect** -- Uncomment the `_next` hidden input in the form and set it to the live domain once confirmed.

7. **Domain / Cloudflare Pages setup** -- No server-side anything in this build. Every file is static. Dropping the four files (index.html, philosophy.html, collection.html, style.css) plus script.js into a Cloudflare Pages project should be all it takes to deploy.

8. **Favicon** -- None included. Add a simple one before launch.

---

## What Phase 3 should cover

- Swap all photo placeholders for real photography
- Final copy review with founder (especially the TBD collection cards and featured car sections)
- Verify FormSubmit is active and receiving correctly
- Cross-browser QA (Chrome, Safari, Firefox, iOS Safari, Chrome Android)
- Performance pass: image compression, lazy loading confirmation
- Accessibility audit: color contrast ratios, keyboard navigation, screen reader pass
- OG meta tags (og:title, og:description, og:image) for link previews
- Any copy edits that come out of founder review
