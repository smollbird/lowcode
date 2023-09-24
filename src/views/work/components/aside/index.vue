<template>
  <div class="aside">
    <global-page-setting v-if="false"></global-page-setting>
    <component-custom-setting></component-custom-setting>
  </div>
</template>

<script setup lang="ts">
import globalPageSetting from './globalPageSettng.vue';
import componentCustomSetting from './componentCustomSetting.vue';
</script>

<style scoped lang="less">
.aside {
  padding: 10px 5px;
  color: @color--normal;
}
</style>
