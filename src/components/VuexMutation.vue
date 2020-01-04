<template>
    <div id="product-list-one">
        <h2>Vuex-Mutation</h2>
        <button @click="reducePrice({price:10})">商品降价</button>
        <button @click="addPrice({price:10})">商品降价</button>
    </div>
</template>

<script>
    import {mapMutations } from  'vuex'
    export default {
        name: "VuexMutation",
        methods:{
            /**以相应的 mutation 类型, 调用 store.commit 方法：*/
            // reducePrice(){
            //     this.$store.commit('reducePrice',{price:100})
            // },


            /**
             * mapMutations 函数将 store 中的 mutations 处理函数进行映射,并返回一个对象;
             * 同时使用对象展开运算符,mapMutations,混入到methods中去;
             */
            ...mapMutations([
                'reducePrice',
                'addPrice'
            ])
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

