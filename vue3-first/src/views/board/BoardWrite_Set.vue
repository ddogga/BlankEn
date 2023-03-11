<template>
  <section class="get-in-touch">
    <h1 class="title">Make QuizSet</h1>

    <form class="contact-form row" @submit.prevent="addQuizSet">
      <label for="profile">
        <span v-if="titleImgPreview == ''">
          <img
            class="profile_img"
            src="../../assets/images/upload_image.jpg"
            alt="profile"
          />
        </span>
        <span v-if="titleImgPreview != ''">
          <img class="profile_img" :src="titleImgPreview" />
        </span>

        <input
          type="file"
          style="display: none"
          id="profile"
          @change="onFileSelected"
          accept="image/*"
        />
      </label>

      <div class="form-field col-lg-12">
        <input
          id="message"
          v-model="quizSet.title"
          class="input-text js-input"
          type="text"
          required
        />
        <label class="label" for="message">제목</label>
      </div>

      <div class="form-field col-lg-12">
        <input
          id="message"
          v-model="quizSet.contents"
          class="input-text js-input"
          type="text"
          required
        />
        <label class="label" for="message">설명</label>
      </div>

      <!-- 카테고리 선택 -->
      <div class="form-field col-lg-4">
        <span>카테고리 선택</span>
      </div>
      <div class="form-field col-lg-8">
        <div class="nav-item dropdown">
          <a
            class="dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            >{{ selectedValue }}</a
          >
          <ul class="dropdown-menu">
            <li v-for="(category, index) in categorys" :key="index">
              <a
                class="dropdown-item"
                @click="selectState(category)"
                href="#!"
                >{{ category }}</a
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- card - list-->

      <div class="col mb-5" id="card-row">
        <div class="container card" v-for="(card, index) in cards" :key="index">
          <nav class="navbar navbar-expand-lg">
            <div class="container gx-4 px-lg-5"></div>
            <div>
              <img
                class="btn-hover close-image"
                src="../../assets/images/x_button.png"
                alt=""
                @click.prevent="deleteCard(index)"
              />
            </div>
          </nav>

          <div class="card-img-top">
            <label for="card_img">
              <span v-if="card.quizImgName == ''">
                <img
                  class="card_img"
                  src="../../assets/images/upload_image.jpg"
                  alt="profile"
                />
              </span>
              <span v-if="card.quizImgName != ''">
                <img class="card_img" :src="card.quizImgName" />
              </span>

              <input
                type="file"
                style="display: none"
                id="card_img"
                @change="onFileChanged(index, $event)"
                accept="image/*"
              />
            </label>
          </div>
          <!-- input -->
          <div class="card-body">
            <div class="english-input">
              <div
                class="card-input form-field"
                @mouseover="show"
                @mouseout="hide"
              >
                <input
                  v-model="card.firstSentence"
                  class="input-text js-input"
                  placeholder="first "
                  required
                />
                <span class="hidden">
                  <img
                    class="btn-hidden btn-hover"
                    src="../../assets/images/x_white.png"
                    alt=""
                    @click.prevent="deleteInput"
                  />
                </span>
              </div>
              <span class="hidden">
                <img
                  class="btn-hover btn-hidden"
                  src="../../assets/images/add_icon.png"
                  alt=""
                  @click.prevent="addInput"
                />
              </span>

              <div class="card-input form-field">
                <input
                  v-model="card.blank"
                  class="input-text js-input"
                  placeholder="blank"
                  required
                />
              </div>

              <div
                class="card-input form-field"
                @mouseover="show"
                @mouseout="hide"
              >
                <input
                  v-model="card.lastSentence"
                  class="input-text js-input"
                  placeholder="last"
                  required
                />
                <span class="hidden">
                  <img
                    class="btn-hidden btn-hover"
                    src="../../assets/images/x_white.png"
                    alt=""
                    @click.prevent="deleteInput"
                  />
                </span>
              </div>
              <span class="hidden">
                <img
                  class="btn-hover btn-hidden"
                  src="../../assets/images/add_icon.png"
                  alt=""
                  @click.prevent="addInput"
                />
              </span>
            </div>
            <div class="korean-input">
              <div class="card-input form-field">
                <input
                  v-model="card.expression"
                  class="input-text js-input"
                  placeholder="한국어 의미"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="form-field col-lg-12">
        <button class="fab" @click.prevent="addNewCard">+</button>
      </div>

      <div class="form-field col-lg-12">
        <input class="submit-btn" type="submit" value="Submit" />
      </div>
    </form>
  </section>
</template>

<script>
import axios from "../../axios/axiossetting";
import { ref } from "vue";

