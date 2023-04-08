<template>
  <div>
    <div>
      <!-- <div>全局配置</div> -->
      <el-row :gutter="5">
        <el-col :span="16">
          <el-input
            :disabled="isHostConfig"
            v-model="host"
            placeholder="例:http://127.0.0.1:8080"
          >
            <template #prepend>host</template>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-input
            :disabled="isHostConfig"
            v-model="time"
            placeholder="更新间隔时间"
          >
            <template #append>
              <el-select
                :disabled="isHostConfig"
                style="width: 60px"
                v-model="timeUnit"
              >
                <el-option
                  v-for="item in timeUnits"
                  :key="item.label"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select> </template
          ></el-input>
        </el-col>
        <el-col :span="4">
          <el-button
            @click="isHostConfig = !isHostConfig"
            style="width: 100%"
            type="primary"
            >修改配置</el-button
          >
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getContext } from '../hooks';
import { ref } from 'vue';
const isHostConfig = ref(true);
const { host, time, timeUnits, timeUnit } = getContext();
</script>

<style scoped></style>
