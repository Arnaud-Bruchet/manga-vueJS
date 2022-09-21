import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from '@/views/HomeView.vue'
// import OtherPagesNavbar from '../components/OtherPagesNavbar.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
    {
        path: "/list",
        name: "list",
        component: () => import("../views/MangaList.vue"),
    },
    {
        path: "/manga/:mangaId",
        name: "mangaDetails",
        component: () => import("../views/MangaDetails.vue"),
    },
    {
        path: "/admin",
        name: "AdminSide",
        component: () => import("../views/AdminView.vue"),
    },
    {
        path: "/admin/create",
        name: "AdminNewManga",
        component: () => import("../views/AdminFormManga.vue"),
    },
    {
        path: "/admin/manga/:mangaId",
        name: "AdminEditManga",
        component: () => import("../views/AdminFormManga.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
