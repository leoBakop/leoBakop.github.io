# leobakop.github.io

Personal website of Leonidas Bakopoulos. Plain HTML/CSS/JS — no build step.

```
index.html                       the page
assets/js/data.js                news, publications, experience, education  ← edit this
assets/css/style.css             styling (colours at the top)
assets/js/main.js                renders the lists (no need to touch)
assets/files/Leonidas_Bakopoulos_CV.pdf   the "CV (PDF)" button
assets/img/profile.jpg           (optional) your photo — replaces the "LB" circle
```

## Common updates

* **New paper** → add an entry to `PUBLICATIONS` in `assets/js/data.js`.
  If the paper has its own site in one of your repos (like ADEU), add
  `"Project page": "<RepoName>/"` to its links.
* **News** → add a line at the top of `NEWS`.
* **New CV** → replace `assets/files/Leonidas_Bakopoulos_CV.pdf` (keep the same name).
* **Photo** → upload a square image as `assets/img/profile.jpg`.

Project pages for papers live in their own repos (e.g. `leoBakop/ADEU`, folder `docs/`)
and appear automatically at `https://leobakop.github.io/<RepoName>/`.
