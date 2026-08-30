# Portfolio

Personal portfolio site — plain HTML/CSS/JS, no build step, ready to
deploy straight to GitHub Pages as `jaysingh10406.github.io`.

## Deploying to GitHub Pages

1. Create a new **public** repo on GitHub named exactly
   `jaysingh10406.github.io` (this exact naming is what makes GitHub serve
   it at the root of your GitHub Pages domain instead of a subpath).
2. Push this folder's contents to that repo's `main` branch.
3. In the repo's Settings → Pages, set the source to "Deploy from a
   branch" → `main` → `/ (root)`.
4. Your site is live at `https://jaysingh10406.github.io` within a minute
   or two.

See the top-level delivery notes for the exact git commands.

## Structure

```
index.html      — all page content
css/style.css   — styling
js/main.js      — active-section nav highlighting on scroll
```

## Before you push

- Swap the placeholder LinkedIn link in `index.html` for your real
  profile URL.
- The four project cards link to `github.com/jaysingh10406/<repo-name>` —
  push those four repos under those exact names (or update the links) so
  the "Code →" links resolve.
- Phone number was intentionally left off this public page — email and
  LinkedIn are there instead. Add it back in the Contact section if
  you'd rather have it public.
