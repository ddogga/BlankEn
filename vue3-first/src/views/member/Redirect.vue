<template>
  <div></div>
</template>

<script>
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();

    // 컴포넌트 렌더링이 되었을 때,

    // 쿼리스트링으로부터 토큰을 획득
    const token = route.query.token;
    console.log("token", token);

    // 토큰이 존재하는 경우, Vuex Store에 토큰을 저장한다.
    if (token) {
      store.dispatch("set_token", token);
      sessionStorage.setItem("accessToken", token);
      window.alert("로그인하였습니다.");
      router.push({
        name: "Main",
      });
    } else {
      window.alert("로그인에 실패하였습니다.");
      router.push({
        name: "Login",
      });
    }

    return {};
  },
};
</script>
