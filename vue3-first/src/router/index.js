import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import BoardList from "../views/board/BoardList.vue";
import Login from "../views/member/Login.vue";
import SetWrite from "../views/board/BoardWrite_Set.vue";
import MyPage from "../views/member/MyPage.vue";
import LeftMenu from "../components/member/LeftMenu.vue";

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
    {
      path: "/blanken/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/blanken/set_write",
      name: "SetWrite",
      component: SetWrite,
    },
    {
      path: "/blanken/mypage",
      name: "MyPage",
      component: MyPage,
    },
  ],
});

export default router;
