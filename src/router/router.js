import { createRouter, createWebHashHistory } from "vue-router";

/*import BienvenidaPage from '../modules/pages/BienvenidaPage'
import JuegoPage from "../modules/pages/JuegoPage";
import PremiosPage from "../modules/pages/PremiosPage";

import PokemonPage from "../modules/pages/PokemonPage";

import NoEncontradaPage from "../modules/pages/NoEncontradaPage";*/

const routes = [
  {
    path: "/",
    component: () => import("../modules/pages/BienvenidaPage"),
  },
  {
    path: "/juego",
    component: () => import("../modules/pages/JuegoPage"),
  },
  {
    path: "/premios",
    component: () => import("../modules/pages/PremiosPage"),
  },
  {
    path: "/pokemon",
    component: () => import("../modules/pages/PokemonPage"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../modules/pages/NoEncontradaPage"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
