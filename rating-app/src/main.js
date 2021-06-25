import { createApp } from "vue";
import HelloVueApp from "./App.vue";
//import router from "./router";
//import store from "./store";

/*const HelloVueApp = {
  data() {
    return {
      message: "Hello World!",
    };
  },
};*/

//createApp(App).use(store).use(router).mount("#app");
createApp(HelloVueApp).mount("#hello-vue");
