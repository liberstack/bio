function scrollToBlock(slug) {
  const target = document.getElementById(`block-${slug}`);
  if (!target) return;
  const headerH = document.querySelector(".titlebar").offsetHeight;
  const top =
    target.getBoundingClientRect().top + window.scrollY - headerH - 32;
  window.scrollTo({ top, behavior: "smooth" });
}

document.addEventListener("content:ready", () => {
  window.scrollTo(0, 0);

  const treeItems = document.querySelectorAll(".tree-item");
  const blocks = document.querySelectorAll(".block");

  // Intercepta links de âncora (#projetos, #contato, etc)
  document.getElementById("content").addEventListener("click", (e) => {
    const link = e.target.closest("a[href^='#']");
    if (!link) return;
    const slug = link.getAttribute("href").slice(1);
    if (document.getElementById(`block-${slug}`)) {
      e.preventDefault();
      scrollToBlock(slug);
    }
  });

  // Clique no explorer rola até a seção
  treeItems.forEach((item) => {
    item.addEventListener("click", () => {
      scrollToBlock(item.dataset.target);
      if (window.innerWidth <= 760) {
        closeDrawer();
      }
    });
  });

  // Revela blocos ao rolar
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.1 },
  );

  blocks.forEach((block, i) => {
    if (i === 0) block.classList.add("visible");
    else observer.observe(block);
  });
});

// Menu mobile — drawer lateral
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

// Cria overlay dinamicamente
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

// Modal legal.md
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

async function openLegalModal() {
  modal.classList.remove("hidden");
  modalBody.innerHTML = '<p style="color:var(--text-dim)">Carregando...</p>';
  try {
    const res = await fetch("legal.md");
    if (!res.ok) throw new Error("legal.md não encontrado");
    const raw = await res.text();
    modalBody.innerHTML = marked.parse(raw);
  } catch (err) {
    modalBody.innerHTML =
      '<p style="color:var(--text-dim)">Não foi possível carregar legal.md.</p>';
    console.error(err);
  }
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
