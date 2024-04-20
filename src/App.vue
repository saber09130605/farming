<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Map from "./components/Map.vue";
import { useCommonStore } from "./store/commonStore";
const counterStore = useCommonStore();
// console.log({ counterStore });
// const store = useStore('common')
const originalWidth = 2560; //原始宽度
const originalHeight = 1279; //原始高度
window.addEventListener("resize", function () {
  initSize();
});
const initSize = () => {
  counterStore.sacleX = document.body.clientWidth / originalWidth;
  counterStore.sacleY = document.body.clientHeight / originalHeight;
};
onMounted(() => {
  initSize();
});
</script>

<template>
  <Map></Map>
  <Header></Header>
  <router-view></router-view>
</template>

<style scoped lang="scss"></style>
