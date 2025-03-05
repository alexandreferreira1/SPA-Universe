// Links de Navegação do Menu
const menu = document.querySelectorAll(".menu");

// Rotas da Aplicação
const routes = {
  "/": "./pages/home.html",
  "/universe": "./pages/universe.html",
  "/exploration": "./pages/exploration.html",
  404: "./pages/404.html",
};

// Adiciona o evento em todos os links do menu
for (var i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", (event) => insertRouteOnClick(event));
}

// Funções que lidam com as rotas
function insertRouteOnClick(event) {
  event.preventDefault();
  // Insere na url o href da tag <a>
    window.history.pushState({}, "", event.target.href);
    
  handleRoute();
}

function handleRoute() {
  // Pathname pega a url atual
  const { pathname } = window.location;
  // Procura a rota no objeto routes
  const currentRoute = routes[pathname] || routes[404];
  // Fetch traz o HTML
  fetch(currentRoute)
    .then((data) => data.text())
    .then((data) => (document.getElementById("app").innerHTML = data));
}

handleRoute();
