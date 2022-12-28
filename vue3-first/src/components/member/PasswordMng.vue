<template>
  <div class="get-in-touch">
    <h1 id="title">비밀번호 변경</h1>

    <div class="form-section">
      <form class="contact-form row">
        <div class="form-field col-lg-12">
          <input id="nickname" class="input-text" type="text" required />
          <label class="label" for="name">이전 비밀번호</label>
        </div>

        <div class="form-field col-lg-12">
          <input id="name" class="input-text" type="text" required />
          <label class="label" for="name">새 비밀번호</label>
        </div>

        <div class="form-field col-lg-12">
          <input id="email" class="input-text" type="text" required />
          <label class="label" for="name">비밀번호 확인</label>
        </div>

        <div class="form-field col-lg-12">
          <input class="submit-btn" type="submit" value="변경사항 저장" />
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
</style>
