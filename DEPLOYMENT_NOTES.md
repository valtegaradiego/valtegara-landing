# Valtegara landing page deployment notes

## Files to upload to GoDaddy

Upload these files to the web root for `valtegara.com`, usually `public_html`:

- `index.html`
- `privacidad.html`
- `styles.css`
- `script.js`
- `assets/valtegara-logo-transparent.png`
- `assets/og-image.png`
- `assets/icon-192.png`
- `assets/icon-512.png`
- `assets/apple-touch-icon.png`
- `robots.txt`
- `sitemap.xml`
- `site.webmanifest`

No build step is required. The page is static.

## Current assets

This first version uses one transparent logo image. Upload the `assets` folder together with the HTML and CSS.

External dependency:

- Google Fonts: `Instrument Serif` and `Inter`.

If you want a fully self-hosted version later, download and host the font files locally, then replace the Google Fonts link in `index.html`.

## Items to customize before publishing

- Replace `diegoserrano@valtegara.com` in `index.html` if you want another destination email.
- Google Forms capture is connected in `script.js`.
- Lead response sheet prepared: https://docs.google.com/spreadsheets/d/1XF2u2T6kI3F3wwjGNIhI_3xHUyLRvM04zoRrn_jUY3w/edit
- If using GitHub Pages, keep `CNAME` and `.nojekyll` in the repository root.
- Complete `privacidad.html` with Valtegara's final legal entity details before campaigns.
- Add a cookie policy only if you add analytics or tracking scripts.
- Add production analytics only after the privacy/cookie approach is decided.

## Suggested future visual assets

- Founder-approved Valtegara/Temple logo files:
  - SVG for site use
  - PNG at 512x512 px for fallback
- Favicon package:
  - `favicon.ico`
  - `apple-touch-icon.png`, 180x180 px
  - `icon-192.png`
  - `icon-512.png`
- Optional product screenshots once the real WhatsApp/admin experience exists.

## Positioning notes

The copy is deliberately short and partner-focused: Valtegara is introduced first, while Temple is framed as the first product for post-death administrative support.
