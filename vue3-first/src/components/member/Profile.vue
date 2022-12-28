<template>
  <div class="get-in-touch">
    <h1 id="title">프로필</h1>

    <div class="form-section">
      <form class="contact-form row">
        <div class="form-field col-lg-6">
          <div class="form-header-item" style="float: left">
            <p>프로필 이미지</p>
            <label for="profile">
              <span>
                <img
                  width="100px"
                  class="profile_img"
                  src="../../assets/images/upload_image.jpg"
                  alt="profile"
                />
              </span>

              <input
                type="file"
                id="profile"
                style="display: none"
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
export default {
  setup() {},
};
</script>

<style scoped>
@import "../../assets/css/write.css";

#title {
  text-align: left;
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
}

.form-section {
  border: 2px rgb(156, 156, 156) solid;
  border-radius: 20px;
  padding: 30px;
}
</style>
