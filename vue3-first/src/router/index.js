import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import BoardList from "../views/board/BoardList.vue";
import Login from "../views/member/Login.vue";
import SetWrite from "../views/board/BoardWrite_Set.vue";
import MyPage from "../views/member/MyPage.vue";
import Play from "../views/board/BoardPlay.vue";
// import Profile from "../components/member/Profile.vue";
// import Password from "../components/member/PasswordMng.vue";
// import MyQuizList from "../components/member/MyQuizList.vue";
// import History from "../components/member/History.vue";
// import FinishList from "../components/member/FinishList.vue";
// import LikeList from "../components/member/LikeList.vue";

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
      path: "/blanken/mypage/:page",
      name: "MyPage",
      component: MyPage,
      props: true,
    },
    {
      path: "/blanken/play",
      name: "Play",
      component: Play,
    },
    // {
    //   path: "/blanken/mypage/profile",
    //   name: "Profile",
    //   component: Profile,
    // },
    // {
    //   path: "/blanken/mypage/password_mng",
    //   name: "Password",
    //   component: Password,
    // },
    // {
    //   path: "/blanken/mypage/my_quiz",
    //   name: "MyQuizList",
    //   component: MyQuizList,
    // },
    // {
    //   path: "/blanken/mypage/history",
    //   name: "History",
    //   component: History,
    // },
    // {
    //   path: "/blanken/mypage/finish_list",
    //   name: "FinishList",
    //   component: FinishList,
    // },
    // {
    //   path: "/blanken/mypage/like_list",
    //   name: "LikeList",
    //   component: LikeList,
    // },
  ],
});

export default router;
