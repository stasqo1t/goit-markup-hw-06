(() => {
  const menu = document.querySelector("[data-menu]");
  const openBtn = document.querySelector("[data-menu-open]");
  const closeBtn = document.querySelector("[data-menu-close]");

  if (!menu || !openBtn || !closeBtn) return;

  const toggleMenu = () => {
    menu.classList.toggle("is-open");
    document.body.style.overflow = menu.classList.contains("is-open")
      ? "hidden"
      : "";
  };

  openBtn.addEventListener("click", toggleMenu);
  closeBtn.addEventListener("click", toggleMenu);

  menu.addEventListener("click", (e) => {
    if (e.target === menu) toggleMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) {
      toggleMenu();
    }
  });
})();