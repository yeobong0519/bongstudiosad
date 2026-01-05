function loadHTML(selector, url) {
  fetch(url)
    .then((res) => res.text())
    .then((html) => {
      const el = document.querySelector(selector);
      if (el) el.innerHTML = html;
    })
    .catch((e) => console.error("HTML 로드 실패:", url, e));
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTML("#nav-mount", "/common/nav.html");
  loadHTML("#footer-mount", "/common/footer.html");
});
