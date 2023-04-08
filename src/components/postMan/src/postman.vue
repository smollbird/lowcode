<template>
  <div>
    <Header></Header>
    <el-divider />
    <RequestPart></RequestPart>
    <Params></Params>
    <el-divider />
    <div class="response">response</div>
  </div>
</template>

<script setup lang="ts">
import Header from './components/header.vue';
import RequestPart from './components/requestPart.vue';
import Params from './components/params.vue';
import { useData } from './hooks';
useData();
</script>

<style scoped>
.response {
  max-height: 160px;
  border: 1px solid #000;
}
</style>
