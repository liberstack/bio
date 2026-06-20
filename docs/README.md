# Template — Portfolio Dev

Template minimalista de portfolio com visual estilo editor de código. Todo o conteúdo vive em dois arquivos Markdown — sem frameworks, sem build step.

```
content.md   → hero, sobre, projetos, contato
legal.md     → política de privacidade e termos de uso
```

Edite esses dois arquivos. O site inteiro se atualiza sozinho — a navegação lateral é gerada automaticamente a partir dos títulos `# H1` do `content.md`.

---

## Estrutura

```
index.html      → estrutura da página (não editar)
style.css       → visual: cores, tipografia, espaçamento
app.js          → lê content.md, monta seções e navegação
ui.js           → scroll ativo, menu mobile, modal de legal.md
marked.min.js   → converte Markdown em HTML (não editar)
content.md      → conteúdo do site ← EDITE AQUI
legal.md        → privacidade e termos  ← EDITE AQUI
```

---

## Como funciona o content.md

Cada seção começa com um título `# H1`. O site cria automaticamente:

- um item de navegação na sidebar com o slug do título
- uma seção de conteúdo com tag `// slug.md`

Tudo que estiver dentro da seção (parágrafos, listas, `## H2`, links) é renderizado normalmente.

**Exemplo:**

```markdown
# Projetos

## Nome do Projeto
Descrição do projeto.

[Ver código](#) [Ver demo](#)
```

### Slugs

O slug é gerado a partir do título: lowercase, sem acentos, espaços viram hífen.

| Título         | Slug na sidebar | Âncora       |
| -------------- | --------------- | ------------ |
| `# Projetos`   | `projetos`      | `#projetos`  |
| `# Sobre Mim`  | `sobre-mim`     | `#sobre-mim` |
| `# Contato`    | `contato`       | `#contato`   |

O slug também é a âncora dos links internos. Para linkar de uma seção para outra, use o slug como href:

```markdown
[Ver projetos](#projetos)
[Falar comigo](#contato)
```

---

## Rodando localmente

O template usa `fetch()` para carregar os arquivos `.md`. **Não funciona abrindo o `index.html` direto no navegador** (duplo clique) — o navegador bloqueia por segurança (erro de CORS).

Use um servidor local:

**VS Code**
Instale a extensão Live Server, clique com o botão direito no `index.html` → "Open with Live Server".

**Terminal**
```bash
npx serve .
```
ou, com Python:
```bash
python3 -m http.server
```

Acesse o endereço exibido no terminal — geralmente `http://localhost:3000` ou `http://localhost:8000`.

---

## Customizando

**Conteúdo** — edite `content.md`. Qualquer título `# H1` vira uma seção nova automaticamente.

**Cores** — edite o bloco `:root` no topo do `style.css`:
```css
--bg: #12141a;
--accent: #e8a33d;
--accent-2: #5fd3c4;
```

**Fontes** — troque o `@import` no topo do `style.css`. As variáveis `--mono` e `--sans` controlam onde cada fonte é aplicada.

**Privacidade e termos** — edite `legal.md`. Qualquer `# H1` dentro do arquivo vira uma seção no modal.

---

## Deploy

Ver `DEPLOY.md`.