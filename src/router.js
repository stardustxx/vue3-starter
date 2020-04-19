import { createRouter, createWebHistory } from "vue-router";
import Page1 from "./pages/Page1.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "page1",
      component: Page1,
    },
    {
      path: "/page2",
      name: "page2",
      component: () => import(/* webpackChunkName: "Page2" */ "./pages/Page2.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log({to, from});
  next();
});

export default router;