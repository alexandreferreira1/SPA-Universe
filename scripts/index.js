import { Router } from "./router.js";

const router = new Router();

router.add("/", "./pages/home.html");
router.add("/universe", "./pages/universe.html");
router.add("/exploration", "./pages/exploration.html");
router.add(404, "/pages/404.html");

// Executa sem clique para
router.handleRoute();

// Chama a função ao clicar nos botões voltar/avançar do navegador
window.onpopstate = () => router.handleRoute();

// Links de Navegação do Menu
const menuItems = document.getElementsByClassName("menu");

// Adiciona o evento em todos itens do nav
for (var i = 0; i < menuItems.length; i++) {
  // menuItems[i].classList.remove("active");
  menuItems[i].addEventListener("click", (event) => {
    router.insertRouteOnClick(event);
  });
}


