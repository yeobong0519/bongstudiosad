document.addEventListener("DOMContentLoaded", () => {
  fetch("/common/nav.html")
    .then((res) => res.text())
    .then((html) => {
      const mount = document.getElementById("nav-mount");
      if (mount) mount.innerHTML = html;
    })
    .catch((e) => console.error("NAV 로드 실패:", e));
});
