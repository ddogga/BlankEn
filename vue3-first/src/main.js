import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import store from "./store/store.js";

// ==================================================
// Style
// ==================================================

import "@/assets/css/login.scss";
import "@/assets/css/main.css";

// import "@/assets/js/multiselect-dropdown.js";

const app = createApp(App);
app.use(router).use(store);
app.mount("#app");
