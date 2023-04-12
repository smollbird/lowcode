<template>
  <div class="comp-item">
    <div class="comp-item-title">header</div>
    <div class="comp-item-img">
      <div class="comp-item-img-content">
        <img src="@/assets/logo.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.comp-item {
  margin: 10px;
  background-color: @background-color--normal;
  border-radius: 8px;
  cursor: pointer;
  .comp-item-title {
    padding: 2px 10px;
    color: @color--normal;
    text-align: right;
    background-color: @background-color--title;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .comp-item-img {
    padding: 8px 12px;
    overflow: hidden;
    .comp-item-img-content {
      overflow: hidden;
      width: 140px;
      height: 100px;
      background-color: @background-color--img-back;
      border-radius: 6px;
      transition: 0.3s;
      &:hover {
        transform: scale(1.09);
      }
      img {
        width: 140px;
        height: 100px;
        border-radius: 6px;
      }
    }
  }
}
</style>
