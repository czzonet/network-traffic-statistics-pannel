import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/** element ui */
import { initElementUI } from "./elementui-components-init";
initElementUI();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
