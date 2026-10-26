/* Renders the lists from data.js. You shouldn't need to edit this file. */
(function () {
  const C = window.CV || {};
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const ME = "Leonidas Bakopoulos";

  const news = document.getElementById("news-list-target");
  if (news && C.NEWS) {
    news.innerHTML = C.NEWS.map((n) => `<li><time>${esc(n.date)}</time><span>${n.text}</span></li>`).join("");
  }

  const pubs = document.getElementById("pubs");
  if (pubs && C.PUBLICATIONS) {
    const sorted = [...C.PUBLICATIONS].sort((a, b) => b.year - a.year);
    pubs.innerHTML = sorted.map((p) => {
      const authors = esc(p.authors).replace(ME, `<b>${ME}</b>`);
      const links = Object.entries(p.links || {}).map(([k, v]) =>
        `<a class="pill${k === "Project page" ? " main" : ""}" href="${esc(v)}">${esc(k)}</a>`).join("");
      return `<article class="pub">
        <div class="pub-badge">${esc(p.short || p.year)}</div>
        <div>
          <h3>${p.links && p.links["Project page"] ? `<a href="${esc(p.links["Project page"])}">${esc(p.title)}</a>` : esc(p.title)}</h3>
          <p class="authors">${authors}</p>
          <p class="venue">${esc(p.venue)}</p>
          <div class="pills">${links}</div>
        </div>
      </article>`;
    }).join("");
  }

  function timeline(id, items) {
    const el = document.getElementById(id);
    if (!el || !items) return;
    el.innerHTML = items.map((x) => `<li>
      <div class="when">${esc(x.when)}</div>
      <div><h3>${esc(x.title)}</h3><p class="where">${esc(x.where)}</p>${x.text ? `<p>${esc(x.text)}</p>` : ""}</div>
    </li>`).join("");
  }
  timeline("exp-list", C.EXPERIENCE);
  timeline("edu-list", C.EDUCATION);

  // Profile photo: show assets/img/profile.jpg if it exists, otherwise keep the monogram
  const photo = document.getElementById("photo");
  if (photo) {
    const img = new Image();
    img.onload = () => { photo.innerHTML = ""; img.alt = ME; photo.appendChild(img); photo.classList.add("has-img"); };
    img.src = "assets/img/profile.jpg";
  }

  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
