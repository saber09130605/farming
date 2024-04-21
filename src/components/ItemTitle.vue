<template>
  <div class="title-box">
    <div class="title" :style="{ transform: counterStore.backTransformY }">
      {{ props.title }}
    </div>
    <div
      class="tips"
      v-if="props.unit != ''"
      :style="{ transform: counterStore.backTransformY }"
    >
      单位：{{ props.unit }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from "../store/commonStore";
const counterStore = useCommonStore();
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  unit: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss">
.title-box {
  //
  border-radius: 4px;
  height: 36px;
  width: 90%;
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
  background-image: url("@/assets/img/Yuye/title.png");
  background-size: cover;
  padding-left: 46px;
  box-sizing: border-box;
  .title {
    transform-origin: left;
    flex: 1;
    font-size: 24px;
    text-shadow: #000;
    font-weight: 600;
    background: linear-gradient(0deg, #452ef6, #fff); // 先设置渐变色背景；
    background-clip: text;
    color: transparent;
    padding-bottom: 10px;
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
