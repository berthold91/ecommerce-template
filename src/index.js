import Error404Page from "./pages/Error404Page/Error404Page.js";
import HomePage from "./pages/HomePage/HomePage.js";
import ProductPage from "./pages/ProductPage/ProductPage.js";
import { parseRequestUrl } from "./utils.js";

const routes = {
    "/": HomePage,
    "/#/products/:id": ProductPage
};
const router = () => {
    const request = parseRequestUrl();
    const parseUrl = ( request.controller ? `/${ request.controller }` : '/' ) +
                     ( request.id ? `/${request.id}` : '' ) +
                     ( request.params ? `/${ request.params }` : '' );

    const pages = routes[parseUrl] ? routes[parseUrl] : Error404Page;
    const main = document.getElementById('main');
    main.innerHTML = pages.render();
};

window.addEventListener("load", router);
window.addEventListener("hashchange", router);