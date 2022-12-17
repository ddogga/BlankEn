<template>
  <section class="py-5">
    <div class="container px-4 px-lg-5 mt-5">
      <!-- 검색 drop-box -->
      <div
        class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
      >
        <div class="dropdown mb-5">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            카테고리
          </button>
          <ul class="dropdown-menu" v-on:click.stop="doThis">
            <li class="dropdown-item">
              <input
                type="checkbox"
                v-model="selectAll"
                value="all"
                @change="all"
                class="category-checkbox"
              />
              <label>모두</label>
            </li>
            <li class="dropdown-item">
              <input
                type="checkbox"
                v-model="selectedValues"
                value="드라마"
                class="category-checkbox"
              />
              <label>드라마</label>
            </li>
            <li class="dropdown-item">
              <input
                type="checkbox"
                v-model="selectedValues"
                value="여행"
                class="category-checkbox"
              />
              <label>여행</label>
            </li>
            <li class="dropdown-item">
              <input
                type="checkbox"
                v-model="selectedValues"
                value="일상회화"
                class="category-checkbox"
              />
              <label>일상회화</label>
            </li>
            <li class="dropdown-item">
              <input
                type="checkbox"
                v-model="selectedValues"
                value="비즈니스"
                class="category-checkbox"
              />
              <label>비즈니스</label>
            </li>
            <li class="dropdown-item">
              <input
                type="checkbox"
                v-model="selectedValues"
                value="오픽/토스"
                class="category-checkbox"
              />
              <label>오픽/토스</label>
            </li>
          </ul>
        </div>
      </div>

      <!-- 검색 태그 -->

      <div
        class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
      >
        <div class="container gx-4 px-lg-5" style="width: 1000px">
          <ul class="tag-list me-auto mb-2 mb-lg-0 ms-lg-4">
            <li
              class="tag-item"
              v-for="(item, index) in selectedValues"
              :key="index"
            >
              <sapn class="badge bg-info text-white tag">
                {{ item }}
                <a
                  v-on:click="deleteTag(index)"
                  style="text-decoration: none"
                  href="#"
                  >x</a
                >
              </sapn>
            </li>
          </ul>
        </div>
      </div>

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

import Pagination from "../../components/Pagination.vue";
export default {
  components: {
    Pagination,
  },

  setup() {
    const selectAll = ref(false);
    const selectedValues = ref([]);
    const sortValue = ref("최신순");

    //카테고리 전체 선택
    const all = () => {
      if (selectAll.value) {
        selectedValues.value = [
          "드라마",
          "여행",
          "일상회화",
          "비즈니스",
          "오픽/토스",
        ];
      } else {
        selectedValues.value = [];
      }
    };

    const sortState = (value) => {
      sortValue.value = value;
    };

    const deleteTag = (index) => {
      selectedValues.value.splice(index, 1);
      if (selectedValues.value.length == 0) {
        console.log("텅");
        selectAll.value = false;
      }
    };

    return {
      selectAll,
      selectedValues,
      all,
      sortValue,
      sortState,
      deleteTag,
    };
  },
};
</script>

<style scoped>
/*검색 태그 */

.tag-list {
  list-style: none;
}
.tag-item {
  float: left;
  margin-right: 20px;
}

.category-checkbox {
  margin-right: 5px;
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
</style>
