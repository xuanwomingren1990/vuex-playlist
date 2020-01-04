<template>
    <div id="product-list-two">
        <h2>Vuex-Module</h2>
        <ul>
            <li>模块中的state:{{count_moduleA}}</li>
            <li>模块中的state:{{getter_moduleA}}</li>
        </ul>
        <button @click="mutation_moduleA">mutation</button>
        <button @click="mutation_moduleA">action</button>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'
    export default {
        name: "VuexModule",
        computed: {
            count_moduleA(){
                console.log(this.$store)
                /**state.moduleA.count_moduleA 来获取模块中的状态*/
                return this.$store.state.moduleA.count_moduleA
            },

            getter_moduleA () {
                /**根据模块注册的路径, 来访问模块的getter*/
                return this.$store.getters['moduleA/getter_moduleA']
            }
        },
        methods: {
            mutation_moduleA () {
                /**根据模块注册的路径, 来访问模块的mutation*/
                this.$store.commit('moduleA/mutation_moduleA')
            },
            action_moduleA () {
                /**根据模块注册的路径, 来访问模块的action*/
                this.$store.dispatch('moduleA/action_moduleA')
            }
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
</style>
