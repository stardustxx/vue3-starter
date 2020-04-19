<template>
  <div id="app">
    <h2>This is a Vue 3 starter project</h2>

    <div class="nav">
      <router-link to="/">Vuex Store Page</router-link>
      <router-link to="/page2">Composition API Page</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style lang="scss" scoped>

#app {
  .nav {
    padding: 12px 0px;

    a {
      margin-right: 12px;
    }
  }
}

</style>