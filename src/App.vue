<script setup lang="ts">
import Header from "./components/Header.vue";
import Map from "./components/Map.vue";
import Lssctj from "./components/Lssctj.vue";
import Ncpjdmjbh from "./components/Ncpjdmjbh.vue";
import Yysctj from "./components/Yysctj.vue";
import Nmnyjxtj from "./components/Nmnyjxtj.vue";
import Jgzhly from "./components/Jgzhly.vue";
import Nyltqy from "./components/Nyltqy.vue";
import Zhen from "./components/Zhen.vue";
</script>

<template>
  <Map></Map>
  <Header></Header>
  <Lssctj style="top: 100px; left: 30px"></Lssctj>
  <Ncpjdmjbh style="top: 470px; left: 30px"></Ncpjdmjbh>
  <Zhen style="right: 30px; bottom: 431px; position: fixed; left: 643px"></Zhen>
  <div class="bottom-box">
    <Yysctj class="bottom-box-item"></Yysctj>
    <Nmnyjxtj class="bottom-box-item"></Nmnyjxtj>
    <Jgzhly class="bottom-box-item"></Jgzhly>
    <Nyltqy class="bottom-box-item"></Nyltqy>
  </div>
</template>

<style scoped lang="scss">
.bottom-box {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 30px;
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
