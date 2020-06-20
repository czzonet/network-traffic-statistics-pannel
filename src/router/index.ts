/** vue vue-router */
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
/** layout */
import BarLayout from "../views/layout/index.vue";
import AuthLayout from "../views/layout/auth/index.vue";

/** components */
import HelloWorld from "../components/helloworld/route/index";
import Template from "../components/template/route/index";
import Login from "../components/login/route/index";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "/",
    redirect: "/main",
  },
  {
    path: "/auth",
    name: "/auth",
    component: AuthLayout,
    redirect: "/auth/login",
    children: [Login],
  },
  {
    path: "/main",
    component: BarLayout,
    redirect: "/main/helloworld",
    children: [HelloWorld, Template],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
