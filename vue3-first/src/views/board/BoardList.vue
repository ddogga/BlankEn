<template>
  <section class="py-5">
    <div class="container px-4 px-lg-5 mt-5">
      <DropDown />

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
                >{{ sortValue.label }}</a
              >

              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li v-for="(item, index) in sort_option" :key="index">
                  <a
                    class="dropdown-item"
                    @click="sortState(item.value, item.label)"
                    href="#!"
                    >{{ item.label }}</a
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
              <th colspan="2" style="width: 50%">제목</th>
              <th>문제수</th>
              <th>카테고리</th>
              <th>추천수</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="2">
                <span class="badge bg-success text-white">완료</span>
              </td>
              <td style="border-bottom: none">제목</td>
              <td rowspan="2">
                <button class="btn-primary btn-sm" @click="openPopup">
                  문장목록
                </button>
              </td>
              <td rowspan="2">David</td>
              <td rowspan="2">180</td>
              <td rowspan="2">number</td>
            </tr>

            <tr>
              <td>
                <img
                  src="../../assets/images/snowball.jpg"
                  height="30"
                  width="30"
                  class="rounded-circle"
                />
                <span>아이디</span>
              </td>
            </tr>

            <tr>
              <td rowspan="2">
                <span class="badge bg-secondary text-white">진행중</span>
              </td>
              <td style="border-bottom: none">제목</td>
              <td rowspan="2">버튼</td>
              <td rowspan="2">David</td>
              <td rowspan="2">180</td>
              <td rowspan="2"></td>
            </tr>

            <tr>
              <td>
                <img
                  src="../../assets/images/snowball.jpg"
                  height="30"
                  width="30"
                  class="rounded-circle"
                />
                <span>아이디</span>
              </td>
            </tr>

            <tr>
              <td rowspan="2">
                <span class="badge bg-secondary text-white">진행중</span>
              </td>
              <td style="border-bottom: none">제목</td>
              <td rowspan="2">버튼</td>
              <td rowspan="2">David</td>
              <td rowspan="2">180</td>
              <td rowspan="2"></td>
            </tr>

            <tr>
              <td>아이디</td>
            </tr>

            <tr>
              <td rowspan="2">
                <span class="badge bg-secondary text-white">진행중</span>
              </td>
              <td style="border-bottom: none">제목</td>
              <td rowspan="2">버튼</td>
              <td rowspan="2">David</td>
              <td rowspan="2">180</td>
              <td rowspan="2"></td>
            </tr>

            <tr>
              <td>아이디</td>
            </tr>

            <tr>
              <td rowspan="2">
                <span class="badge bg-secondary text-white">진행중</span>
              </td>
              <td style="border-bottom: none">제목</td>
              <td rowspan="2">버튼</td>
              <td rowspan="2">David</td>
              <td rowspan="2">180</td>
              <td rowspan="2"></td>
            </tr>

            <tr>
              <td>아이디</td>
            </tr>

            <tr>
              <td rowspan="2">
                <span class="badge bg-secondary text-white">진행중</span>
              </td>
              <td style="border-bottom: none">제목</td>
              <td rowspan="2">버튼</td>
              <td rowspan="2">David</td>
              <td rowspan="2">180</td>
              <td rowspan="2"></td>
            </tr>

            <tr>
              <td>아이디</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="popup-view popup-background" :class="{ active: popupView }">
        <div class="popup-window">
          <pop-up class="pop-up" @close-popup="openPopup"></pop-up>
        </div>
      </div>

      <Pagination />
    </div>
  </section>
</template>

<script>
import { ref, watch } from "vue";
import { useStore } from "vuex";

import Pagination from "../../components/board/Pagination.vue";
import DropDown from "../../components/board/SearchingDropDown.vue";
import PopUp from "../../components/board/PopUp.vue";
export default {
  components: {
    Pagination,
    DropDown,
    PopUp,
  },

  setup() {
    const store = useStore();

    // 퀴즈 불러오기

    const list = ref([]);
    const size = 10;
    const listcount = ref(0);
    const startnum = ref(0);
    let currentpage = 1;
    let maxpage = 1;

    const getList = async (page) => {
      try {
        const res = await axios.get(
          `quizs?page=${page}&size=${size}&sort=${sortValue.value.value}`
        );
        console.log("quizList=" + res.data);

        list.value = res.data.quizs;
        listcount.value = res.data.listcount;
        maxpage = res.data.maxpage;
        currentpage = res.data.page;
        startnum.value = listcount.value - (currentpage - 1) * size;
        // const pagelist=ref([]);
        // for(let i=res.data.startpage; i<=res.data.endpage;i++){
        //   pagelist.value.push(i);
        // }
        // const obj = {maxpage, currentpage,pagelist};
        // store.dispatch('store_obj', obj);
      } catch (error) {
        console.log(error);
      }
    };

    // 페이지네이션에서 번호 클릭시 store의 page값이 변경되는 것을 감지
    watch(
      () => store.state.page,
      () => {
        getList(store.state.page);
      }
    );

    // 정렬
    let sort_option = ref([]);
    sort_option.value = [
      { value: "createdDate", label: "최신순" },
      { value: "goodNums", label: "인기순" },
    ];

    const sortValue = ref({ value: "createdDate", label: "최신순" });

    const sortState = (value, label) => {
      sortValue.value.value = value;
      sortValue.value.label = label;
      console.log(sortValue.value);
    };

    // 문장 목록
    const popupView = ref(false);
    const openPopup = () => {
      popupView.value = popupView.value ? false : true;
    };

    return {
      list,
      listcount,
      startnum,
      sort_option,
      sortValue,
      sortState,
      popupView,
      openPopup,
    };
  },
};
</script>

<style scoped>
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
</style>
