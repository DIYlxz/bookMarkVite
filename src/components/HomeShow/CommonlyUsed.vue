<template>
  <div class="cu">
    <div v-for="(item, index) in tagInfo" :key="item.tagName" class="cu-part" @mouseenter="mouseBeginTime(index)"
      @mouseleave="mouseEndTime(index)">
      <div class="cu-box" @click="gotoTag($event, item.tagUrl)">
        <div class="cu-box-img">
          <img :src="item.tagIcon" alt="无" class="cu-img">
        </div>
        <div class="cu-box-text">{{ item.tagName }}</div>
      </div>
      <div class="cu-func" @click="extraFunc">
        <span class="iconfont icon-a-13Bshenglve iconSty" v-show="etcState == `none`"></span>
        <div class="cu-func-list" v-show="etcState == `block`">
          <div class="cu-func-list-selected" @click="modifyBook(index)">修改快捷方式</div>
          <div class="cu-func-list-selected" @click="modifyBook(index)">左侧添加</div>
          <div class="cu-func-list-selected" @click="removeBook(index)">删除</div>
        </div>
      </div>
    </div>
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
        <el-button type="primary" @click="changeBookMark">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { key } from '@/store';
import { ElMessage } from 'element-plus';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore(key);

//返回书签信息
const tagInfo = computed(() => store.state.book.tagInfo);
//省略按钮
const etcState = ref("none");
//对话框允许
const dialogVisible = ref(false);
//名称和网址
const loveName = ref("");
const loveUrl = ref("");

//书签前往点击事件
const gotoTag = (e: any, url: string) => {
  window.open(`${url}`);
}
//计时器声明
let comTime: NodeJS.Timeout | null = null;

//也可以css渐入渐出
//鼠标移入计时
const mouseBeginTime = (i: number) => {
  //1s中后出现
  comTime = setTimeout(() => {
    document.querySelectorAll(".cu-func")[i].classList.add("cuShow");
  }, 500);
}
//鼠标移出后
const mouseEndTime = (i: number) => {
  comTime && clearTimeout(comTime);
  document.querySelectorAll(".cu-func")[i].classList.remove("cuShow");
  etcState.value = "none";
}

//额外的功能显示
const extraFunc = () => {
  etcState.value = "block";
}

//当前书签索引
let curIndex: number;
//修改当前书签信息
const modifyBook = (i: number) => {
  dialogVisible.value = true;
  curIndex = i;
}

//删除当前书签
const removeBook = (i: number) => {
  store.commit("book/removeCurTagInfo", i);
}

//更改当前书签
const changeBookMark = () => {
  ElMessage({
    message: "成功修改书签",
    type: "success",
  })
  dialogVisible.value = false;
  //图片地址
  const tagIcon: string = loveUrl.value + "/favicon.ico";
  store.commit("book/changeCurTagInfo", [
    curIndex,
    {
      tagName: loveName.value,
      tagUrl: loveUrl.value,
      tagIcon: tagIcon,
    }
  ])
}
//取消书签修改
const cancelBookMark = () => {
  ElMessage({
    message: "已成功取消",
    type: "warning",
  })
  dialogVisible.value = false;
}

</script>

<style lang="scss" scoped>
.cu {
  padding: 0 32px 0 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;

  .cu-part {
    width: 250px;
    height: 80px;
    background-color: $background-base-part;
    padding: 16px 16px;
    box-sizing: border-box;
    margin-right: 48px;
    margin-top: 32px;
    cursor: pointer;
    position: relative;

    &:hover {
      background-color: $selected-base-color;
    }

    .cu-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: left;
      margin-right: 32px;

      .cu-box-img {
        .cu-img {
          width: 48px;
          height: 48px;
        }
      }

      .cu-box-text {
        width: calc(100% - 80px);
      }
    }

    .cu-func {
      position: absolute;
      right: 8px;
      top: 12px;
      display: none;

      .cu-func-list {
        position: absolute;
        width: 100px;
        right: 0;
        z-index: 2;
        background: #fff;

        .cu-func-list-selected {
          &:hover {
            background-color: $selected-icon-base-color;
          }
        }
      }

      .iconSty {
        &:hover {
          color: $selected-icon-base-color;
        }
      }
    }

    .cuShow {
      display: block;
    }
  }

}

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