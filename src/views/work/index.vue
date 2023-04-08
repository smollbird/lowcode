<template>
  <div>
    work

    <el-button type="primary" @click="back">back</el-button>
    <el-dialog
      :before-close="dialogBeforeClose"
      title="设置接口信息"
      v-model="dialogVisible"
      width="60%"
      align-center
    >
      <div>
        <PostMan />
      </div>
      <template #footer>
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
import PostMan from '@/components/postMan/index';
// import { ElMessageBox } from 'element-plus';

const dialogVisible = ref(true);
const dialogBeforeClose = () => {
  // ElMessageBox.confirm('Are you sure to close this dialog?')
  //   .then(() => {
  //     done();
  //   })
  //   .catch(() => {
  //     // catch error
  //   });
};
const back = () => {
  router.go(-1);
};
</script>

<style lang="scss" scoped></style>
