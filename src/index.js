import "regenerator-runtime/runtime";
import { createApp } from "vue";
import { createStore } from "vuex";
import { router } from "./router";
import { store } from "./store";

import App from "./App.vue";

const app = createApp(App);

app.use(createStore(store));
app.use(router);

app.mount("#vue3-starter");