<template>
  <div>
    <el-tabs v-model="tabsName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane
        :label="item.tabName"
        :name="item.tabName"
        v-for="item in tabsList"
        :key="item.tabName"
      >
        <!-- v-for="val in tabsList" :key="val" -->
        <DynamicTable
          :columns="item.columns"
          :data="item.tableData"
        ></DynamicTable>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import DynamicTable from '@/components/dynamic-table';
import { TabsPaneContext } from 'element-plus';
import type { ITableData } from '@/components/dynamic-table/src/types/table-column';
import { ref } from 'vue';

const columns = [{ name: 'KEY' }, { name: 'VALUE' }, { name: 'DESCRIPTION' }];

interface ITabsList {
  tabName: string;
  tableData: ITableData[];
  columns: { name: string }[];
}
const tabsList = ref<ITabsList[]>([
  {
    tabName: 'params',
    tableData: [],
    columns
  },
  {
    tabName: 'Headers',
    tableData: [],
    columns
  },
  {
    tabName: 'body',
    tableData: [],
    columns
  }
]);
const tabsName = ref<string>('params');
const handleClick = (pane: TabsPaneContext, ev: Event) => {
  console.log(pane, ev, '3', pane.paneName);
};
</script>

<style scoped></style>
