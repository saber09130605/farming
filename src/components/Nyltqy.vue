<template>
  <div class="item-box">
    <ItemTitle title="农业龙头企业" unit=""></ItemTitle>
    <div class="content-box">
      <div class="item item-1 guojia">
        <div><span style="font-size: 24px">2</span>个</div>
        <div>国家级</div>
      </div>
      <div class="item item-2 shen">
        <div><span style="font-size: 24px">15</span>个</div>
        <div>省级</div>
      </div>
      <div class="item item-1 shi">
        <div><span style="font-size: 24px">13</span>个</div>
        <div>市级</div>
      </div>
      <div class="item item-2 qu">
        <div><span style="font-size: 24px">7</span>个</div>
        <div>区级</div>
      </div>
      <div class="all-item">
        <div><span style="font-size: 26px">7</span>个</div>
        <div>总数</div>
      </div>
      <!-- <img src="@/assets/img/中间部分.png" alt="" /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import ItemTitle from "./ItemTitle.vue";

onMounted(() => {
  // initBarEcharts();
});
</script>

<style scoped lang="scss">
.content-box {
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .all-item {
    padding-bottom: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    width: 190px;
    height: 115px;
    background-image: url("@/assets/img/中间部分.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  .item {
    position: absolute;
    width: 180px;
    height: 108px;
    background-size: cover;
    color: #ffffff;
    box-sizing: border-box;
    text-align: center;
    font-size: 16px;
  }
  .item-1 {
    padding: 6px 0 0 58px;
  }
  .item-2 {
    padding: 6px 58px 0 0;
  }
  .guojia {
    left: 20px;
    top: 10px;
    background-image: url("@/assets/img/111.png");
  }
  .shen {
    top: 10px;
    right: 20px;
    background-image: url("@/assets/img/222.png");
  }
  .shi {
    left: 20px;
    bottom: -20px;
    background-image: url("@/assets/img/333.png");
  }
  .qu {
    right: 20px;
    bottom: -20px;
    background-image: url("@/assets/img/444.png");
  }
}
.item-box {
  //   border: #2f9ddf 1px solid;
  // position: fixed;
  background-color: rgba(14, 33, 55, 0.9);
  // width: 560px;
  height: auto;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  .content-tab-box {
    display: flex;
    justify-content: space-around;
    width: 70%;
    margin: 10px auto;
    .content-tab {
      width: 120px;
      height: 36px;
      border: 1px solid #3c5973;
      border-radius: 2px;
      font-weight: 400;
      font-size: 20px;
      color: #4e7190;
      line-height: 36px;
      text-align: center;
      &.active {
        border-color: #a3d4ff;
        color: #ffffff;
        // background: linear-gradient(90deg, #ffffff 0%, #9fcaff 100%);
      }
    }
  }
  .content-box {
    // display: flex;
    // margin: 0 auto;
    // margin-left: -20px;
    .content-item {
      display: flex;
      align-items: center;
      width: 230px;
      .content-item-main {
        text-align: center;
        color: #ffffff;
        font-size: 24px;
        flex: 1;
        // .name {
        // //   font-size: 26px;
        // }
        // .value {
        //     // font-size: ;
        // }
      }
    }
  }
}
</style>
