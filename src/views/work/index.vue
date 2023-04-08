<template>
  <div>
    <!-- layout -->
    <div class="work">
      <div class="work-header">
        <el-button text @click="back">back</el-button>
        <div>工作区</div>
        <el-button text>保存</el-button>
      </div>
      <div class="work-nav">nav</div>
      <div class="work-main" :style="{ height: height - 81 + 'px' }">
        <div class="work-main-left">left</div>
        <div class="work-main-body">body</div>
        <div class="work-main-right">right</div>
      </div>
    </div>

    <!-- dialog -->
    <el-dialog
      :before-close="dialogBeforeClose"
      title="设置接口信息"
      v-model="dialogVisible"
      width="60%"
      align-center
    >
      <div>
        <PostMan />
      </div>
      <template #footer>
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
import PostMan from '@/components/postMan/index';

const height = ref(window.innerHeight);
window.onresize = function () {
  height.value = window.innerHeight;
};
const dialogVisible = ref(false);
const dialogBeforeClose = () => {
  console.log(123);
};
const back = () => {
  router.go(-1);
};
</script>

<style lang="less" scoped>
.work {
  .work-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 32px;
    background-color: #fbc609;
  }

  .work-nav {
    height: 40px;
    background-color: #469d1a;
  }

  .work-main {
    display: flex;
    overflow: hidden;
    .work-main-left {
      background-color: #1a949d;
      flex: 2;
    }

    .work-main-body {
      background-color: #7b146c;
      flex: 6;
    }

    .work-main-right {
      flex: 2;
      background-color: #9d1a1a;
    }
  }
}
</style>
