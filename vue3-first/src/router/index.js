import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import BoardList from "../views/board/BoardList.vue";

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
      path: "/blanken/boardlist",
      name: "BoardList",
      component: BoardList,
    },
  ],
});

export default router;
