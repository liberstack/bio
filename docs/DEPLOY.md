# Deploy

Instruções para publicar o portfolio no GitHub Pages ou Cloudflare Pages.

---

## GitHub Pages

### 1. Criar o repositório

Crie um repositório público no GitHub. Para que o site fique disponível em `seuusuario.github.io`, o nome do repositório deve ser exatamente `seuusuario.github.io`.

Para um repositório com nome qualquer, o site fica em `seuusuario.github.io/nome-do-repo`.

### 2. Enviar os arquivos

```bash
git init
git add .
git commit -m "init"
git remote add origin https://github.com/seuusuario/seuusuario.github.io.git
git push -u origin main
```

### 3. Ativar o GitHub Pages

No repositório, acesse **Settings → Pages**. Em **Source**, selecione a branch `main` e a pasta `/ (root)`. Salve.

O site estará disponível em alguns minutos no endereço exibido na página.

---

## Cloudflare Pages

### 1. Acessar o dashboard

Acesse [pages.cloudflare.com](https://pages.cloudflare.com) e faça login.

### 2. Criar o projeto

Clique em **Create a project → Connect to Git**. Autorize o acesso ao GitHub e selecione o repositório do portfolio.

### 3. Configurar o build

Como o projeto não tem build step, deixe as configurações assim:

| Campo | Valor |
|---|---|
| Framework preset | None |
| Build command | *(vazio)* |
| Build output directory | `/` |

Clique em **Save and Deploy**.

### 4. Domínio customizado (opcional)

No painel do projeto, acesse **Custom domains** e siga as instruções para apontar seu domínio.

---

## Observações

- Não há arquivo `_config.yml` nem nenhuma configuração de build necessária.
- Qualquer alteração no `index.html`, `style.css`, `ui.js` ou `config.js` basta fazer `git push` para o deploy atualizar automaticamente.
- A pasta `assets/` com a foto deve estar incluída no repositório.