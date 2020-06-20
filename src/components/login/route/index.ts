/** define */
import { NAME } from "../define";

export default {
  path: NAME,
  name: NAME,
  component: () => import(/* webpackChunkName: "login" */ "../index.vue"),
  meta: { name: NAME },
  redirect: `/auth/${NAME}/home`,
  children: [
    {
      path: "home",
      meta: { name: NAME },
      component: () => import(/* webpackChunkName: "login" */ "../home.vue"),
    },
  ],
};
