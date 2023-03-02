<template>
  <div>
    <p class="tip">BlankEn 비밀번호 재설정 페이지 입니다.</p>
    <div class="cont">
      <div class="form-section">
        <h2>비밀번호 재설정</h2>
        <form @submit.prevent="passwordUpdateProcess">
          <label class="label">
            <span>새 비밀번호</span>
            <input
              class="input"
              type="password"
              required
              v-model="new_password"
              @blur="validatePassword"
            />
          </label>
          <div v-if="!passwordValidFlag">
            영문자 대소문자,숫자,특수문자가 포함된 8~16자로 입력하여 주세요.
          </div>

          <label class="label">
            <span>비밀번호 확인</span>
            <input
              class="input"
              type="password"
              id="confirm_password"
              required
              v-model="re_password"
              @blur="validatePassword"
            />
          </label>
          <div v-if="!passwordMatchedFlag">비밀번호가 일치하지 않습니다.</div>

          <button type="submit" class="submit button">비밀번호 변경</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "../../axios/axiossetting";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const email = route.query.email;
    const uuid = route.query.uuid;

    const new_password = ref("");
    const re_password = ref("");

    const passwordValidFlag = ref(true);
    const passwordMatchedFlag = ref(true);

    const validatePassword = () => {
      console.log(new_password.value);
      //대문자, 소문자, 숫자가 1개 이상 존재, 8~16자 이하
      if (
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,16}$/.test(new_password.value)
      ) {
        passwordValidFlag.value = true;
      } else {
        passwordValidFlag.value = false;
      }

      if (re_password.value != "" && new_password.value != re_password.value) {
        passwordMatchedFlag.value = false;
      } else {
        passwordMatchedFlag.value = true;
      }
    };

    const passwordUpdateProcess = async (e) => {
      if (!check(e)) {
        return;
      }

      try {
        const res = await axios.put(
          `api/members/new_password?email=${email}&uuid=${uuid}`,
          {
            password: new_password.value,
          }
        );
        if (res.data) {
          window.alert("비밀번호가 변경되었습니다.");
          router.push({
            name: "Login",
          });
        }
      } catch (err) {
        console.log(err);
      }
    };

    const check = (e) => {
      if (!passwordValidFlag.value || !passwordMatchedFlag.value) {
        e.preventDefault();
        window.alert("비밀번호를 확인해 주세요");
        return false;
      }
      return true;
    };

    return {
      new_password,
      re_password,
      validatePassword,
      passwordValidFlag,
      passwordMatchedFlag,
      passwordUpdateProcess,
    };
  },
};
</script>

<style scoped>
.form-section {
  padding: 30px;
}
</style>
