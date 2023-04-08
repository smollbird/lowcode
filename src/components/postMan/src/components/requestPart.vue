<template>
  <div>
    <div>
      <el-row :gutter="10">
        <el-col :span="22">
          <el-input v-model="requestAddress" placeholder="Please input">
            <template #prepend>
              <el-select style="width: 120px" v-model="requestMethod">
                <el-option
                  v-for="value in methods"
                  :key="value"
                  :label="value"
                  :value="value"
                />
              </el-select>
            </template> </el-input
        ></el-col>
        <el-col :span="2">
          <el-button type="primary" style="width: 100%">Send</el-button></el-col
        >
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getContext } from '../hooks';

const { requestAddress, requestMethod, methods } = getContext();
</script>

<style scoped></style>
