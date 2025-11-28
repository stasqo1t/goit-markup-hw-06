(() => {
  const backdrop = document.querySelector(".backdrop");
  const openBtn = document.querySelector(".hero-btn");
  const closeBtn = document.querySelector(".modal-close-btn");

  if (!backdrop || !openBtn || !closeBtn) return;

  const toggleModal = () => {
    backdrop.classList.toggle("is-open");

    document.body.style.overflow = backdrop.classList.contains("is-open")
      ? "hidden"
      : "";
  };

  openBtn.addEventListener("click", toggleModal);
  closeBtn.addEventListener("click", toggleModal);

  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) toggleModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && backdrop.classList.contains("is-open")) {
      toggleModal();
    }
  });
})();