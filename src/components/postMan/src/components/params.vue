<template>
  <div>
    <el-tabs v-model="tabsName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane v-for="val in tabsList" :key="val" :label="val" :name="val">
        <DynamicTable :columns="columns" :data="tableData"></DynamicTable>
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
const tableData = ref<ITableData[]>([
  {
    KEY: 'username',
    VALUE: 'hsc',
    DESCRIPTION: '登录名'
  },
  {
    KEY: 'password',
    VALUE: '123456',
    DESCRIPTION: '登录密码'
  },
  {
    KEY: 'password',
    VALUE: '123456',
    DESCRIPTION: '登录密码'
  },
  {
    KEY: 'password',
    VALUE: '123456',
    DESCRIPTION: '登录密码'
  },
  {
    KEY: 'password',
    VALUE: '123456',
    DESCRIPTION: '登录密码'
  }
]);
const tabsList = ref<string[]>(['params', 'Header', 'body']);
const tabsName = ref<string>('params');
const handleClick = (pane: TabsPaneContext, ev: Event) => {
  console.log(pane, ev, '3', pane.paneName);
};
</script>

<style scoped></style>
