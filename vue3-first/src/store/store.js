import { createStore } from "vuex";
export default createStore({
  state: {
    token: null,
    page: 1,
  },
  mutations: {
    //state의 값을 변경하는 곳
    setToken(state, token) {
      state.token = token;
    },
    update_page(state, payload) {
      state.page = payload;
    },
  },

  getters: {
    get_token(state) {
      return state.token;
    },
  },

  actions: {
    //mutation을 실행시키는 역할

    set_token(context, token) {
      //commit(mutations에 정의된 함수이름, 함수에 넘길 값)
      context.commit("setToken", token);
    },
    update_page(context, page) {
      context.commit("update_page", page);
    },
  },
});
