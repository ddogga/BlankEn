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
          <a
            class="list-group-item list-group-item-action py-2 ripple"
            href="#collapseExample1"
            ><span>프로필</span>
          </a>
          <!-- Collapse 2 -->
          <a
            class="list-group-item list-group-item-action py-2 ripple"
            href="#collapseExample1"
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
                    <a href="" class="text-reset">내 퀴즈 목록</a>
                  </li>
                  <li class="list-group-item py-1">
                    <a href="" class="text-reset">히스토리</a>
                  </li>
                  <li class="list-group-item py-1">
                    <a href="" class="text-reset">완료한 퀴즈</a>
                  </li>
                  <li class="list-group-item py-1">
                    <a href="" class="text-reset">좋아요 목록</a>
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
  setup() {},
};
</script>

<style scoped>
a {
  text-decoration-line: none;
}

/* Sidebar */
.sidebar {
  position: fixed;
  /* background-color: salmon; */
  margin-top: 58px; /* Height of navbar */
  width: 240px;
}

.sidebar .active {
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}

.sidebar-sticky {
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}
</style>
