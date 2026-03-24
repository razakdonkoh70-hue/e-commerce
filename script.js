const storeNav = document.querySelector(".store-nav");
const menuToggle = document.querySelector(".menu-toggle");
const filterTabs = document.querySelectorAll(".catalog-tab");
const catalogCards = document.querySelectorAll(".catalog-card");

if (menuToggle && storeNav) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    storeNav.classList.toggle("open", !expanded);
  });
}

filterTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const filter = tab.dataset.filter;

    filterTabs.forEach((item) => {
      item.classList.toggle("active", item === tab);
    });

    catalogCards.forEach((card) => {
      const matches = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hidden", !matches);
    });
  });
});
