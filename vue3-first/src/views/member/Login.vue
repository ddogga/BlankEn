<template>
  <div>
    <p class="tip">Double click on button in image container</p>
    <div class="cont">
      <div class="form sign-in">
        <h2 class="h2">Welcome back,</h2>
        <form @submit.prevent="loginProcess">
          <label class="label">
            <span>Email</span>
            <input class="input" type="email" v-model="login.email" />
          </label>
          <label class="label">
            <span>Password</span>
            <input class="input" type="password" v-model="login.password" />
          </label>
          <router-link class="nav-link active" aria-current="page" to="/">
            <p class="forgot-pass">Forgot password?</p>
          </router-link>
          <button type="submit" class="submit button">Sign In</button>
          <button type="button" class="fb-btn button">
            Connect with <span>facebook</span>
          </button>
        </form>

        <a
          href="http://localhost:8080/blanken/api/oauth2/authorize/naver?redirect_uri=http://localhost:8080/oauth/redirect"
          class="icon-link"
        >
          <img src="../../assets/images/naver_icon.png" />
        </a>

        <a
          href="http://localhost:8080/blanken/api/oauth2/authorize/kakao?redirect_uri=http://localhost:8080/oauth/redirect"
          class="icon-link"
        >
          <img src="../../assets/images/kakao_icon.png" />
        </a>

        <a
          href="http://localhost:8080/blanken/api/oauth2/authorize/google?redirect_uri=http://localhost:8080/oauth/redirect"
          class="icon-link"
        >
          <img src="../../assets/images/google_icon.png" />
        </a>
      </div>
      <div class="sub-cont">
        <div class="img">
          <div class="img__text m--up">
            <h2 class="h2">New here?</h2>
            <p>Sign up and discover great amount of new opportunities!</p>
          </div>
          <div class="img__text m--in">
            <h2 class="h2">One of us?</h2>
            <p>
              If you already has an account, just sign in. We've missed you!
            </p>
          </div>
          <div class="img__btn" @click="toggle">
            <span class="m--up">Sign Up</span>
            <span class="m--in">Sign In</span>
          </div>
        </div>
        <div class="form sign-up">
          <h2 class="h2">Time to feel like home,</h2>
          <form @submit.prevent="joinProcess">
            <label class="label">
              <span>Name</span>
              <input
                class="input"
                type="text"
                v-model="join.userName"
                required
                maxlength="12"
              />
            </label>
            <label class="label">
              <span>Nickname</span>
              <input
                class="input"
                type="text"
                v-model="join.nickname"
                required
                maxlength="12"
              />
            </label>
            <label class="label">
              <span>Email</span>
              <input class="input" type="email" v-model="join.email" required />
            </label>
            <label class="label">
              <span>Password</span>
              <input
                class="input"
                type="password"
                v-model="join.password"
                required
              />
            </label>

            <button type="submit" class="submit button">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { change } from "@/assets/js/login.js";
import axios from "../../axios/axiossetting";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  emits: ["parent_getSession"],
  setup(props, context) {
    context.emit("parent_getSession", "login");

    const login = ref({
      email: "",
      password: "",
    });

    const join = ref({
      userName: "",
      nickname: "",
      email: "",
      password: "",
    });

    const router = useRouter();

    const toggle = () => {
      change();
    };

    const store = useStore();

    const loginProcess = async () => {
      try {
        const res = await axios.post("api/members/login", login.value);
        console.log("token", res.data);
        if (res.data) {
          store.dispatch("set_token", res.data);
          sessionStorage.setItem("accessToken", res.data);
          window.alert("로그인하였습니다.");
          router.push({
            name: "Main",
          });
        }
      } catch (err) {
        console.log(err);
      }
    };

    const joinProcess = async () => {
      try {
        const res = await axios.post("api/members/new", join.value);
        if (res.data) {
          alert(res.data + "님 회원 가입을 축하합니다.");
          router.push({
            name: "Login",
          });
        } else {
          console.log("회원가입 실패");
        }
      } catch (err) {
        console.log(err);
      }
    };

    return {
      join,
      login,
      loginProcess,
      toggle,
      joinProcess,
    };
  },
};
</script>

<style scoped></style>
