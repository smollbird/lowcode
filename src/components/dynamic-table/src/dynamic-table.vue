<template>
  <div>
    <el-table
      :data="props.data"
      border
      max-height="160"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      @cell-click="handleShowInput"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column
        v-for="column in state.columns"
        :key="column.name"
        :prop="column.name"
        :label="column.name"
      >
        <template #default="{ row }">
          <div v-if="!row.notLast">{{ row[column.name] }}</div>
          <div v-else class="append-input">
            <el-input
              v-show="row.hidden"
              v-model="appendForm[column.name]"
              placeholder=""
            ></el-input>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, reactive } from 'vue';
import type { ITableData, ITableColumn } from './types/table-column';
import { usePostman } from '@/store/postmanStore';
import { IQuery } from '@/components/postMan/src/types';
const postman = usePostman();
interface IProps {
  data: ITableData[];
  columns: ITableColumn[];
}
interface IAppend {
  id: string;
  KEY: string;
  VALUE: string;
  DESCRIPTION: string;
  hasSplit: boolean;
}
const appendForm = reactive<IAppend>({
  id: '0',
  KEY: '',
  VALUE: '',
  DESCRIPTION: '',
  hasSplit: false
});
const props = defineProps<IProps>();
const state = reactive({
  ...props
});
const handleShowInput = (row: ITableData) => {
  row.hidden = true;
  if (appendForm.KEY && appendForm.VALUE && appendForm.DESCRIPTION) {
    const done: IQuery = { ...appendForm, id: Math.random() * 1000 + '' };
    state.data.unshift(done);
    postman.pushParamsData(done);
    appendForm.DESCRIPTION = appendForm.KEY = appendForm.VALUE = '';
  }
};
console.log(props);
state.data.push({
  KEY: '',
  VALUE: '',
  DESCRIPTION: '',
  notLast: true,
  hidden: false
});

const multipleSelection = ref<ITableData[]>([]);
const handleSelectionChange = (val: ITableData[]) => {
  multipleSelection.value = val;
};
</script>

<style scoped lang="less">
.append-input {
  width: 100%;
}
</style>
