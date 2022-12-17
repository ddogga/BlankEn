<template>
  <div>
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
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const selectAll = ref(false);
    const selectedValues = ref([]);

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
</style>
