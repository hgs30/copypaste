<template>
  <div id="app">
    <img alt="Clipboard logo" src="./assets/logo.png">
    <clipboard/>
  </div>
</template>

<script>
import clipboard from './components/clipboard.vue'

export default {
  name: 'App',
  components: {
    clipboard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
