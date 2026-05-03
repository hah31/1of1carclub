# 1 of 1 Car Club -- Launch Checklist

Soft-launch checklist for 1of1carclub.com.
Work through this top to bottom before going live.

---

## Domain

- [ ] Confirm `1of1carclub.com` is registered and you control the DNS
- [ ] If registrar is not Cloudflare, point nameservers to Cloudflare (Cloudflare handles DNS and CDN)

---

## Cloudflare Pages setup

This site is a static build -- no build step required. Cloudflare Pages serves the files directly.

1. [ ] In Cloudflare dashboard: **Pages > Create a project > Connect to Git**
2. [ ] Connect to the `hah31/1of1carclub` GitHub repository
3. [ ] Framework preset: **None** (this is a plain HTML/CSS/JS site)
4. [ ] Build command: *(leave blank)*
5. [ ] Build output directory: `/` (root)
6. [ ] Deploy. Cloudflare assigns a `*.pages.dev` subdomain -- verify the site loads correctly there first
7. [ ] **Custom domain**: In Pages settings, add `1of1carclub.com` and `www.1of1carclub.com`
8. [ ] Cloudflare auto-provisions SSL -- confirm the padlock shows in browser
9. [ ] Set up redirect: `www.1of1carclub.com` → `1of1carclub.com` (Pages handles this via a redirect rule or custom domain configuration)

---

## Email routing (Cloudflare Email Routing)

`hello@1of1carclub.com` needs to forward to a real inbox (or inboxes).

1. [ ] In Cloudflare dashboard: **Email > Email Routing**
2. [ ] Add routing rule: `hello@1of1carclub.com` → forward to founder's personal inbox
3. [ ] Optional: also forward to a second inbox (if multiple people should receive applications)
4. [ ] Send a test email to `hello@1of1carclub.com` and confirm delivery

---

## FormSubmit activation

FormSubmit requires a one-time activation on the email address before submissions deliver.

1. [ ] Go to the live site at `1of1carclub.com`
2. [ ] Fill in the application form completely (use real data or obvious test data)
3. [ ] Submit the form
4. [ ] Check `hello@1of1carclub.com` for an email from FormSubmit with subject: "Confirm your FormSubmit.co email address"
5. [ ] Click the confirmation link in that email
6. [ ] Submit the form a second time and confirm the submission arrives at `hello@1of1carclub.com`
7. [ ] Verify the thank-you redirect works: after submission, the browser should land on `1of1carclub.com/thanks.html`

---

## Pre-launch QA

### Desktop (Chrome, Safari, Firefox)

- [ ] Home page loads correctly, hero placeholder visible, all sections present
- [ ] Philosophy page loads and all sections readable
- [ ] Collection page loads, card grid populates from JS, featured cars appear
- [ ] All internal navigation links work (nav, footer, CTA buttons)
- [ ] G2 Motorsports Park link opens in new tab: `https://g2motorsportspark.com`
- [ ] `mailto:hello@1of1carclub.com` link opens mail client
- [ ] Application form validates: try submitting empty, try invalid email format
- [ ] Application form submits correctly (see FormSubmit section above)
- [ ] Thanks page renders correctly after form submission
- [ ] No broken images (placeholder divs should display, not broken img tags)
- [ ] No JavaScript errors in browser console

### Mobile (real iPhone, Safari -- not Chrome DevTools)

- [ ] Home page hero fills the screen, headline readable
- [ ] Nav hamburger opens and closes correctly
- [ ] "What this is / What this isn't" stacks to single column
- [ ] Collection grid stacks to single column
- [ ] Form fields are large enough to tap, keyboard doesn't obscure the submit button
- [ ] Touch targets (nav links, buttons) are at least 44px
- [ ] Text is readable without zooming

---

## Copy review (read every page out loud)

- [ ] Read index.html top to bottom out loud -- catch any typos, rhythm issues
- [ ] Read philosophy.html out loud -- the prose should flow without headers interrupting it
- [ ] Read each collection card and featured car entry -- flag anything that needs founder input
- [ ] Check footer email is correct on all pages: `hello@1of1carclub.com`
- [ ] Check copyright year in footer (currently 2026)
- [ ] Confirm no em-dashes remain anywhere (search: `&mdash;` and `--` in HTML files)
- [ ] Confirm no banned words appear: luxury, exclusive, premium, elite, elevated, curated, world-class, unparalleled, bespoke

---

## Collection page: data entry

- [ ] Confirm with founder: year of second Carrera GT in current collection
- [ ] Confirm with founder: year and details for 993 GT2 R
- [ ] Confirm with founder: base model and year for both DP Motorsport builds
- [ ] Confirm with founder: which two cars are in American Speed, and nature of involvement
- [ ] Confirm with founder: full list of remaining 13+ current cars (the TBD entries)
- [ ] Update `collection-data.js` with all confirmed details
- [ ] Remove `confirm` strings from entries once details are locked

---

## Photography (Phase 4 -- not a launch blocker)

The site is designed to launch with placeholder cards. These look intentional, not broken.
Photography is a separate phase. When photos are ready:

- [ ] Shoot collection per photo spec in build-notes.md (3:2 ratio, 1200x800px min)
- [ ] Drop photos in `/assets/cars/[car-id]/` folders
- [ ] Update `photos` array in `collection-data.js` for each car
- [ ] Replace hero placeholder on index.html with real image or video loop
- [ ] Replace track section placeholder with G2 on-track shot
- [ ] Replace philosophy page image strip
- [ ] Replace cars teaser section image
- [ ] Create real 1200x630 OG image and update `og:image` meta tag in all 4 HTML files

---

## Final steps

- [ ] Verify sitemap at `https://1of1carclub.com/sitemap.xml`
- [ ] Verify robots.txt at `https://1of1carclub.com/robots.txt`
- [ ] Confirm favicon shows in browser tab (the "1 of 1 / Car Club" typographic mark)
- [ ] Share the `*.pages.dev` preview URL with the founder for review before pointing the real domain
- [ ] Point `1of1carclub.com` DNS to Cloudflare Pages
- [ ] Confirm live URL loads over HTTPS with no mixed-content warnings

---

*Photography is Phase 4. Everything else on this list is a launch requirement.*
