<template>
    <div>
        <div class="abm" @click="dialogVisible = true">
            <div class="iconfont icon-16gf-bookmarkPlus iconSty"></div>
        </div>
        <el-dialog v-model="dialogVisible" title="书签创建" width="30%" custom-class="abm-dialog">
            <div class="abm-dialog-in">
                <div class="abm-dialog-box">
                    <div>
                        <label>名称：</label>
                    </div>
                    <input class="inputDialog" type="text" v-model="loveName">
                </div>
                <div class="abm-dialog-box">
                    <div>
                        <label>网址：</label>
                    </div>
                    <input class="inputDialog" type="text" v-model="loveUrl">
                </div>
            </div>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="cancelBookMark">取消</el-button>
                    <el-button type="primary" @click="addBookMark">确认</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts" setup>
import { key } from '@/store';
import { ElMessage } from 'element-plus';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

//store里数据
const store = useStore(key);

//对话框允许
const dialogVisible = ref(false);

//名称和网址
const loveName = ref("");
const loveUrl = ref("");


const addBookMark = () => {
    ElMessage({
        message: "成功添加书签",
        type: "success",
    })
    dialogVisible.value = false;
    //图片地址
    const tagIcon: string = loveUrl.value + "/favicon.ico";

    store.commit("book/addTagInfo", {
        tagName: loveName.value,
        tagUrl: loveUrl.value,
        tagIcon: tagIcon,
    })
}

const cancelBookMark = () => {
    ElMessage({
        message: "已成功取消",
        type: "warning",
    })
    dialogVisible.value = false;
}

</script>

<style lang="scss" scoped>
.abm {
    width: 32px;
    height: 32px;
    background-color: $background-base-light;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    line-height: 23px;
    text-align: left;

    &:hover {
        width: 48px;
    }
}
</style>

<style lang="scss">
.abm-dialog {
    background-color: $background-base-light;
    opacity: 0.8;

    .abm-dialog-in {

        .abm-dialog-box {
            text-align: left;
            margin-bottom: 16px;
        }
    }
}
</style>