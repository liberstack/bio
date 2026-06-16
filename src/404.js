// 404.js — handler da rota not found
// Mantido separado para facilitar customização futura

const NotFound = (() => {
  function handle() {
    UI.render404();
  }

  return { handle };
})();
