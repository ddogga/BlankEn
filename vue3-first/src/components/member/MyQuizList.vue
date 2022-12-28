<template>
  <div class="get-in-touch">
    <h1 id="title">내 퀴즈 목록</h1>
    <div class="container px-4 px-lg-5 mt-5">
      <nav class="navbar navbar-expand-lg">
        <div class="container gx-4 px-lg-5" style="width: 1000px">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              문제수 : <span>30</span>
            </div>
            <div class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >{{ sortValue }}</a
              >
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a
                    class="dropdown-item"
                    @click="sortState('추천순')"
                    href="#!"
                    >추천순</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    @click="sortState('최신순')"
                    href="#!"
                    >최신순</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <!-- 검색 리스트 -->
      <div
        class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
      >
        <table>
          <thead>
            <tr>
              <th>상태</th>
              <th colspan="2" style="width: 40%">제목</th>
              <th>문제수</th>
              <th>카테고리</th>
              <th>수정하기</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span class="badge bg-success text-white">완료</span>
              </td>
              <td>제목</td>
              <td>
                <button class="btn-primary btn-sm" @click="openPopup">
                  문장목록
                </button>
              </td>
              <td>David</td>
              <td>180</td>
              <td>
                <button class="update">Update</button>
                <button class="delete">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="popup-view popup-background" :class="{ active: popupView }">
        <div class="popup-window">
          <pop-up class="pop-up" @close-popup="openPopup"></pop-up>
        </div>
      </div>

      <div class="container">
        <Pagination />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import Pagination from "../../components/board/Pagination.vue";
import PopUp from "../../components/board/PopUp.vue";
export default {
  components: {
    Pagination,
    PopUp,
  },

  setup() {
    const sortValue = ref("최신순");
    const popupView = ref(false);

    const sortState = (value) => {
      sortValue.value = value;
    };

    const openPopup = () => {
      popupView.value = popupView.value ? false : true;
    };

    return {
      sortValue,
      sortState,
      popupView,
      openPopup,
    };
  },
};
</script>

<style scoped>
#title {
  text-align: left;
  margin-bottom: 50px;
}

/*table css */
table {
  width: 1000px;
  text-align: center;
  border: 1px solid rgb(255, 255, 255);
  border-spacing: 1px;
  font-family: "Cairo", sans-serif;
  margin: auto;
}

caption {
  font-weight: bold;
}

table td {
  padding: 10px;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(197, 197, 197);
}

table th {
  background-color: #333;
  color: rgb(255, 255, 255);
  padding: 10px;
}

/* POPUP */

.popup-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
}

.popup-window {
  position: relative;
  width: 100%;
  height: 100%;
}

.pop-up {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);

  /* 임시 지정 */
  width: 500px;
  height: 500px;

  /* 초기에 약간 아래에 배치 */
  transform: translate(-50%, -40%);
}

.popup-view {
  opacity: 0;
  display: none;
  visibility: hidden;
}
.active {
  opacity: 1;
  display: block;
  visibility: visible;
}

.update,
.delete {
  border: none;
  padding: 5px 10px;
  color: #fff;
  font-weight: bold;
}

.update {
  border-top-left-radius: 10px 40px;
  border-bottom-left-radius: 40px 10px;
  background-color: #6ad0ff;
}

.delete {
  border-top-right-radius: 40px 10px;
  border-bottom-right-radius: 10px 40px;
  background-color: hsl(340, 76%, 64%);
}
</style>
