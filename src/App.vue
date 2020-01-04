<template>
  <div id="app">
      <vuex-state></vuex-state>
    <vuex-getter></vuex-getter>
    <vuex-mutation></vuex-mutation>
    <vuex-action></vuex-action>
      <span>
          ---------------------------------
          ---------------------------------
          ---------------------------------
          ---------------------------------
          ---------------------------------
          ---------------------------------
      </span>
      <vuex-module></vuex-module>
  </div>
</template>
<script>
    import VuexGetter from './components/VuexGetter.vue'
    import VuexState from './components/VuexState.vue'
    import VuexMutation from './components/VuexMutation.vue'
    import VuexAction from './components/VuexAction.vue'

    import VuexModule from './components/VuexModule.vue'
  export default {
      name : "app",
      components : {
          VuexGetter,
          VuexState,
          VuexMutation,
          VuexAction,

          VuexModule
      }
  }
</script>
<style>
body{
font-family: Ubuntu;
color: #555;
}
</style>
