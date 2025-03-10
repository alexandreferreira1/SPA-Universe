// Links de Navegação do Menu
const menu = document.querySelectorAll(".menu");
console.log(menu)

// Rotas da Aplicação
const routes = {
  "/": "./pages/home.html",
  "/universe": "./pages/universe.html",
  "/exploration": "./pages/exploration.html",
  404: "./pages/404.html",
};

// Adiciona o evento em todos os links do menu
for (var i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", (event) => {
    insertRouteOnClick(event);
  });
}

// Remove a classe "active" dos itens do nav
function removeActiveMenuItems() {
  for (var i = 0; i < menu.length; i++) {
    menu[i].classList.remove('active')
  }
}

// Funções que lidam com as rotas
function insertRouteOnClick(event) {
  event.preventDefault();

  removeActiveMenuItems()
  // Insere na url o href da tag <a>
  window.history.pushState({}, "", event.target.href);
  event.target.classList.add("active");

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

// Chama a função ao clicar nos botões voltar/avançar do navegador
window.onpopstate = () => handleRoute()