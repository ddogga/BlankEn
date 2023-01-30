<template>
  <div>
    <Nav />
    <div class="container">
      <router-view @parent_getSession="getSession" :parent_id="id" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Main from "./views/Main.vue";

import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "./axios/axiossetting";

export default {
  name: "App",
  components: {
    Nav,
    Main,
    Footer,
  },
  setup() {
    const id = ref("");

    //페이지 이동하기 위해 useRouter()를 사용합니다.
    const router = useRouter();

    // member_login.vue에서 context.emit("parent_getSession","");로 보냅니다.
    // /vue/boards 상태에서 /vue/login으로 직접 주소를 입력한 경우 내부적으로 로그아웃이 되도록 처리합니다.
    const getSession = async (received_id) => {
      try {
        console.log(received_id);
        const res = await axios.get("api/hello");
        console.log(res.data);

        router.push({
          name: "Main",
        });
      } catch (err) {
        console.log(err);
      }
    };

    return {
      id,
      getSession,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
