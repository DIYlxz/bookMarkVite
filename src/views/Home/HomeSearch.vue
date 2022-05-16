<template>
    <div class="hs">
        <div class="si">
            <div class="iconfont icon-sousuo iconSty si-icon"></div>
            <input type="text" v-model="info" class="inputBase" @keydown.enter="searchInfo(browserSelected)"
                placeholder="请输入搜索内容" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

defineProps({
    browserSelected: {
        type: String,
        require: true, //是否为必传
    }
})

let info = ref("");
const searchInfo = (bs: string | undefined) => {
    if (bs) {
        if (bs == "baidu") {
            window.open(`https://www.baidu.com/s?wd=${info.value}`);
        }else if(bs == "guge") {
            window.open(`https://www.google.com/search?q=${info.value}`);
        }else if(bs == "sougou") {
            window.open(`https://www.sogou.com/tx?query=${info.value}`);
        }
    }
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