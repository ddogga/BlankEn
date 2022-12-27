<template>
  <div class="page">
    <LeftMenu />

    <div class="container">
      <component :is="currentView"> </component>
    </div>
  </div>
</template>

<script>
import LeftMenu from "../../components/member/LeftMenu.vue";
import Profile from "../../components/member/Profile.vue";
import Password from "../../components/member/PasswordMng.vue";
import MyQuizList from "../../components/member/MyQuizList.vue";
import History from "../../components/member/History.vue";
import FinishList from "../../components/member/FinishList.vue";
import LikeList from "../../components/member/LikeList.vue";

export default {
  components: {
    LeftMenu,
    Profile,
    Password,
    MyQuizList,
    History,
    FinishList,
    LikeList,
  },
  setup() {
    const currentView = "Profile";

    return {
      currentView,
    };
  },
};
</script>

<style scoped>
.page {
  min-height: 1000px;
}
</style>
