<template>
  <div class="item-box">
    <ItemTitle :title="title" :unit="unit"></ItemTitle>
    <div ref="barChart" :style="{ width: '545px', height: '270px' }"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import * as echarts from "echarts";
import ItemTitle from "./ItemTitle.vue";
const title = ref("农产品基地面积变化");
const unit = ref("公顷");

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
        top: 70,
      },
    ],
    legend: {
      show: true,
      left: 80,
      top: 20,
      itemGap: 60,
      textStyle: {
        fontSize: 14, //字体大小
        color: "#ffffff", //字体颜色
      },
    },
    xAxis: {
      data: [2017, 2018, 2019, 2020, 2021, 2022, 2023],
    },
    yAxis: [
      {
        type: "value",
        name: "",
        axisLabel: {
          formatter: "{value}",
        },
      },
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
        name: "绿色食品基地",
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "bar",
        yAxisIndex: 0,
        label: {
          show: true,
          position: "top",
        },
      },
      {
        name: "有机农产品基地",
        data: [790, 832, 850, 870, 1100, 1190, 1250],
        type: "bar",
        yAxisIndex: 0,
        label: {
          show: true,
          position: "top",
        },
      },
      {
        name: "省级绿色优质农产品基地",
        data: [6000, 5301, 4567, 7563, 4586, 5672, 6666],
        type: "line",
        yAxisIndex: 1,
        label: {
          show: true,
          position: "top",
        },
        itemStyle: {
          color: "#2fce98",
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
  background-color: rgba(14, 33, 55, 0.9);
  width: 560px;
  height: auto;
  padding: 20px;
  border-radius: 8px;

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
