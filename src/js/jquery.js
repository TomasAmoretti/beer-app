import HomeScreen from "../screens/HomeScreen.js";
import ProductScreen from "../screens/ProductScreen.js";
import Error404Screen from "../screens/Error404Screen.js";
import { parseRequestUrl } from "./utils.js";

const routes = {
   "/": HomeScreen,
   "/#/:id:brand": ProductScreen
}

const router = async () => {
   const request = parseRequestUrl();
   const parseUrl = (request.resource ? `/${request.resource}` : '/') + (request.id ? '/:id:brand' : '') + (request.verb ? `/${request.verba}` : '');
   const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
   const main = $("#myApp");
   main.html(await screen.render());
}

$(window).on("load", router);
$(window).on("hash", router);
window.onpopstate = router;