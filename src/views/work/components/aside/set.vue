<template>
  <div class="counter">
    <div class="counter-name">{{ props.name }}</div>
    <el-input-number size="small" v-model="num" :min="0" @change="handleChange" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';
interface IProps {
  name: string;
}
const props = defineProps<IProps>();
const num = ref(0);
const handleChange = (value: number) => {
  console.log(value);
};
</script>

<style scoped lang="less">
.counter {
  display: flex;
  margin: 0 8px;
  .counter-name {
    margin-right: 4px;
    color: @color--normal;
  }
}
</style>
