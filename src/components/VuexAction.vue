<template>
    <div id="product-list-one">
        <h2>Vuex-Action</h2>
        <button @click="reducePriceAction({price:10})">商品降价_2</button>
    </div>
</template>

<script>
    import {mapActions} from  'vuex'
    export default {
        name: "VuexAction",
        methods:{
            /**在组件中,分发Action*/
            /*
            reducePriceAction(amount){
                this.$store.dispatch('reducePriceAction',amount)
            }
            */

            /**
             * mapActions 函数将 store 中的 actions 函数进行映射,并返回一个对象;
             * 同时使用对象展开运算符,mapActions,混入到methods中去;
             */
            ...mapActions([
                'reducePriceAction'
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
