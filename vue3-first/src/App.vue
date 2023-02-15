<template>
  <div>
    <Nav :parent_id="id" />
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
import { useStore } from "vuex";
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

    const router = useRouter();
    const store = useStore();

    const getSession = async (received_id) => {
      //사용자가 로그인 상태에서 login을 url에 직접칠경우 로그아웃을 진행
      if (received_id == "login") {
        try {
          const res = await axios.post("api/members/logout");
          id.value = "";
          console.log(res.data);
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          //서버 쪽 세션에 저장된 아이디 가져오기
          const res = await axios.get("api/getSession");

          if (res.data.nickname) {
            id.value = res.data.nickname;
          } else {
            id.value = res.data.email;
          }

          console.log("getSession" + id.value);
        } catch (err) {
          console.log(err);
        }
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
