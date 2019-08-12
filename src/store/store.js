import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // 严格模式确保我们不能再直接修改state,只能通过mutations来修改
    strict: true,
    // 狀態就是我們全局要使用的數據
    state: {
          products:[
              {name:"马云",price:200},
              {name:"马化腾",price:140},
              {name:"马冬梅",price:20},
              {name:"马蓉",price:10}
          ]
      },
    // getters中的属性，是对state中的数据进行一些操作，但是不改变其值，而返回的；同时可以供多个组件调用
    getters: {
        saleProducts: (state) => {
            var saleProducts = state.products.map(product=>{
                return {
                    name: "**" + product.name + "**",
                    price: product.price / 2
                }
            })
            return saleProducts
        }
    },
    // mutations用于对state进行修改
    // 为什么要使用mutations?可以在vue-tooltip中监听到mutations中事件对state的修改
    // 以事件的形式，触发mutation中的方法,this.$store.commit('reducePrice')
    mutations: {
        reducePrice: (state)=>{
            state.products.forEach(product=>{
                product.price -= 1
            })
        }
    },
    actions: {

    }
})

/*
1.Vuex的使用：
在main.js中，把store.js公开的对象，注测到Vue实例上。
通过this.$store来拿到该对象，就可以去使用store.js中公开的成员。

2.直接使用state中的数据（不对state中的数据进行改变）
在组件的计算属性中（computed），直接调用state中的数据。
适用于：
        --组件仅仅对state中的数据进行遍历渲染
        --组件要对state中的数据进行操作，但是每个组件的中的操作是不用的。也是就是说操作仅仅在当前组件中进行。

3.使用getters(不对state中的数据进行改变)
在组件的计算属性中（computed），直接调用getters中的数据。
适用于：
        --对state中的数据进行一些操作，但是不改变其值；同时可以供多个组件调用
*/
