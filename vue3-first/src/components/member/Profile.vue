<template>
  <div class="get-in-touch">
    <h1 id="title">프로필</h1>

    <div class="form-section">
      <form class="contact-form row">
        <div class="form-field col-lg-6">
          <div class="form-header-item" style="float: left">
            <p>프로필 이미지</p>
            <label for="profile">
              <span v-if="preview == ''">
                <img
                  class="profile_img"
                  src="../../assets/images/noprofile.jpg"
                  alt="profile"
                />
              </span>
              <span v-if="preview != ''">
                <img class="profile_img" :src="preview" />
              </span>

              <input
                type="file"
                id="profile"
                style="display: none"
                @change="onFileSelected"
                accept="image/*"
              />
            </label>
          </div>
        </div>

        <div class="form-field col-lg-6">
          <div class="finish_count" style="float: right">
            <b>완료한 퀴즈 세트 개수</b>
            <p>10개</p>
          </div>
        </div>

        <div class="form-field col-lg-12">
          <input id="nickname" class="input-text" type="text" required />
          <label class="label" for="name">닉네임</label>
        </div>

        <div class="form-field col-lg-12">
          <input id="name" class="input-text" type="text" required />
          <label class="label" for="name">이름</label>
        </div>

        <div class="form-field col-lg-12">
          <input id="email" class="input-text" type="text" required />
          <label class="label" for="name">이메일</label>
        </div>

        <div class="form-field col-lg-12">
          <input class="submit-btn" type="submit" value="저장" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
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

    return {
      preview,
      onFileSelected,
    };
  },
};
</script>

<style scoped>
@import "../../assets/css/write.css";

#title {
  text-align: left;
  margin-bottom: 50px;
}

.form-field {
  padding-left: 40px;
  padding-right: 40px;
}

.form-header {
  padding-left: 50px;
  padding-right: 50px;
}

.finish_count {
  text-align: right;
}

.form-section {
  border: 2px rgb(156, 156, 156) solid;
  border-radius: 20px;
  padding: 30px;
}

.profile_img {
  cursor: pointer;
  width: 100px;
  border-radius: 50%;
}
</style>
