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

## Day / night theme

The header has a sun/moon button (desktop CTA group and next to the mobile menu
button) that switches between the light and dark themes.

- With no saved choice, the page follows the visitor's OS `prefers-color-scheme`.
- An explicit choice is stored in `localStorage` under the key `theme`
  (`"light"` or `"dark"`) and wins over the OS setting from then on.
- An inline script in `<head>` applies the theme before first paint, so there is
  no light flash on reload.
- Theme styles are token overrides under `html.dark` in `src/tailwind.css`, so
  new light-theme utility classes may need a matching dark override.

## Quote form

The modal form posts to `https://formsubmit.co/qbitedgetechnologies@gmail.com`.
JavaScript turns it into an inline AJAX submit; if `fetch` is unavailable the
browser falls back to the form's native POST. The modal itself is opened by
JavaScript, so visitors without JavaScript see a `<noscript>` notice with the
phone number and email address instead of a form.

**FormSubmit requires a one-time activation.** If the endpoint has not been
activated, submissions are rejected. To activate, submit the form once and click
the **Activate Form** link in the email FormSubmit sends to that inbox.

Spam controls: a hidden `_honey` honeypot, FormSubmit's `_blacklist` phrase list,
and `maxlength` limits on every field. If spam still gets through, the next step
is a Cloudflare Turnstile-protected Worker or a different form provider — not
disabling the inline experience.

To change the destination address, update both places in `index.html`:

- `form action="https://formsubmit.co/<address>"`
- the `fetch('https://formsubmit.co/ajax/<address>')` call

## SEO / metadata

Page title, description, canonical URL, Open Graph/Twitter tags, and
`LocalBusiness` JSON-LD are in `<head>`. Social profile links live in the footer
and in the JSON-LD `sameAs` array. `robots.txt` points crawlers at
`sitemap.xml`, which lists the single canonical page.

## Deploy

Push to `main`. The GitHub Actions workflow in `.github/workflows/deploy-pages.yml`
publishes the repository root to GitHub Pages.

- Custom domain: `CNAME` (`qbitedgetechnologies.com`)
- `.nojekyll` keeps GitHub Pages from processing the files with Jekyll
- The `check` job runs on pushes and pull requests: it installs dependencies,
  rebuilds `css/site.css`, and fails if the committed stylesheet is out of date.
  The deploy job only runs on `main` after that check passes.
- Dependabot (`.github/dependabot.yml`) opens weekly update PRs for npm and
  GitHub Actions. Actions are pinned to commit SHAs; bump them deliberately.

