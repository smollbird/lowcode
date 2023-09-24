<template>
  <div>
    <div class="tabs-title">页面配置</div>
    <div class="w_h m10">
      <Set name="宽度"></Set>
      <Set name="高度"></Set>
    </div>

    <div class="background-pick m10"></div>

    <div class="color-pick m10">
      <div>背景颜色</div>
      <el-color-picker v-model="color" size="large" />
    </div>

    <div class="back-type-select m10">
      <div>应用类型</div>
      <el-select v-model="value" clearable placeholder="Select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>

    <div class="back-controls m10">
      <div>背景控制</div>
      <el-button type="primary">清除背景</el-button>
      <el-button type="primary">清除颜色</el-button>
    </div>

    <div class="flexible m10">
      <div>适配方式</div>
      <el-button type="primary">自适应</el-button>
      <el-button type="primary">x铺满</el-button>
      <el-button type="primary">y铺满</el-button>
      <el-button type="primary">拉伸</el-button>
    </div>

    <div class="filter m10">
      <div>
        <p>滤镜</p>
        <el-switch v-model="switchValue" />
      </div>
      <div>
        <div class="slider-demo-block">
          <span class="demonstration">色相</span>
          <el-slider v-model="filterSlider.hue" />
        </div>
        <div class="slider-demo-block">
          <span class="demonstration">饱和度</span>
          <el-slider v-model="filterSlider.saturation" />
        </div>
        <div class="slider-demo-block">
          <span class="demonstration">对比度</span>
          <el-slider v-model="filterSlider.contrast" />
        </div>
        <div class="slider-demo-block">
          <span class="demonstration">亮度</span>
          <el-slider v-model="filterSlider.luminance" />
        </div>
        <div class="slider-demo-block">
          <span class="demonstration">透明度</span>
          <el-slider v-model="filterSlider.pellucidity" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import Set from './set.vue';
const color = ref('');
const value = ref('1');
const switchValue = ref(false);
const filterSlider = reactive({
  hue: 0,
  saturation: 0,
  contrast: 0,
  luminance: 0,
  pellucidity: 0
});
const options = [
  {
    value: '1',
    label: '图片'
  },
  {
    value: '2',
    label: '颜色'
  }
];
</script>

<style scoped lang="less">
.tabs-title {
  padding: 4px;
}
.w_h {
  display: flex;
}
.background-pick {
  height: 200px;
  background-color: #ca0f0f;
  border-radius: 4px;
  border: 1px dashed @color--normal;
}
.color-pick {
  display: flex;
  & /deep/ .el-color-picker__trigger {
    width: 100%;
  }
}
</style>