export default {
  props: {
    parent_email: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    const selectedValue = ref("드라마");

    const selectState = (value) => {
      selectedValue.value = value;
    };

    const categorys = [
      "드라마",
      "여행",
      "일상회화",
      "비즈니스",
      "오픽,토스",
      "기타",
    ];

    let titleImgPreview = ref("");
    const quizSet = ref({
      titleImg: "",
      title: "",
      contents: "",
    });

    let cards = ref([
      {
        quizImgName: "",
        quizImg: "",
        firstSentence: "",
        blank: "",
        lastSentence: "",
        meanexpressioning: "",
        num: "",
      },
    ]);

    const deleteCard = (index) => {
      if (cards.value.length <= 1) {
        alert("최소 하나의 카드는 있어야 합니다.");
        return;
      }
      cards.value.splice(index, 1);
    };

    const addNewCard = (e) => {
      cards.value.push({
        quizImgName: "",
        quizImg: "",
        firstSentence: "",
        blank: "",
        lastSentence: "",
        meanexpressioning: "",
        num: "",
      });
    };

    //퀴즈세트 타이틀 이미지 미리보기
    const onFileSelected = (event) => {
      var input = event.target;
      console.log(input.files);
      if (input.files && input.files[0]) {
        quizSet.value.titleImg = input.files[0];
        var reader = new FileReader();
        reader.onload = (e) => {
          titleImgPreview.value = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    };

    //퀴즈 카드의 이미지 미리보기
    const onFileChanged = (index, event) => {
      var input = event.target;
      console.log(input.files[0]);
      if (input.files && input.files[0]) {
        cards.value[index].quizImg = input.files[0];
        var reader = new FileReader();
        reader.onload = (e) => {
          cards.value[index].quizImgName = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    };

    const deleteInput = (e) => {
      e.currentTarget.parentElement.parentElement.classList.add("hidden");
      e.currentTarget.parentElement.parentElement.classList.remove("active");
      e.currentTarget.parentElement.parentElement.nextElementSibling.classList.add(
        "active"
      );
      e.currentTarget.parentElement.parentElement.nextElementSibling.classList.remove(
        "hidden"
      );
    };

    const addInput = (e) => {
      e.currentTarget.parentElement.classList.add("hidden");
      e.currentTarget.parentElement.classList.remove("active");
      e.currentTarget.parentElement.previousElementSibling.classList.add(
        "active"
      );
      e.currentTarget.parentElement.previousElementSibling.classList.remove(
        "hidden"
      );
    };

    const show = (e) => {
      e.currentTarget.children[1].className = "active";
    };

    const hide = (e) => {
      e.currentTarget.children[1].className = "hidden";
    };

    const addQuizSet = async () => {
      console.log(props.parent_email);
      const form = makeForm();

      try {
        const res = await axios.post("api/quiz/new_quiz_set", form, {
          headers: { "Context-Type": "multipart/form-data;charset=UTF-8" },
        });
        console.log(res.data);
      } catch (err) {
        console.log("오류");
        console.log(err);
      }
    };

    const makeForm = () => {
      let form = new FormData();
      form.append("titleImg", quizSet.value.titleImg);
      form.append("title", quizSet.value.title);
      form.append("contents", quizSet.value.contents);
      form.append("email", props.parent_email);
      form.append("category", selectedValue.value);

      for (let i = 0; i < cards.value.length; i++) {
        console.log(cards.value[i].quizImg);
        form.append("quizList[" + i + "].quizImg", cards.value[i].quizImg);
        form.append(
          "quizList[" + i + "].firstSentence",
          cards.value[i].firstSentence
        );
        form.append("quizList[" + i + "].blank", cards.value[i].blank);
        form.append(
          "quizList[" + i + "].lastSentence",
          cards.value[i].lastSentence
        );
        form.append(
          "quizList[" + i + "].expression",
          cards.value[i].expression
        );
        form.append("quizList[" + i + "].num", i);
      }

      return form;
    };

    return {
      titleImgPreview,
      cards,
      quizSet,
      selectedValue,
      categorys,
      show,
      hide,
      onFileSelected,
      onFileChanged,
      deleteInput,
      addInput,
      deleteCard,
      addNewCard,
      addQuizSet,
      selectState,
    };
  },
};
</script>

<style scoped>
@import "../../assets/css/write.css";

.active {
  display: "";
}

.hidden {
  display: none !important;
}

.english-input {
  display: flex;
}

.card {
  margin-top: 5%;
}

.card-input {
  flex: 1;
}

.close-image {
  width: 30px;
  height: 30px;
  margin-top: 15px;
}

.add-image {
  width: 30px;
  height: 30px;
  margin-top: 15px;
}

.profile_img {
  width: 300px;
  height: 300px;
  cursor: pointer;
}

.card_img {
  width: 200px;
  height: 200px;
  cursor: pointer;
}

.btn-hidden {
  width: 30px;
  height: 30px;
  margin-top: 15px;
}

.btn-hover:hover {
  background: #e0e5ec;
  color: #e0e5ec;
  transform: scale(1.05);
}

.fab {
  width: 70px;
  height: 70px;
  background-color: #515676;
  border-color: white;
  border-radius: 50%;
  box-shadow: 0 6px 10px 0 #666;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  font-size: 50px;
  color: white;
  text-align: center;
  line-height: 70px;
}

.fab:hover {
  box-shadow: 0 6px 14px 0 #666;
  transform: scale(1.05);
}
</style>
