import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";

// ==================================================
// Style
// ==================================================

import "@/assets/css/main.css";
import "@/assets/js/scripts.js";
import "@/assets/js/multiselect-dropdown.js";

createApp(App).use(router).mount("#app");
