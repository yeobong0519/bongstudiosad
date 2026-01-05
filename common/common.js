function loadHTML(selector, url) {
  return fetch(url)
    .then(res => res.text())
    .then(html => {
      const el = document.querySelector(selector);
      if (el) el.innerHTML = html;
      return el;
    });
}

function setActiveNav() {
  const path = location.pathname;

  // nav.html 안의 .menu-item들 가져오기
  const items = document.querySelectorAll(".menu-item");
  items.forEach(a => a.classList.remove("active"));

  // 규칙: 현재 경로에 따라 active 자동 지정
  // /tests/ 이하 = 테스트
  if (path.startsWith("/tests")) {
    document.querySelectorAll('.menu-item[href="/tests/"]').forEach(a => a.classList.add("active"));
    return;
  }
  // /about/ = 소개
  if (path.startsWith("/about")) {
    document.querySelectorAll('.menu-item[href="/about/"]').forEach(a => a.classList.add("active"));
    return;
  }
  // /contact/ = 문의
  if (path.startsWith("/contact")) {
    document.querySelectorAll('.menu-item[href="/contact/"]').forEach(a => a.classList.add("active"));
    return;
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadHTML("#nav-mount", "/common/nav.html");
  await loadHTML("#footer-mount", "/common/footer.html");
  setActiveNav();
});
