<template>
  <div>
    <LeftMenu />

    <div class="test"></div>
  </div>
</template>

<script>
import LeftMenu from "../../components/member/LeftMenu.vue";
export default {
  components: {
    LeftMenu,
  },
  setup() {},
};
</script>

<style scoped>
.test {
  height: 2000px;
}
</style>
