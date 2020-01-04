const moduleA = {
    /**添加 namespaced: true 的方式使其成为带命名空间的模块。*/
    namespaced: true,

    state: {
        count_moduleA: 999
    },
    getters: {
        getter_moduleA (state, getters, rootState){ //rootState为根节点状态
            return state.count_moduleA + rootState.count
        }
    },
    mutations: {
        mutation_moduleA (state) {
            state.count_moduleA += 5
        }
    },
    actions: {
        action_moduleA ({ state, commit, rootState }) {
            commit('mutation_moduleA')
        }
    }
}
export default moduleA
