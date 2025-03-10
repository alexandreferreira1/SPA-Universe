export class Router {
  routes = {};

  // Função que recebe as rotas
  add(routeName, page) {
    this.routes[routeName] = page;
  }

  // Links de Navegação do Menu
  menu = document.querySelectorAll(".menu");

  // Cria a função que remove a classe "active" dos itens do nav
  removeActiveMenuItems() {
    for (var i = 0; i < this.menu.length; i++) {
      this.menu[i].classList.remove("active");
    }
  }

  // Funções que lidam com as rotas
  insertRouteOnClick(event) {
    event.preventDefault();

    this.removeActiveMenuItems();
    // Insere na url o href da tag <a>
    window.history.pushState({}, "", event.target.href);
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
