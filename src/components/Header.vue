<template>
  <div class="header-box">
    <img style="width: 290px" src="@/assets/img/LOGO.png" alt="" />
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
    <div style="margin: 0 10px; display: flex; color: #fff">
      <el-select
        v-model="value1"
        placeholder="Select"
        size="large"
        style="width: 100px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <div
        style="border: 1px #ebebeb solid; margin: 0 10px; opacity: 0.4"
      ></div>
      <div style="display: flex; align-items: center; font-size: 18px">
        <img
          style="width: 20px; height: 20px; margin-right: 8px"
          src="data:image/jpeg;base64,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"
          alt=""
        />
        晴 14°C
      </div>
      <div
        style="border: 1px #ebebeb solid; margin: 0 10px; opacity: 0.4"
      ></div>
      <div class="timer-box" style="display: flex">
        <div style="font-size: 26px; margin-right: 6px">{{ timer }}</div>
        <div style="text-align: center">
          <div>{{ dayName }}</div>
          <div>{{ dateName }}</div>
        </div>
      </div>
      <div
        style="border: 1px #ebebeb solid; margin: 0 10px; opacity: 0.4"
      ></div>
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
    </div>
    <!-- <img src="@/assets/img/导航.png" alt="" style="width: 100vw" /> -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const value1 = ref("2023");
const options = ref([
  { label: "2023", value: 2023 },
  { label: "2022", value: 2022 },
  { label: "2021", value: 2021 },
]);
const router = useRouter();
const weekDays = [
  "星期日",
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六",
];
const timer = ref("");
const dayName = ref("");
const dateName = ref("");
onMounted(() => {
  setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let minute: string | number = date.getMinutes();
    if (minute < 10) {
      minute = `0` + minute;
    }
    timer.value = `${hour}:${minute}`;
    let dayOfWeek = date.getDay();
    dayName.value = weekDays[dayOfWeek];
    let year = date.getFullYear();
    let month = date.getMonth() + 1; // 月份是从0开始的
    let day = date.getDate();
    dateName.value = `${year}/${month}/${day}`;
  }, 1000);
});
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
  {
    name: "农机作业",
    path: "/Nongjizuoye",
  },
  {
    name: "畜禽养殖",
    path: "/Xuqinyangzhi",
  },
  {
    name: "乡村建设",
    path: "/Xiangecunjianshe",
  },
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
  height: 74px;
  display: flex;
  align-items: center;
}
.tab-btn-box {
  display: flex;
  align-items: center;
  margin: 0 20px;
  flex: 1;
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
    background-size: 100% 100%;
    background-repeat: no-repeat;
    color: rgba($color: #fff, $alpha: 0.7);
    font-size: 16px;
    font-weight: 700;
    flex: 1;
    width: auto;
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
