# Edwin Jr. G. Macasero — Portfolio

Personal portfolio site built from a Stitch design. Static HTML/CSS/JS with a small Tailwind CSS build step, ready for free hosting.

## Preview locally

Build the Tailwind stylesheet, then open `index.html` in a browser or serve this folder locally:

```bash
npm install
npm run build
python -m http.server 8080
```

If PowerShell blocks the `npm` script, use `npm.cmd install` and `npm.cmd run build` instead.

Then visit `http://localhost:8080`.

## Deploy for free

### GitHub Pages (recommended)

1. Run `npm install` and `npm run build`, then commit and push the generated `assets/tailwind.css` with the rest of the site.
2. GitHub → **Settings** → **Pages**.
3. Source: **Deploy from a branch**.
4. Branch: `main` (or `master`), folder: `/ (root)`.
5. Save. Your site will be at `https://<username>.github.io/<repo>/`.

If the repo is named `<username>.github.io`, the site is available at `https://<username>.github.io/`.

### Netlify

1. Go to [app.netlify.com](https://app.netlify.com).
2. **Add new site** → **Deploy manually** and drop this folder, **or** connect the GitHub repo.
3. Publish directory: `.` (the folder that contains `index.html`).

### Cloudflare Pages / Vercel

Connect the same GitHub repo. Leave the build command empty and set the output/root directory to the repo root (where `index.html` lives).

## Contact form

The form sends through [FormSubmit](https://formsubmit.co) to `macaserojr11@gmail.com`. The first message triggers a confirmation email — click that once so later messages arrive automatically. If FormSubmit is blocked, the site opens your mail app as a fallback.

## Customize

| Item | Where |
| --- | --- |
| Name, about, projects | `index.html` |
| Email | `CONTACT_EMAIL` in the script at the bottom of `index.html` |
| GitHub | search `javss30` in `index.html` |
| Photo | replace the `EM` monogram in the ID badge with an `<img>` |

The original Stitch export remains in `stitch_responsive_golden_student_portfolio/`.
