<template>
  <div>
    <el-table
      :data="props.data"
      border
      max-height="160"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column
        v-for="column in props.columns"
        :key="column.name"
        :prop="column.name"
        :label="column.name"
      />
      <template #append>
        <div>sdfs</div>
      </template>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import type { ITableData, ITableColumn } from './types/table-column';
interface IProps {
  data: ITableData[];
  columns: ITableColumn[];
}
const props = defineProps<IProps>();
const multipleSelection = ref<ITableData[]>([]);
const handleSelectionChange = (val: ITableData[]) => {
  multipleSelection.value = val;
};
</script>

<style scoped></style>
