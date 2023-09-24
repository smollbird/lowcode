<template>
  <div>
    <el-tabs class="tabs-self" v-model="activeKey">
      <el-tab-pane key="1" label="定制" name="定制">定制</el-tab-pane>
      <el-tab-pane key="2" label="动画" name="动画">动画</el-tab-pane>
      <el-tab-pane key="3" label="数据" name="数据">数据</el-tab-pane>
      <el-tab-pane key="4" label="事件" name="事件">事件</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const activeKey = ref('定制');
</script>

<style scoped lang="less">
.tabs-self {
  & /deep/ .el-tabs__item {
    color: #fff;
  }
  & /deep/ .el-tab-pane {
    color: #fff;
  }
}
</style>
