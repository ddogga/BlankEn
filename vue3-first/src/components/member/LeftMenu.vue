<template>
  <div>
    <!--Main Navigation-->
    <header>
      <!-- Sidebar -->
      <nav id="sidebarMenu" class="d-lg-block sidebar collapse bg-white">
        <div>
          <div class="list-group list-group-flush mx-3 mt-4">
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
            <a
              class="list-group-item list-group-item-action py-2 ripple"
              href="#collapseExample1"
              ><span>보관함</span>
            </a>
            <!-- Collapsed content -->
            <ul class="collapse show list-group list-group-flush">
              <li class="list-group-item py-1">
                <a href="" class="text-reset">Link</a>
              </li>
              <li class="list-group-item py-1">
                <a href="" class="text-reset">Link</a>
              </li>
              <li class="list-group-item py-1">
                <a href="" class="text-reset">Link</a>
              </li>
              <li class="list-group-item py-1">
                <a href="" class="text-reset">Link</a>
              </li>
            </ul>
            <!-- Collapse 3 -->
          </div>
        </div>
      </nav>
      <!-- Sidebar -->
    </header>
    <!--Main Navigation-->

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
/* Sidebar */
.sidebar {
  position: fixed;
  padding: 58px 0 0; /* Height of navbar */
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 5%);
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
