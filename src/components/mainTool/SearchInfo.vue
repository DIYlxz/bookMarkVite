<template>
  <div class="si">
    <div class="iconfont icon-sousuo iconSty si-icon"></div>
    <input type="text" v-model="info" class="inputBase" @keydown.enter="searchInfo" placeholder="请输入搜索内容" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

let info = ref("");
const searchInfo = () => {
  window.open(`https://www.baidu.com/s?wd=${info.value}`);
  info.value = "";
}

</script>

<style lang="scss" scoped>
.si {
  text-align: left;
  box-sizing: border-box;
  position: relative;
  .si-icon {
    position: absolute;
    bottom: 3px;
    left: 3px;
  }
}

</style>