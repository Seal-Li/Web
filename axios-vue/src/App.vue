<template>
  <div id="app">
    <MyAxios> </MyAxios>
  </div>
</template>

<script>
import MyAxios from './components/MyAxios.vue'

export default {
  name: 'App',
  components: {
    MyAxios,
  },
};
</script>

<style>
#app {
}
</style>
