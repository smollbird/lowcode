<template>
  <div class="aside">
    <div class="tabs-title">页面配置</div>
    <div class="w_h">
      <Set name="宽度"></Set>
      <Set name="高度"></Set>
    </div>
    <div class="color-pick">
      <div>背景颜色</div>
      <el-color-picker v-model="color" size="large" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Set from './set.vue';
const color = ref('');
</script>

<style scoped lang="less">
.aside {
  padding: 10px 5px;
  .tabs-title {
    padding: 4px;
    color: @color--normal;
  }
  .w_h {
    display: flex;
  }
  .color-pick {
    display: flex;
    & /deep/ .el-color-picker__trigger {
      width: 100%;
    }
  }
}
</style>
