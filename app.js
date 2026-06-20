function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function splitIntoSections(markdown) {
  const lines = markdown.split("\n");
  const sections = [];
  let current = null;

  lines.forEach((line) => {
    const match = line.match(/^# ([^#].+)/);
    if (match) {
      if (current) sections.push(current);
      current = { title: match[1].trim(), body: "" };
    } else if (current) {
      current.body += line + "\n";
    }
  });
  if (current) sections.push(current);

  return sections;
}

async function loadContent() {
  const contentEl = document.getElementById("content");
  const treeEl = document.getElementById("fileTree");

  try {
    const res = await fetch("content.md");
    if (!res.ok) throw new Error("content.md não encontrado");
    const raw = await res.text();
    const sections = splitIntoSections(raw);

    sections.forEach((section, index) => {
      const slug = slugify(section.title);
      const isHero = index === 0;

      const navItem = document.createElement("button");
      navItem.className = "tree-item";
      navItem.textContent = isHero ? "Home" : section.title;
      navItem.dataset.target = isHero ? "hero" : slug;
      navItem.setAttribute("aria-label", `Ir para ${section.title}`);
      treeEl.appendChild(navItem);

      const block = document.createElement("section");
      block.className = "block";
      block.id = isHero ? "block-hero" : `block-${slug}`;

      const anchor = document.createElement("span");
      anchor.id = isHero ? "hero" : slug;
      block.appendChild(anchor);

      const body = document.createElement("div");
      // Garante linha em branco entre título e body para o marked parsear blockquotes
      body.innerHTML = marked.parse(`# ${section.title}\n\n${section.body}`);
      block.appendChild(body);

      // Injeta botões CTA na primeira seção (Hero)
      if (isHero) {
        const cta = document.createElement("div");
        cta.className = "cta-row";
        cta.innerHTML = `
          <a href="#projetos">Ver projetos</a>
          <a href="#contato">Falar comigo</a>
        `;
        body.appendChild(cta);
      }

      contentEl.appendChild(block);
    });

    document.dispatchEvent(new CustomEvent("content:ready"));
  } catch (err) {
    contentEl.innerHTML =
      '<p style="color:var(--text-dim)">Não foi possível carregar content.md. Confira se os arquivos estão sendo servidos por um servidor local (não abertos direto via file://).</p>';
    console.error(err);
  }
}

loadContent();
