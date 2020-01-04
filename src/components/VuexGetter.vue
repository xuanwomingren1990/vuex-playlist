<template>
    <div id="product-list-one">
        <h2>Vuex-Getter</h2>
        <ul>
            <li v-for="(product,index) in saleProducts" :key="index">
                <span>{{product.name}}</span>
                <span>{{product.price}}</span>
            </li>
        </ul>
        <ul>
            <li v-for="(product,index) in saleProducts2(2000)" :key="index">
                <span>{{product.name}}</span>
                <span>{{product.price}}</span>
            </li>
        </ul>
        <ul>
            <li v-for="(product,index) in saleProducts3(1000)" :key="index">
                <span>{{product.name}}</span>
                <span>{{product.price}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapGetters} from  'vuex'
    export default {
        name: "VuexGetter",
        computed: {
            /** 1.getter作为属性，来访问*/
            /*
            saleProducts(){
                return this.$store.getters.saleProducts //saleProducts是一个属性
            },
            */


            /**2.getter作为方法，来访问*/
            /*
            saleProducts2 () {
                return this.$store.getters.saleProducts2(1000) //saleProducts2是一个方法
            },
            saleProducts3 () {
                return this.$store.getters.saleProducts3(2000) //saleProducts3是一个方法
            }
            */


            /**
             * mapGetters 函数将 store 中的 getter 进行映射,并返回一个对象;
             * 同时使用对象展开运算符,将mapGetters返回的对象,混入到计算属性中去;
             */
            ...mapGetters([
                'saleProducts',
                'saleProducts2',//函数
                'saleProducts3'//函数
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
