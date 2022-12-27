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
export default {
  components: {
    LeftMenu,
    Profile,
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
