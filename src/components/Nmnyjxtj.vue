<template>
  <div class="item-box">
    <ItemTitle :title="title" :unit="unit"></ItemTitle>
    <SubTitle
      subtitle="年末机械总动力"
      :value="allValue"
      unit="万千瓦"
    ></SubTitle>
    <div ref="barChart" :style="{ flex: 1 }"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import * as echarts from "echarts";
import ItemTitle from "./ItemTitle.vue";
import SubTitle from "./SubTitle.vue";
const title = ref("年末农业机械统计");
const unit = ref("台");
const allValue = ref(26);
const barChart = ref<HTMLElement>();
const myChart1 = ref<any>();
const initBarEcharts = () => {
  myChart1.value = echarts.init(barChart.value!);
  console.log({ barChart });
  myChart1.value.setOption({
    grid: [
      {
        show: false,
        bottom: 26,
      },
    ],
    legend: {
      show: true,
      left: 80,
      itemGap: 60,
      textStyle: {
        fontSize: 14, //字体大小
        color: "#ffffff", //字体颜色
      },
    },
    xAxis: {
      data: [
        "大中型拖拉机",
        "小型拖拉机",
        "灌排动力机械",
        "水稻插秧机",
        "稻麦联合收割机",
      ],
    },
    yAxis: [
      {
        type: "value",
        name: "",
        axisLabel: {
          formatter: "{value}",
        },
      },
    ],
    series: [
      {
        name: "年末农业机械总动力",
        data: [21, 45, 75, 86, 31],
        type: "bar",
        yAxisIndex: 0,
        label: {
          show: true,
          position: "top",
        },
      },
    ],
  });
};
onMounted(() => {
  initBarEcharts();
});
</script>

<style scoped lang="scss">
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
  .title-box {
    background: #484d56;
    border-radius: 4px;
    height: 36px;
    // width: 90%;
    margin: 16px auto;
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
    .tips {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.8);
    }
  }
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
    display: flex;
    margin: 0 auto;
    margin-left: -20px;
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
