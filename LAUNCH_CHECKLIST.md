# Valtegara launch checklist

## Recommended hosting

Use GitHub Pages for this placeholder site:

- It is free for a static landing page.
- It fits the current `index.html` / `styles.css` / `script.js` structure.
- GitHub gives you version history and easy iteration.
- GoDaddy can remain the domain/DNS provider.

## Files to publish

Publish everything in this folder:

- `index.html`
- `privacidad.html`
- `styles.css`
- `script.js`
- `robots.txt`
- `sitemap.xml`
- `site.webmanifest`
- `CNAME`
- `.nojekyll`
- `assets/`

## Google Forms waitlist setup

Lead response sheet created:

- https://docs.google.com/spreadsheets/d/1XF2u2T6kI3F3wwjGNIhI_3xHUyLRvM04zoRrn_jUY3w/edit

Google Form connected in `script.js`:

- https://docs.google.com/forms/d/e/1FAIpQLScLkIeFKK-TppLARdS9nLDDb-ay07XFTWQqp60nXmkQGz4qpA/viewform?usp=header

Before launch, submit one test lead from the landing page and confirm it appears in Google Forms/Sheets. I did not submit a test lead to avoid creating a fake response.

## Domain and search setup

GitHub upload and Pages build are complete.

Repository:

- https://github.com/valtegaradiego/valtegara-landing

GitHub Pages is configured from `main` and built successfully. The remaining step is DNS at GoDaddy.

In GoDaddy DNS, replace the current apex `A` records for `valtegara.com` with GitHub Pages:

- `A @ 185.199.108.153`
- `A @ 185.199.109.153`
- `A @ 185.199.110.153`
- `A @ 185.199.111.153`

Add or update the `www` record:

- `CNAME www valtegaradiego.github.io`

After DNS propagates:

1. In GitHub Pages settings, confirm the custom domain is `valtegara.com`.
2. Enable Enforce HTTPS once GitHub provisions the certificate.
3. Add `https://valtegara.com/` to Google Search Console.
4. Submit `https://valtegara.com/sitemap.xml`.
5. Test link previews using the Open Graph image at `assets/og-image.png`.

## Before campaigns

- Complete the legal/privacy page with Valtegara's final legal entity details.
- Decide whether to add analytics. If yes, add a cookie/privacy flow first.
- Create a business email alias such as `hola@valtegara.com` or `partners@valtegara.com`.
- Test the page on iPhone Safari, Android Chrome, desktop Chrome, and desktop Safari/Edge.
