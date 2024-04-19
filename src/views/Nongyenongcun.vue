<template>
  <div class="top-box" :style="{ transform: counterStore.transformY }">
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

<script setup lang="ts">
import Lssctj from "../components/Lssctj.vue";
import Ncpjdmjbh from "../components/Ncpjdmjbh.vue";
import Yysctj from "../components/Yysctj.vue";
import Nmnyjxtj from "../components/Nmnyjxtj.vue";
import Jgzhly from "../components/Jgzhly.vue";
import Nyltqy from "../components/Nyltqy.vue";
import Zhen from "../components/Zhen.vue";
// import { onMounted } from "vue";
import { useCommonStore } from "../store/commonStore";
const counterStore = useCommonStore();
// console.log(23333333);
</script>

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
