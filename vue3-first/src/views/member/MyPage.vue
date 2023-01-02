<template>
  <div class="page">
    <LeftMenu :val="currentView" @getNewView="changeCurrentView" />

    <div>
      {{ page }}
    </div>

    <div class="container col-lg-7 col-sm-12 col-xs-12">
      <component :is="currentView"> </component>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";

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
  props: {
    page: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const currentView = ref("Profile");

    const changeCurrentView = (value) => {
      currentView.value = value;
    };

    currentView.value = props.page;

    return {
      currentView,
      changeCurrentView,
    };
  },
};
</script>

<style scoped>
.page {
  min-height: 1000px;
}
</style>
