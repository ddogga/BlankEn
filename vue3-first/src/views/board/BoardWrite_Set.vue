<template>
  <section class="get-in-touch">
    <h1 class="title">Make QuizSet</h1>

    <form class="contact-form row">
      <label for="profile">
        <span v-if="preview == ''">
          <img
            id="profile_img"
            src="../../assets/images/upload_image.jpg"
            alt="profile"
          />
        </span>
        <span v-if="preview != ''">
          <img :src="preview" />
        </span>

        <input
          type="file"
          style="display: none"
          id="profile"
          @change="onFileSelected"
        />
        <!-- <v-file-input v-model="file" @change="previewFile(file)" name="profile" /> -->
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

      <div class="col mb-5">
        <div class="container card">
          <nav class="navbar navbar-expand-lg">
            <div class="container gx-4 px-lg-5"></div>
            <div>
              <img
                class="close-image"
                src="../../assets/images/x_button.png"
                alt=""
                @click="closePopup"
              />
            </div>
          </nav>

          <div class="card-img-top">
            <div></div>
          </div>
          <!-- input -->
          <div card-body>
            <div
              class="card-input form-field col-lg-4"
              @mouseover="show"
              @mouseout="hide"
            >
              <input
                class="input-text js-input"
                placeholder="first "
                required
              />

              <img
                class="hidden"
                src="../../assets/images/x_white.png"
                alt=""
              />
            </div>

            <div class="card-input form-field col-lg-4">
              <input class="input-text js-input" placeholder="blank" required />
            </div>

            <div
              class="card-input form-field col-lg-4"
              @mouseover="show"
              @mouseout="hide"
            >
              <input class="input-text js-input" placeholder="last" required />

              <img
                class="hidden"
                src="../../assets/images/x_white.png"
                alt=""
              />
            </div>
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

    const show = (e) => {
      e.currentTarget.children[1].className = "active";
    };

    const hide = (e) => {
      e.currentTarget.children[1].className = "hidden";
    };

    return {
      preview,
      show,
      hide,
      onFileSelected,
    };
  },
};
</script>

<style scoped>
@import "../../assets/css/write.css";

.active {
  margin-top: 5px;
  width: 30px;
}

.hidden {
  display: none;
}

.card {
  margin-top: 5%;
}

.card-input {
  display: inline-block;
}

.close-image {
  width: 30px;
  height: 30px;
  margin-top: 15px;
}

img {
  width: 300px;
}
</style>
