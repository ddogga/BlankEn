import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import Test from "../views/Test.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/blanken/main",
    },
    {
      path: "/blanken/main",
      name: "Main",
      component: Main,
    },
    {
      path: "/blanken/test",
      name: "Test",
      component: Test,
    },
  ],
});

export default router;
