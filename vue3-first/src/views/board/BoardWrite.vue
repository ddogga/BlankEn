<template>
  <section class="get-in-touch">
    <h1 class="title">Make QuizSet</h1>
    <form class="contact-form row">
      <label for="profile">
        <span id="showImage">
          <img
            width="300px"
            id="profile_img"
            src="../../assets/images/upload_image.jpg"
            alt="profile"
          />
        </span>
        <input type="file" style="display: none" id="profile" name="profile" />
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
      <div class="form-field col-lg-12">
        <input class="submit-btn" type="submit" value="Submit" />
      </div>
    </form>
  </section>
</template>

<style scoped>
@import "../../assets/css/write.css";
</style>
