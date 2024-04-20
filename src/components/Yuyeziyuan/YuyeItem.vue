<template>
  <div class="item-box">
    <div class="title">{{ props.title }}</div>
    <slot class="content"></slot>
  </div>
</template>

<script setup lang="ts">
// import { title } from 'process';
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss">
.item-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(14, 33, 55, 0.9);
  border-radius: 8px;
  .title {
    font-family: PingFangSC, PingFang SC;
    font-weight: 600;
    font-size: 18px;
    color: #ffffff;
    text-shadow: 0px 0px 15px rgba(28, 135, 255, 0.8);
    text-align: left;
    font-style: normal;
    height: 26px;
    line-height: 26px;
    padding: 8px 15px;
  }
  .content {
    flex: 1;
  }
}
</style>
