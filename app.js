var Vue = require('vue');

const HelloVueApp = {
  data() {
    return {
      message: 'Hello World!'
    }
  }
}

Vue.createApp(HelloVueApp).mount('#hello-vue')
