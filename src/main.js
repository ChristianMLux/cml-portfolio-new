import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import AllIosIcon from "vue-ionicons/dist/ionicons.js";

const app = createApp(App).use(store).use(router);
app.use(AllIosIcon);
app.mount("#app");
