# Deploy

O site é HTML/CSS/JS estático puro — funciona em qualquer host que sirva arquivos estáticos. Nenhuma configuração de build necessária.

---

## GitHub Pages

1. Crie um repositório no GitHub e suba todos os arquivos
2. Vá em **Settings → Pages**
3. Em "Branch", selecione `main` (ou `master`) e clique em **Save**
4. O site estará disponível em `https://<usuario>.github.io/<repositorio>/`

Para publicar como página pessoal (`<usuario>.github.io`), o repositório precisa se chamar exatamente `<usuario>.github.io`.

---

## Cloudflare Pages

1. Suba os arquivos para um repositório no GitHub
2. Acesse [pages.cloudflare.com](https://pages.cloudflare.com) e clique em **Create a project**
3. Conecte o repositório
4. Deixe "Build command" e "Build output directory" em branco — é estático
5. Clique em **Save and Deploy**

Domínio gratuito no formato `<projeto>.pages.dev`. Suporta domínio customizado.

---

## Netlify

**Sem Git (mais rápido):**
Arraste a pasta do projeto para [app.netlify.com/drop](https://app.netlify.com/drop). Pronto.

**Com Git:**
1. Suba os arquivos para um repositório no GitHub
2. Em [app.netlify.com](https://app.netlify.com), clique em **Add new site → Import an existing project**
3. Conecte o repositório
4. Deixe "Build command" e "Publish directory" em branco
5. Clique em **Deploy**

Domínio gratuito no formato `<nome-aleatorio>.netlify.app`. Suporta domínio customizado.

---

## Domínio customizado

Todos os hosts acima suportam domínio próprio gratuitamente. O processo geral:

1. Compre o domínio (Cloudflare Registrar, Namecheap, Porkbun etc.)
2. No painel do host, adicione o domínio customizado
3. Aponte o DNS conforme as instruções do host (geralmente um registro `CNAME` ou `A`)
4. Aguarde a propagação (alguns minutos no Cloudflare, até 48h em outros)

---

## Checklist antes de publicar

- [ ] Nome, cargo e textos atualizados em `content.md`
- [ ] Links de projetos apontando para URLs reais (não `#`)
- [ ] E-mail e redes sociais corretos na seção de contato
- [ ] `legal.md` revisado com seu nome/contato
- [ ] `<title>` e `<meta name="description">` atualizados no `index.html`
- [ ] Tags Open Graph (`og:title`, `og:description`) atualizadas no `index.html`
- [ ] Ano no rodapé atualizado no `index.html`