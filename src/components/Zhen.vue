<template>
  <div class="item-box">
    <div class="title" :style="{ transform: counterStore.backTransformY }">
      XXX镇
    </div>
    <div class="content-box">
      <div
        v-for="item in data"
        :key="item.name"
        class="item"
        :style="{ transform: counterStore.backTransformY }"
      >
        {{ item.name }}： <span style="font-size: 18px">{{ item.value }}</span>
        {{ item.unit }}
      </div>
    </div>
    <!-- <img src="@/assets/img/万吨.png" alt="" /> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCommonStore } from "../store/commonStore";
const counterStore = useCommonStore();

const data = ref([
  {
    name: "总面积",
    value: 79455621,
    unit: "公顷",
  },
  {
    name: "耕地面积",
    value: 79.4,
    unit: "平方千米",
  },
  {
    name: "集镇面积",
    value: 79.4,
    unit: "平方千米",
  },
  {
    name: "油料总产",
    value: 769.4,
    unit: "万吨",
  },
  {
    name: "蔬菜总产",
    value: 69.4,
    unit: "万吨",
  },
  {
    name: "水产品总产",
    value: 79.4,
    unit: "吨",
  },
  {
    name: "果品总产",
    value: 369.4,
    unit: "万吨",
  },
  {
    name: "肉类总产",
    value: 79.4,
    unit: "万吨",
  },
  {
    name: "茶叶总产",
    value: 79.4,
    unit: "万吨",
  },
]);
</script>

<style scoped lang="scss">
.content-box {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  .item {
    font-size: 16px;
    background-image: url("@/assets/img/万吨.png");
    background-size: contain;
    height: 42px;
    width: 200px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.item-box {
  display: flex;
  color: #fff;
  background-color: rgba(14, 33, 55, 0.9);
  // width: 560px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 18px 18px 18px rgb(1 28 51), 18px -18px 18px rgb(1 28 51),
    -18px 18px 18px rgb(1 28 51), -18px -18px 18px rgb(1 28 51);
  .title {
    background-image: url("@/assets/img/XXX镇台.png");
    background-size: cover;
    text-align: center;
    box-sizing: border-box;
    padding-top: 30px;
    height: 190px;
    width: 186px;
    font-size: 24px;
  }
}
</style>
