import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Gallerij from "../pages/Gallerij.vue";
import Configurator from "../pages/Configurator.vue";
import NotFound from "../pages/NotFound.vue";
import Bestelling from "../pages/Bestelling.vue";
import Login from "../pages/Login.vue";
import DonutDetails from "../pages/DonutDetails.vue";
import Profiel from "../pages/Profiel.vue";
import { LoginState } from "../store/LoginState";

const routes = [
  { path: "/", component: Home },
  { path: "/gallerij", component: Gallerij },
  { path: "/configurator", component: Configurator },
  { path: "/bestelling", component: Bestelling },
  { path: "/login", component: Login },
  { path: "/donut-details/:id", component: DonutDetails },
  { path: "/verander-wachtwoord", component: Profiel },
  { path: "/profiel", component: Profiel },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;