# Guilherme Ribeiro — Portfolio

Portfolio pessoal estático com foco em simplicidade, performance e SEO nativo.

## Stack

- HTML puro — sem frameworks, sem build step
- CSS com variáveis customizadas
- JavaScript vanilla
- Deploy via GitHub Pages ou Cloudflare Pages

## Estrutura

```
index.html   ← conteúdo, estrutura e modal legal
style.css    ← visual e responsivo
ui.js        ← comportamento: scroll, drawer mobile, modal
config.js    ← dados centralizados: nome, email, links
assets/
  photo.png
```

## Arquitetura

Todo o conteúdo está dentro do `index.html`. Sem fetch de Markdown, sem renderização via JavaScript, sem dependências externas. O Google lê o conteúdo completo no primeiro byte — SEO resolvido na estrutura.

O `config.js` centraliza dados de contato e links sem injetar nada no DOM. O `ui.js` cuida exclusivamente de comportamento: scroll suave, drawer lateral mobile e modal de privacidade/termos.

## Funcionalidades

- Navegação por seções com scroll suave
- Reveal animado das seções ao rolar
- Drawer lateral responsivo no mobile
- Modal de Política de Privacidade e Termos de Uso
- SEO básico: `<title>`, `<meta description>`, Open Graph

## Como rodar localmente

Qualquer servidor estático funciona. Com o VS Code, basta usar a extensão Live Server. Pela linha de comando:

```bash
npx serve .
```

Não abre via `file://` direto no browser — use um servidor local.

## Deploy

Veja o [DEPLOY.md](./DEPLOY.md) para instruções de deploy no GitHub Pages e Cloudflare Pages.