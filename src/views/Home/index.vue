<template>
    <div class="home">
        <div class="homeLeft" :class="homeLeftStyleJudge">
            <div class="homeLeft-box-images">
                <div class="homeLeft-box-images-title">燕寻书签</div>
                <img class="homeLeft-images-limit" src="../../assets/images/pageHeader.png">
            </div>
            <div class="homeLeft-box-nav">
                <home-left></home-left>
            </div>
        </div>
        <div class="homeRight theme-default-content">
            <div class="homeRight-box-top theme-default-top">
                <div class="homeRight-box-search">
                    <home-search :browser-selected="browser"></home-search>
                </div>
                <div class="homeRight-box-scan">
                    <div class="iconfont icon-baidu iconSty homeRight-scan-select"
                        :class="{ browserJudge: browser == `baidu` }" @click="changeBrowser(`baidu`)"></div>
                    <div class="iconfont icon-google iconSty homeRight-scan-select"
                        :class="{ browserJudge: browser == `guge` }" @click="changeBrowser(`guge`)"></div>
                    <div class="iconfont icon-Sougou iconSty homeRight-scan-select"
                        :class="{ browserJudge: browser == `sougou` }" @click="changeBrowser(`sougou`)"></div>
                </div>
            </div>
            <div>
                <router-view></router-view>
            </div>
        </div>
        <div class="homeMainBtn">
            <add-book-mark></add-book-mark>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import HomeLeft from "./HomeLeft.vue";
import HomeSearch from "./HomeSearch.vue";
import AddBookMark from "@/components/Common/AddBookMark.vue";

const homeLeftStyleJudge = ref("theme-default-left");

//浏览器搜索选择
const browser = ref("baidu");

//切换浏览器
const changeBrowser = (s1: string) => {
    browser.value = s1;
}


</script>


<style lang="scss" scoped>
.home {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;

    .homeLeft {
        width: 15%;
        height: 100%;

        .homeLeft-box-images {
            width: 70%;
            margin: 2rem auto;
            box-sizing: border-box;
            position: relative;
            box-shadow: 1rem 0.5rem 1rem $borderShadow-base-color;

            .homeLeft-box-images-title {
                position: absolute;
                font-size: $font-size-lg;
                font-weight: bold;
                bottom: 0;
                left: calc(50% - 38px);
            }

            .homeLeft-images-limit {
                width: 100%;
            }
        }

        .homeLeft-box-nav {
            width: 100%;
        }
    }

    .homeRight {
        width: 85%;

        .homeRight-box-top {
            display: flex;
            height: 72px;
            padding-top: 12px;
            box-sizing: border-box;
            border-bottom: 1px solid $border-base-color;
            text-align: center;
            justify-content: center;

            .homeRight-box-search {
                height: 100%;
            }

            .homeRight-box-scan {
                display: flex;
                line-height: 32px;

                .homeRight-scan-select {
                    cursor: pointer;
                    margin: 0 5px;

                    &:hover {
                        color: $select-icon-base-color;
                    }
                }

                .browserJudge {
                    color: $selected-icon-base-color;
                    &:hover {
                        color: $selected-icon-base-color;
                    }
                }

            }
        }
    }
    .homeMainBtn {
        position: absolute;
        right: 0;
        top: 150px;
    }
}
</style>