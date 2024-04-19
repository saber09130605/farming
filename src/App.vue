<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import Header from "./components/Header.vue";
import Map from "./components/Map.vue";
import Lssctj from "./components/Lssctj.vue";
import Ncpjdmjbh from "./components/Ncpjdmjbh.vue";
import Yysctj from "./components/Yysctj.vue";
import Nmnyjxtj from "./components/Nmnyjxtj.vue";
import Jgzhly from "./components/Jgzhly.vue";
import Nyltqy from "./components/Nyltqy.vue";
import Zhen from "./components/Zhen.vue";
const originalWidth = 2560; //原始宽度
const originalHeight = 1279; //原始高度
window.addEventListener("resize", function () {
  initSize();
});
const sacleX = ref(1);
const sacleY = ref(1);
const initSize = () => {
  sacleX.value = document.body.clientWidth / originalWidth;
  sacleY.value = document.body.clientHeight / originalHeight;
};
onMounted(() => {
  initSize();
});

const transform = computed(() => {
  return `scaleX(${sacleX.value}) scaleY(${sacleY.value})`;
});
const transformY = computed(() => {
  return `scaleY(${sacleY.value})`;
});
const transformX = computed(() => {
  return `scaleX(${sacleX.value})`;
});
</script>

<template>
  <Map></Map>
  <Header></Header>
  <div class="top-box" :style="{ transform: transformY }">
    <Lssctj style="margin-bottom: 10px"></Lssctj>
    <div class="left-box">
      <Ncpjdmjbh style="margin-right: 10px"></Ncpjdmjbh>
      <Zhen style="flex: 1"></Zhen>
    </div>
    <div class="bottom-box">
      <Yysctj class="bottom-box-item"></Yysctj>
      <Nmnyjxtj class="bottom-box-item"></Nmnyjxtj>
      <Jgzhly class="bottom-box-item"></Jgzhly>
      <Nyltqy class="bottom-box-item"></Nyltqy>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top-box {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 30px;
  transform-origin: bottom left;
}
.left-box {
  display: flex;
  align-items: flex-end;
}
.bottom-box {
  margin-top: 10px;
  display: flex;
  height: 390px;
  justify-content: space-between;
  .bottom-box-item {
    flex: 1;
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
