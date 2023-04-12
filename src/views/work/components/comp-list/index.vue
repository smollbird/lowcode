<template>
  <div class="main-left">
    <div class="first part">
      <div class="comp">组件</div>
      <div class="part-cntent">
        <ul class="comp-menu">
          <li class="active">布局</li>
          <li>通用</li>
          <li>data</li>
        </ul>
        <ul class="comp-menu-list">
          <li class="active">布局</li>
          <li>通用</li>
          <li>data</li>
        </ul>
      </div>
    </div>

    <div class="second part">
      <div class="comp comp-input">
        <el-input size="small" placeholder="请输入" v-model="value" />
      </div>
      <div>
        <ul>
          <li v-for="val in 5" :key="val">
            <comp-item></comp-item>
          </li>
        </ul>
      </div>
    </div>

    <div class="third part hidden">
      <div class="comp">
        <div>图层</div>
        <div>&lt;</div>
      </div>
      <div class="border1px">
        <ul>
          <li v-for="val in 5" :key="val"><Layer></Layer></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import compItem from './comp-item.vue';
import Layer from './layer.vue';
const value = ref('');
</script>

<style scoped lang="less">
.part .comp {
  display: flex;
}
.main-left {
  display: flex;
  height: 100%;

  background-color: @background-color--base;
  .part {
    flex: 1;
    .comp {
      display: flex;
      justify-content: space-between;
      padding: 8px;
      height: 24px;
      line-height: 24px;
      font-size: 14px;
      color: @color--normal;
      background-color: @background-color--normal;
      border-bottom: 1px solid @background-color--base;
      & /deep/ .el-input__wrapper {
        background-color: #39393a;
      }
    }
    .part-cntent {
      display: flex;
      height: 100%;
      .comp-menu {
        flex: 1;
        background-color: @background-color--normal;
        li {
          margin: 8px;
          padding: 8px 6px;
          width: 45px;
          font-size: 16px;
          color: @color--normal;
          border-radius: 4px;
          cursor: pointer;
          transition: 0.3s;

          &:hover {
            background-color: @background-color--hover;
          }
          &.active {
            color: @color--active;
            background-color: @background-color--active;
          }
        }
      }
      .comp-menu-list {
        flex: 1;
        background-color: @background-color--box;
        width: 65px;
        li {
          margin: 4px 10px;
          padding: 4px;

          font-size: 14px;
          color: @color--normal;
          border-radius: 4px;
          cursor: pointer;
          transition: 0.3s;
          &:hover {
            background-color: @background-color--hover;
          }
          &.active {
            color: @color--active;
            background-color: @background-color--active;
          }
        }
      }
    }
  }
  .third {
    background-color: #232324;
    border-left: 2px solid #18181c;
    transition: 0.5s;
    &.hidden {
      width: 0;
      border: none;
    }
  }
}
</style>
