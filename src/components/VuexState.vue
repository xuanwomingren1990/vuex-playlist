<template>
    <div id="product-list-two">
        <h2>Vuex-State</h2>
        <ul>
            <li v-for="(product,index) in productList" :key="index">
                <span>{{product.name}}</span>
                <span>{{product.price}}</span>
            </li>
        </ul>
        <ul>
            <li v-for="(product,index) in productList2" :key="index">
                <span>{{product.name}}</span>
                <span>{{product.price}}</span>
            </li>
        </ul>
        <span>{{localComputed}}</span>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "VuexState",
        data () {
            return{
                split: '-'
            }
        },

        /**用法1：在计算属性中直接读取store实例中的状态*/
        /*
        computed: {
            products(){
                return this.$store.state.products
            }
        }
        */

        /**用法2：当一个组件需要获取多个状态时候,可以使用 mapState 辅助函数帮助我们快速获取state中的转台*/
        // // mapState 函数返回的是一个对象
        /*
        computed: mapState({
            productList: 'products', // 'products'是state中的状态名称

            // 为了能够使用 `this` 获取局部状态，必须使用常规函数
            productList2 (state) { // state指代的就是store实例中的state
                let list = []
                state.products.forEach( item => {
                    let newItem = {
                        name: item.name + this.split,
                        price: item.price
                    }
                    list.push(newItem)
                })
                return list
            }
        })
        */

        /**用法3: 将mapState 辅助函数返回的对象，混入到计算属性中去*/
        computed: {
            localComputed () {
                return '***'
            },
            // 使用对象展开运算符,将mapState函数返回的对象，混入到外部对象中。即：外部对象（计算属性中，同时具有mapState所返回对象中的成员）
            ...mapState({
                productList: 'products',

                productList2 (state) {
                    let list = []
                    state.products.forEach( item => {
                        let newItem = {
                            name: item.name + this.split,
                            price: item.price
                        }
                        list.push(newItem)
                    })
                    return list
                }
            })
        }
    }
</script>

<style scoped>
    #product-list-two{
        background: #D1E4FF;
        box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
        margin-bottom: 30px;
        padding: 10px 20px;
    }
    #product-list-two ul{
        padding: 0;
        list-style-type: none;
    }
    #product-list-two li{
        margin-right: 10px;
        margin-top: 10px;
        padding: 20px;
        background: rgba(255,255,255,0.7);
    }
    .price{
        font-weight: bold;
        color: #860CE8;
        display: block;
    }
</style>
