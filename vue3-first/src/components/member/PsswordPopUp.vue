<template>
  <div class="container px-4 px-lg-5 mt-5">
    <nav class="navbar navbar-expand-lg">
      <div class="container px-4 px-lg-5">
        <div></div>
        <img
          class="close-image"
          src="../../assets/images/x_button.png"
          alt=""
          @click="closePopup"
        />
      </div>
    </nav>

    <div class="justify-content-center">
      <h2 class="h2">비밀번호 재설정</h2>
      <div class="ex">
        회원 가입한 이메일을 입력하여 주세요. <br />
        비밀번호를 변경할 수 있는 링크가 전송됩니다.
      </div>
      <form @submit.prevent="loginProcess">
        <label class="label">
          <span>Email</span>
          <input
            class="input"
            type="email"
            placeholder="example@gmail.com"
            required
          />
        </label>
        <button type="submit" class="submit button">
          비밀번호 재설정 메일 전송
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["close-pssword-popup"],
  setup(props, context) {
    const closePopup = () => {
      context.emit("close-pssword-popup");
    };

    return {
      closePopup,
    };
  },
};
</script>

<style scoped>
.ex {
  margin-bottom: 100px;
}
.close-image {
  width: 30px;
  height: 30px;
  margin-top: 0;
}

body {
  padding: 1.5em;
  background: #f5f5f5;
}

table {
  border: 1px #a39485 solid;
  font-size: 0.9em;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  width: 100%;
  border-collapse: collapse;
  border-radius: 5px;
  overflow: hidden;
}

thead {
  font-weight: bold;
  color: #fff;
  background: #73685d;
}

td,
th {
  padding: 1em 0.5em;
  vertical-align: middle;
}

td {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
}

a {
  color: #73685d;
}

@media all and (max-width: 768px) {
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  table {
    position: relative;
    padding-bottom: 0;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  thead {
    white-space: nowrap;
  }

  tr {
    display: inline-block;
    vertical-align: top;
  }

  th {
    border-bottom: 1px solid #a39485;
  }

  td {
    border-bottom: 1px solid #e5e5e5;
  }
}
</style>
