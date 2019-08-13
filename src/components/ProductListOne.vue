<template>
    <div id="product-list-one">
        <h2>product-list-one</h2>
        <ul>
            <li v-for="(product,index) in saleProducts" :key="index">
                <span>{{product.name}}</span>
                <span>{{product.price}}</span>
            </li>
        </ul>
        <!--mutation形式-->
        <button @click="reducePrice()">商品降价</button>
        <!--action形式-->
        <button @click="reducePrice2(4)">商品降价_2</button>
    </div>
</template>

<script>
    export default {
        name: "ProductListOne",
        computed: {
            // 在计算属性中直接调用state中的数据
            products(){
                return this.$store.state.products
            },
            // 在计算属性中，调用getters中的属性对象
            saleProducts(){
                return this.$store.getters.saleProducts
            }
        },
        methods:{
            reducePrice(){
                // 以事件的形式，触发mutation中的方法
                // reducePrice是mutations中的方法
                this.$store.commit('reducePrice')
            },
            reducePrice2(amount){
                // reducePrice是action中的方法
                this.$store.dispatch('reducePrice',amount)
            }
        }
    }
</script>

<style scoped>
    #product-list-one{
        background: #FFF8B1;
        box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
        margin-bottom: 30px;
        padding: 10px 20px;
    }
    #product-list-one ul{
        padding: 0;
    }
    #product-list-one li{
        display: inline-block;
        margin-right: 10px;
        margin-top: 10px;
        padding: 20px;
        background: rgba(255,255,255,0.7);
    }
    .price{
        font-weight: bold;
        color: #E8800C;
    }
</style>
