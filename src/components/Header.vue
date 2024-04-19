<template>
  <div class="header-box">
    <!-- <img src="@/assets/img/LOGO.png" alt="" />
    <div class="tab-btn-box">
      <div v-for="item in btns" :key="item.id">
        {{ item.name }}
      </div>
    </div> -->
    <img src="@/assets/img/导航.png" alt="" style="width: 100vw" />
  </div>
</template>

<script setup lang="ts">
// import { ref } from "vue";

// const btns = ref([
//   {
//     name: "农业农村",
//     id: 1,
//   },
// ]);
</script>

<style scoped lang="scss">
.header-box {
  background: radial-gradient(0% 0% at 0% 0%, #030000 0%, #051c2a 100%);
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
}
</style>
