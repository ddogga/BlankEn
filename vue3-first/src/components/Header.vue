<template>
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container px-4 px-lg-5">
      <router-link class="navbar-brand" to="/">BlankEN</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              to="/blanken/boardlist"
            >
              퀴즈 풀기
            </router-link>
          </li>
        </ul>
        <div class="d-flex" v-if="parent_id">
          <router-link class="nav-link active" aria-current="page" to="/">
            <button @click="logout" class="btn btn-outline-dark" type="submit">
              로그아웃
            </button>
          </router-link>
        </div>
        <div class="d-flex" v-if="!parent_id">
          <router-link
            class="nav-link active"
            aria-current="page"
            to="/blanken/login"
          >
            <button class="btn btn-outline-dark" type="submit">로그인</button>
          </router-link>
        </div>

        <div v-if="parent_id">
          <router-link
            aria-current="page"
            :to="{ name: 'MyPage', params: { page: 'profile' } }"
          >
            <img
              src="../assets/images/snowball.jpg"
              height="30"
              width="30"
              class="rounded-circle"
            />
          </router-link>
        </div>
        <div v-if="parent_id" class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            id="navbarDropdown"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            >ID</a
          >
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li @click="clickNav('Profile')">
              <a class="dropdown-item">프로필</a>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li @click="clickNav('Password')">
              <a class="dropdown-item">비밀번호 변경</a>
            </li>
            <li @click="clickNav('MyQuizList')">
              <a class="dropdown-item">보관함</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  props: {
    parent_id: {
      type: String,
      required: true,
    },
  },
  setup() {
    const router = useRouter();
    const clickNav = (nav) => {
      router.push({ name: "MyPage", params: { page: nav } });
    };

    const logout = async () => {
      try {
        const res = await axios.post("api/members/logout");

        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    return {
      clickNav,
      logout,
    };
  },
};
</script>
