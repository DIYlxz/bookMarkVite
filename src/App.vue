<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(()=>{
  document.getElementsByTagName("body")[0].setAttribute("class", "theme-default");
})
</script>

<style lang="scss">
#app {
  font-family: SimSun,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

* {
  padding: 0;
  margin: 0;
}
body, #app {
  width: 100vw;
  height: 100vh;
}
</style>
