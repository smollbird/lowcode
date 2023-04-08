<template>
  <div>home</div>
  <el-button @click="handleToPage" type="primary">to work page</el-button>
</template>

<script setup lang="ts">
import router from '@/router';
const handleToPage = () => {
  router.push({ name: 'work' });
};
</script>

<style scoped></style>
