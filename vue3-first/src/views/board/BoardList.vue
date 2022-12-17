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
                >{{ sortValue }}</a
              >
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a
                    class="dropdown-item"
                    v-on:click="sortState('추천순')"
                    href="#!"
                    >추천순</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    v-on:click="sortState('최신순')"
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
              <th colspan="2" style="width: 50%">제목</th>
              <th>문제수</th>
              <th>카테고리</th>
              <th>추천수</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="2">
                <sapn class="badge bg-success text-white">완료</sapn>
              </td>
              <td style="border-bottom: none">제목</td>
              <td rowspan="2">
                <button class="btn-primary btn-sm">단어목록</button>
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
                <sapn class="badge bg-secondary text-white">진행중</sapn>
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
                <sapn class="badge bg-secondary text-white">진행중</sapn>
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
                <sapn class="badge bg-secondary text-white">진행중</sapn>
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
                <sapn class="badge bg-secondary text-white">진행중</sapn>
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
                <sapn class="badge bg-secondary text-white">진행중</sapn>
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

      <Pagination />
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

import Pagination from "../../components/board/Pagination.vue";
import DropDown from "../../components/board/SearchingDropDown.vue";
export default {
  components: {
    Pagination,
    DropDown,
  },

  setup() {},
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
</style>
