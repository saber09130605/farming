<template>
  <div class="title-box">
    <div class="title" :style="{ transform: counterStore.backTransformY }">
      {{ props.subtitle }}
    </div>
    <div class="tips">
      <span
        style="font-size: 18px"
        :style="{ transform: counterStore.backTransformY }"
        >{{ props.value }}</span
      >
      {{ props.unit }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from "../store/commonStore";
const counterStore = useCommonStore();
const props = defineProps({
  subtitle: {
    type: String,
    default: "",
  },
  value: {
    type: Number,
    default: 0,
  },
  unit: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss">
.title-box {
  // background: #484d56;
  border-radius: 4px;
  height: 36px;
  width: 90%;
  margin: 16px auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: PingFangSC, PingFang SC;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  line-height: 22px;
  text-align: left;
  font-style: normal;
  .title {
    transform-origin: left;
    background: linear-gradient(0deg, #452ef6, #fff); // 先设置渐变色背景；
    background-clip: text;
    color: transparent;
  }
  .tips {
    transform-origin: right;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.8);
    background: linear-gradient(0deg, #452ef6, #fff); // 先设置渐变色背景；
    background-clip: text;
    color: transparent;
  }
}
</style>
