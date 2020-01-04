import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false

new Vue({
  router,
    /**把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件；
     * 在子组件中，通过 this.$store 访问 store实例
     */
  store,
  render: h => h(App)
}).$mount('#app')
