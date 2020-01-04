import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './mudule/moduleA.js'
Vue.use(Vuex)

const store = new Vuex.Store({
    // 严格模式确保我们不能再直接修改state,只能通过mutations来修改
    strict: true,

    // 狀態就是我們全局要使用的數據
    state: {
          count: 100,
          products:[
              {name:"马云",price:200},
              {name:"马化腾",price:140},
              {name:"马冬梅",price:20},
              {name:"马蓉",price:10}
          ]
      },

    // getters中的属性，是对state中的数据进行一些计算，但是不改变其值，而返回的；
    // 并且，多个组件都要用到这一属性
    getters: {
        // getter是一个值
        saleProducts: (state, getters) => {// state为第一个参数，getters本身为第二个参数，可以用来调用其他getter
            var saleProducts = state.products.map(product=>{
                return {
                    name: "**" + product.name + "**",
                    price: product.price / 2
                }
            })
            return saleProducts
        },

        // getter是一个函数，是saleProducts3的简写形式
        saleProducts2: (state, getters) => (payload) => {
            let saleProducts = state.products.map(product=>{
                return {
                    name: "**" + product.name + "**",
                    price: product.price + payload
                }
            })
            return saleProducts
        },
        saleProducts3: (state, getters) => {
            // 返回的是一个函数索引
            return function (payload) {
                let saleProducts = state.products.map(product=>{
                    return {
                        name: "**" + product.name + "**",
                        price: product.price + payload
                    }
                })
                return saleProducts
            }
        }
    },

    // 1.mutations用于对state进行修改;
    // 2.为什么要使用mutations?可以在vue-tooltip中监听到mutations中事件对state的修改;
    // 3.一个mutation相当于注册了一个事件,以及事件对应的处理函数;然后store.commit 方法来触发事件:this.$store.commit('reducePrice', 1000)
    // 4.必须是同步函数
    mutations: {
        reducePrice: (state, {price}) => {
            state.products.forEach(product=>{
                product.price -= price
            })
        },
        addPrice: (state, {price}) => {
            state.products.forEach(product=>{
                product.price += price
            })
        }
    },

    // 1.action提交的是mutation[即，mutations中的方法]
    // 2.通过store.dispatch方法分发action
    // 3.可以传递参数
    // 4.可以执行异步操作
    // 5.异步操作执行完后，才会触发mutation,vueDevtools监听mutation的触发时机与mutation真正的触发时机同步，便于调试
    actions: {
        reducePriceAction: ({commit},payload)=>{
            setTimeout(function () {
                commit('reducePrice',payload)//提交mutations中的方法，最终执行mutations中的方法
            },1000)
        }
    },

    modules: {
        moduleA: moduleA
    }
})

export default store

/*
1.Vuex的使用：
在main.js中，把store.js公开的对象，注测到Vue实例上。
通过this.$store来拿到该对象，就可以去使用store.js中公开的成员。

2.直接使用state中的数据（不对state中的数据进行改变）
在组件的计算属性中（computed），直接调用state中的数据。
适用于：
        --组件仅仅对state中的数据进行遍历渲染
        --组件要对state中的数据进行操作，但是每个组件的中的操作是不同的。也是就是说操作仅仅适用于前组件。

3.使用getters(不对state中的数据进行改变)
在组件的计算属性中（computed），直接调用getters中的数据。
适用于：
        --对state中的数据进行一些操作，但是不改变其值；同时可以供多个组件调用
*/
