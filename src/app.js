// app.js — ponto de entrada, une config + router + ui

(function init() {
  // Monta a nav a partir do config
  UI.buildNav(CONFIG.routes);

  // Injeta o handler em cada rota
  const routes = CONFIG.routes.map((r) => ({
    ...r,
    handler: (route) => UI.renderPage(route),
  }));

  // Inicializa o router
  Router.init(routes, NotFound.handle);
})();
