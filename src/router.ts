import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import MovieDetailView from "./views/MovieDetailView.vue";

const routes = [
    { path: '/', component: HomeView },
    { path: '/movie/:id', component: MovieDetailView },
  ]

export const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})