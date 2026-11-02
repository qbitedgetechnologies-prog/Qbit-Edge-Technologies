# Qbit Edge Technologies — website

Static marketing site for **Qbit Edge Technologies** (Central New Jersey mobile device & IT liquidation).
Live at **https://qbitedgetechnologies.com** via GitHub Pages.

## Stack

- Single page: `index.html`
- Tailwind CSS, compiled to `css/site.css` (no runtime CDN compiler)
- Google Fonts (Inter, JetBrains Mono) and Font Awesome icons via CDN
- Quote form handled by [FormSubmit](https://formsubmit.co) → `qbitedgetechnologies@gmail.com`

## Editing

Install dependencies once:

```bash
npm install
```

Rebuild the stylesheet after changing `index.html`, `tailwind.config.js`, or `src/tailwind.css`:

```bash
npm run build      # one-off, minified
npm run watch      # rebuild while you work
```

`css/site.css` is committed, so the site deploys without a build step.

Preview locally:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Quote form

The modal form posts to `https://formsubmit.co/qbitedgetechnologies@gmail.com`
(AJAX with an inline success state, native POST as a no-JS fallback).

**FormSubmit requires a one-time activation.** If the endpoint has not been
activated, submissions are rejected. To activate, submit the form once and click
the **Activate Form** link in the email FormSubmit sends to that inbox.

To change the destination address, update both places in `index.html`:

- `form action="https://formsubmit.co/<address>"`
- the `fetch('https://formsubmit.co/ajax/<address>')` call

## SEO / metadata

Page title, description, canonical URL, Open Graph/Twitter tags, and
`LocalBusiness` JSON-LD are in `<head>`. Social profile links live in the footer
and in the JSON-LD `sameAs` array.

## Deploy

Push to `main`. The GitHub Actions workflow in `.github/workflows/deploy-pages.yml`
publishes the repository root to GitHub Pages.

- Custom domain: `CNAME` (`qbitedgetechnologies.com`)
- `.nojekyll` keeps GitHub Pages from processing the files with Jekyll
