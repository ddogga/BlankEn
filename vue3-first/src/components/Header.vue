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
        <form class="d-flex">
          <router-link
            class="nav-link active"
            aria-current="page"
            to="/blanken/login"
          >
            <button class="btn btn-outline-dark" type="submit">로그인</button>
          </router-link>
        </form>
        <div>
          <img
            src="../assets/images/snowball.jpg"
            height="30"
            width="30"
            class="rounded-circle"
          />
        </div>
        <div class="nav-item dropdown">
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
            <li>
              <router-link class="dropdown-item" to="/blanken/login"
                >프로필</router-link
              >
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <router-link class="dropdown-item" to="/blanken/login"
                >비밀번호 변경</router-link
              >
            </li>
            <li>
              <router-link class="dropdown-item" to="/blanken/login"
                >보관함</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {},
};
</script>
