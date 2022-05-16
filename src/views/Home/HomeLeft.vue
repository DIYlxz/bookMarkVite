<template>
    <div class="hl">
        <div class="hl-select" :class="{ hlSelected: hlSelectedJudge == `我的常用` }" @click="changeHlSelect(`我的常用`)">
            <span class="iconfont icon-hejitubiao iconStyDefault"></span>
            我的常用
        </div>
        <div class="hl-select" :class="{ hlSelected: hlSelectedJudge == `学习网站` }"  @click="changeHlSelect(`学习网站`)">
            <span class="iconfont icon-LearningCenter iconStyDefault"></span>
            学习网站
        </div>
        <div class="hl-select" :class="{ hlSelected: hlSelectedJudge == `图片素材` }"  @click="changeHlSelect(`图片素材`)">
            <span class="iconfont icon-tupiantianchong iconStyDefault"></span>
            图片素材
        </div>
        <div class="hl-select" :class="{ hlSelected: hlSelectedJudge == `常用工具` }"  @click="changeHlSelect(`常用工具`)">
            <span class="iconfont icon-gongju-fill iconStyDefault"></span>
            常用工具
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const hlSelectedJudge = ref("我的常用");

const changeHlSelect = (s1: string) => {
    hlSelectedJudge.value = s1;
}

</script>

<style lang="scss" scoped>
.hl {
    width: 100%;
    text-align: left;

    .hl-select {
        width: 100%;
        height: 48px;
        cursor: pointer;
        line-height: 48px;
        padding: 0 16px;
        box-sizing: border-box;
        user-select: none;

        &:hover {
            background-color: $select-base-color;
        }
    }

    .hlSelected {
        background-color: $selected-base-color;

        &:hover {
            background-color: $selected-base-color;
        }
    }
}
</style>