<template>
  <div>
    <!-- layout -->
    <div class="work">
      <div class="work-header">
        <div>
          <el-button text @click="back">home</el-button>
          <el-button text @click="back">comp</el-button>
          <el-button text @click="back">图层</el-button>
          <el-button text @click="back">detail</el-button>
          <el-button text @click="back">left</el-button>
          <el-button text @click="back">right</el-button>
        </div>
        <div>
          <span>工作区</span>
        </div>
        <div>
          <el-button text>预览</el-button>
          <el-button text>保存</el-button>
          <el-button text>中文</el-button>
          <el-button text>夜间</el-button>
          <el-button text>个人</el-button>
        </div>
      </div>
      <!-- <div class="work-nav">nav</div> -->
      <div class="work-main" :style="{ height: height - 32 + 'px' }">
        <div class="work-main-left">
          <comp-list></comp-list>
        </div>
        <div class="work-main-body">body</div>
        <div class="work-main-right">
          <Aside></Aside>
        </div>
      </div>
    </div>

    <!-- dialog -->
    <!-- 请求接口 -->
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
import compList from './components/comp-list/index.vue';
import Aside from './components/aside/index.vue';
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
      // background-color: #1a949d;
      // flex: 4;
    }

    .work-main-body {
      background-color: #7b146c;
      flex: 5;
    }

    .work-main-right {
      flex: 3;
      background-color: @background-color--normal;
    }
  }
}
</style>
