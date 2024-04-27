<template>
  <div class="header-box">
    <img src="@/assets/img/LOGO.png" alt="" />
    <div class="tab-btn-box">
      <div
        class="tab-btn"
        v-for="item in btns"
        :key="item.name"
        :class="{ active: curTab == item.name }"
        @click="setTab(item)"
      >
        {{ item.name }}
      </div>
    </div>
    <!-- <img src="@/assets/img/导航.png" alt="" style="width: 100vw" /> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const btns = ref([
  {
    name: "农业农村",
    path: "/Nongyenongcun",
  },
  {
    name: "渔业资源",
    path: "/Yuyeziyuan",
  },
  {
    name: "种植资源",
    path: "/Zhongzhiziyuan",
  },
  {
    name: "科技专项",
    path: "/Kejizhuanxiang",
  },
  {
    name: "乡村产业",
    path: "/Xiangcunchanye",
  },
  {
    name: "农业信息",
    path: "/Nongyexinxi",
  },
  {
    name: "农机数据",
    path: "/Nongjishuju",
  },
  // {
  //   name: "畜禽养殖",
  //   path: "/Xuqinyangzhi",
  // },
]);
const curTab = ref(btns.value[0].name);
const setTab = (item: any) => {
  curTab.value = item.name;
  router.push(item.path);
};
</script>

<style scoped lang="scss">
.header-box {
  background: radial-gradient(0% 0% at 0% 0%, #2479c5 0%, #072233 100%);
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
}
.tab-btn-box {
  display: flex;
  align-items: center;
  margin: 0 20px;
  &::before {
    content: "";
    background-image: url("@/assets/img/导航未选中.png");
    width: 20px;
    height: 35px;
    background-position-x: right;
  }
  &::after {
    content: "";
    background-image: url("@/assets/img/导航未选中.png");
    width: 20px;
    height: 35px;
    background-position-x: left;
  }
  .tab-btn {
    background-image: url("@/assets/img/导航未选中.png");
    background-size: contain;
    background-repeat: no-repeat;
    color: rgba($color: #fff, $alpha: 0.7);
    font-size: 16px;
    font-weight: 700;
    width: 160px;
    text-align: center;
    height: 35px;
    line-height: 35px;
    &.active {
      background-image: url("@/assets/img/导航选中.png");
    }
    &:hover {
      background-image: url("@/assets/img/导航选中.png");
    }
  }
}
</style>
