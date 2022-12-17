<template>
  <div
    class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
  >
    <div class="pagination:container" style="margin-top: 50px">
      <div class="pagination:number arrow">
        <svg width="18" height="18">
          <use xlink:href="#left" />
        </svg>
      </div>

      <div class="pagination:number">1</div>
      <div class="pagination:number">2</div>

      <div class="pagination:number pagination:active">3</div>

      <div class="pagination:number">4</div>

      <div class="pagination:number">540</div>

      <div class="pagination:number arrow">
        <svg width="18" height="18">
          <use xlink:href="#right" />
        </svg>
      </div>
    </div>

    <svg class="hide">
      <symbol
        id="left"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        ></path>
      </symbol>
      <symbol
        id="right"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        ></path>
      </symbol>
    </svg>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
@import "../assets/css/pagination.scss";
</style>
