// Scroll suave até seção
function scrollToBlock(id) {
  const target = document.getElementById(id);
  if (!target) return;
  const headerH = document.querySelector(".titlebar").offsetHeight;
  const top =
    target.getBoundingClientRect().top + window.scrollY - headerH - 32;
  window.scrollTo({ top, behavior: "smooth" });
}

// Navegação sidebar
document.querySelectorAll(".tree-item").forEach((item) => {
  item.addEventListener("click", () => {
    scrollToBlock(item.dataset.target);
    if (window.innerWidth <= 760) closeDrawer();
  });
});

// Intercepta links de âncora internos (#block-*)
document.getElementById("content").addEventListener("click", (e) => {
  const link = e.target.closest("a[href^='#']");
  if (!link) return;
  const id = link.getAttribute("href").slice(1);
  if (document.getElementById(id)) {
    e.preventDefault();
    scrollToBlock(id);
  }
});

// Reveal on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".block:not(.visible)").forEach((block) => {
  observer.observe(block);
});

// Menu mobile — drawer lateral
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

const drawerOverlay = document.createElement("div");
drawerOverlay.className = "drawer-overlay";
document.body.appendChild(drawerOverlay);

function openDrawer() {
  sidebar.classList.add("open");
  drawerOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  sidebar.classList.remove("open");
  drawerOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

menuToggle.addEventListener("click", openDrawer);
drawerOverlay.addEventListener("click", closeDrawer);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeDrawer();
});

// Modal legal — conteúdo já está no HTML, só mostra/esconde
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");

function openLegalModal() {
  modal.classList.remove("hidden");
}

function closeLegalModal() {
  modal.classList.add("hidden");
}

document.getElementById("legalBtn").addEventListener("click", openLegalModal);
document
  .getElementById("legalBtnFooter")
  .addEventListener("click", openLegalModal);
modalClose.addEventListener("click", closeLegalModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeLegalModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden"))
    closeLegalModal();
});
