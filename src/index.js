import { createApp } from "vue";
import Vuex from "vuex";
import router from "./router";
import store from "./store";

import App from "./App.vue";

function createStore() {
  return new Vuex.Store(store);
}

const app = createApp(App);
app.use(router);
app.use(createStore());

app.mount("#vue3-starter");