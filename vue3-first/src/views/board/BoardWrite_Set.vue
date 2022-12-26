<template>
  <section class="get-in-touch">
    <h1 class="title">Make QuizSet</h1>

    <form class="contact-form row">
      <label for="profile">
        <span v-if="preview == ''">
          <img
            class="profile_img"
            src="../../assets/images/upload_image.jpg"
            alt="profile"
          />
        </span>
        <span v-if="preview != ''">
          <img class="profile_img" :src="preview" />
        </span>

        <input
          type="file"
          style="display: none"
          id="profile"
          @change="onFileSelected"
          accept="image/*"
        />
      </label>

      <div class="form-field col-lg-6">
        <input id="name" class="input-text js-input" type="text" required />
        <label class="label" for="name">Name</label>
      </div>
      <div class="form-field col-lg-6">
        <input id="email" class="input-text js-input" type="email" required />
        <label class="label" for="email">E-mail</label>
      </div>

      <div class="form-field col-lg-12">
        <input id="message" class="input-text js-input" type="text" required />
        <label class="label" for="message">제목</label>
      </div>

      <div class="form-field col-lg-12">
        <input id="message" class="input-text js-input" type="text" required />
        <label class="label" for="message">설명</label>
      </div>

      <DropDown />

      <!-- card - list-->
      <div class="col mb-5" id="card-row">
        <div class="container card" v-for="card in cards" :key="card">
          <nav class="navbar navbar-expand-lg">
            <div class="container gx-4 px-lg-5"></div>
            <div>
              <img
                class="btn-hover close-image"
                src="../../assets/images/x_button.png"
                alt=""
              />
            </div>
          </nav>

          <div class="card-img-top">
            <div></div>
          </div>
          <!-- input -->
          <div class="card-body">
            <div
              class="card-input form-field"
              @mouseover="show"
              @mouseout="hide"
            >
              <input
                v-model="card.first"
                class="input-text js-input"
                placeholder="first "
                required
              />
              <span class="hidden">
                <img
                  class="btn-hidden btn-hover"
                  src="../../assets/images/x_white.png"
                  alt=""
                  @click="deleteInput"
                />
              </span>
            </div>
            <span class="hidden">
              <img
                class="btn-hover btn-hidden"
                src="../../assets/images/add_icon.png"
                alt=""
                @click="addInput"
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
                v-model="card.last"
                class="input-text js-input"
                placeholder="last"
                required
              />
              <span class="hidden">
                <img
                  class="btn-hover, btn-hidden"
                  src="../../assets/images/x_white.png"
                  alt=""
                  @click="deleteInput"
                />
              </span>
            </div>
            <span class="hidden">
              <img
                class="btn-hover btn-hidden"
                src="../../assets/images/add_icon.png"
                alt=""
                @click="addInput"
              />
            </span>
          </div>
        </div>
      </div>

      <div class="form-field col-lg-12">
        <input class="submit-btn" type="submit" value="Submit" />
      </div>
    </form>
  </section>
</template>

<script>
import { ref } from "vue";

import DropDown from "../../components/board/SearchingDropDown.vue";
export default {
  components: {
    DropDown,
  },
  setup() {
    const preview = ref("");

    let cards = [
      {
        first: "",
        black: "",
        last: "",
      },
      {
        first: "nala",
        black: "lala",
        last: "re",
      },
    ];

    const onFileSelected = (event) => {
      var input = event.target;
      console.log(input.files);
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          preview.value = e.target.result;
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

    return {
      preview,
      cards,
      show,
      hide,
      onFileSelected,
      deleteInput,
      addInput,
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

.card-body {
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
}

.btn-hidden {
  width: 30px;
  height: 30px;
  margin-top: 15px;
}

.btn-hover:hover {
  background: #e0e5ec;
  color: #e0e5ec;
}
</style>
