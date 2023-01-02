<template>
  <div>
    <!-- Sidebar -->
    <nav id="sidebarMenu" class="d-lg-block sidebar collapse">
      <div>
        <div
          style="border: 2px black solid"
          class="list-group list-group-flush mx-3 mt-4"
        >
          <!-- Collapse 1 -->
          <router-link
            class="list-group-item list-group-item-action py-2 ripple"
            :to="{ name: 'MyPage', params: { page: 'profile' } }"
            @click="openPage('Profile', $event)"
            ><span>프로필</span>
          </router-link>
          <!-- Collapse 2 -->
          <a
            class="list-group-item list-group-item-action py-2 ripple"
            href="#"
            @click="openPage('Password', $event)"
            ><span>비밀 번호 변경</span>
          </a>
          <!-- Collapse 3 -->

          <!-- Collapsed content -->
          <div class="list-group-item accordion-item">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              보관함
            </button>

            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <ul class="collapse show list-group list-group-flush">
                  <li class="list-group-item py-1">
                    <a
                      href="#"
                      class="text-reset"
                      @click="openPage('MyQuizList', $event)"
                      >내 퀴즈 목록</a
                    >
                  </li>
                  <li class="list-group-item py-1">
                    <a
                      href="#"
                      class="text-reset"
                      @click="openPage('History', $event)"
                      >히스토리</a
                    >
                  </li>
                  <li class="list-group-item py-1">
                    <a
                      href="#"
                      class="text-reset"
                      @click="openPage('FinishList', $event)"
                      >완료한 퀴즈</a
                    >
                  </li>
                  <li class="list-group-item py-1">
                    <a
                      href="#"
                      class="text-reset"
                      @click="openPage('LikeList', $event)"
                      >좋아요 목록</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Collapse 3 -->
        </div>
      </div>
    </nav>
    <!-- Sidebar -->

    <!--Main layout-->
    <main style="margin-top: 58px">
      <div class="container pt-4"></div>
    </main>
    <!--Main layout-->
  </div>
</template>

<script>
export default {
  props: {
    //문자열로 필수
    val: {
      type: String,
      required: true,
    },
  },
  emits: ["getNewView"],
  setup(props, context) {
    console.log(`props.val = ${props.val}`);

    const openPage = (pageInfo, e) => {
      context.emit("getNewView", pageInfo);
    };

    return {
      openPage,
    };
  },
};
</script>

<style scoped>
a {
  text-decoration-line: none;
}

/* Sidebar */
.sidebar {
  position: fixed;
  border-radius: 5px;
  /* background-color: salmon; */
  margin-top: 58px; /* Height of navbar */
  width: 240px;
}

.active {
  color: rgb(178, 62, 245);
  font-weight: bold;
}

.sidebar-sticky {
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}
</style>
