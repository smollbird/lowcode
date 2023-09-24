<template>
  <div class="layer active">
    <div class="layer-img-content">
      <img src="@/assets/logo.png" alt="" />
    </div>
    <p class="text-ellipsis">header</p>
    <div>🔒</div>
    <div>👀</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.layer {
  display: flex;
  align-items: center;
  margin: 10px 15px;
  padding: 2px 8px;
  border-radius: 6px;
  &:hover,
  &.active {
    background-color: #313132;
  }
  .layer-img-content {
    overflow: hidden;
    height: 42px;
    background-color: @background-color--img-back;
    border-radius: 6px;
    img {
      width: auto;
      height: 42px;
    }
  }
  p {
    width: 50px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: @color--normal;
  }
}
</style>
