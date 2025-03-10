export class Router {
  routes = {};

  // Função que recebe as rotas
  add(routeName, page) {
    this.routes[routeName] = page;
  }

  // Funções que lidam com as rotas
  insertRouteOnClick(event, menuItems) {
    event.preventDefault();

    // Remove a classe "active" dos itens do nav (reset)
    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove("active");
    }

    // Insere na url o href da tag <a>
    window.history.pushState({}, "", event.target.href);
    // Torna o link clicado como .active para estilização
    event.target.classList.add("active");

    this.handleRoute();
  }

  handleRoute() {
    // Pathname pega a url atual
    const { pathname } = window.location;
    // Procura a rota no objeto routes
    const currentRoute = this.routes[pathname] || this.routes[404];
    // Fetch traz o HTML
    fetch(currentRoute)
      .then((data) => data.text())
      .then((data) => (document.getElementById("app").innerHTML = data));
  }
}
