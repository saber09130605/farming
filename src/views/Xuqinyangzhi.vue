<template>
  <div class="main">
    <YuyeItem style="width: 588px" title="生猪无害化处理数量统计">
      <template v-slot>
        <div ref="echarts1" style="flex: 1"></div>
      </template>
    </YuyeItem>
    <YuyeItem style="width: 588px; margin: 15px 0" title="年度养殖统计">
      <template v-slot>
        <div ref="echarts2" style="flex: 1"></div>
      </template>
    </YuyeItem>
    <div class="bottom-box">
      <YuyeItem title="年度养殖统计" style="flex: 1">
        <template v-slot>
          <div class="bottom-item-1">
            <div ref="echarts3" style="flex: 1"></div>
            <div></div>
          </div>
        </template>
      </YuyeItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import YuyeItem from "../components/Yuyeziyuan/YuyeItem.vue";
import * as echarts from "echarts";
const echarts1 = ref<HTMLElement>();
const myChart1 = ref<any>();

const echarts2 = ref<HTMLElement>();
const myChart2 = ref<any>();
const initEcharts = () => {
  myChart1.value = echarts.init(echarts1.value!);
  myChart1.value.setOption({
    grid: [
      {
        show: false,
        left: 50,
        right: 30,
        bottom: 36,
        top: "10%",
      },
    ],
    xAxis: {
      axisLabel: {
        show: true,
        color: "#fff",
      },
      axisLine: {
        show: true,
        color: "#fff",
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
    },
    yAxis: {
      type: "category",
      inverse: true,
      axisLabel: {
        show: true,
        color: "#fff",
      },
      axisLine: {
        show: true,
        color: "#fff",
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
      nameTextStyle: {
        color: "#fff",
      },
      data: ["1月", "2月", "3月", "4月", "5月"],
    },
    series: [
      {
        name: "经营主体分布情况",
        data: [65, 120, 130, 70, 60, 190, 100, 70, 60],
        type: "bar",
        showBackground: true,
        barWidth: 10,
        barMaxWidth: 20,
        barMinWidth: 5,
        label: {
          show: true,
          position: "right",
        },
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#83bff6" },
            { offset: 0.5, color: "#188df0" },
            { offset: 1, color: "#188df0" },
          ]),
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#2378f7" },
              { offset: 0.7, color: "#2378f7" },
              { offset: 1, color: "#83bff6" },
            ]),
          },
        },
      },
    ],
  });

  myChart2.value = echarts.init(echarts2.value!);
  myChart2.value.setOption({
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
      data: [
        "司徒镇",
        "延陵镇",
        "珥陵镇",
        "导墅镇",
        "皇塘镇",
        "吕城镇",
        "陵口镇",
        "访仙镇",
        "界牌镇",
        "丹北镇",
        "云阳街道",
        "曲阿街道",
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
        name: "出栏量",
        data: [
          820, 934, 1290, 932, 901, 934, 1290, 1330, 934, 1290, 1330, 1320,
        ],
        type: "bar",
        yAxisIndex: 0,
        label: {
          show: true,
          position: "top",
        },
      },
      {
        name: "存栏量",
        data: [
          790, 832, 934, 1290, 1330, 850, 934, 1290, 870, 1100, 1190, 1250,
        ],
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
  initEcharts();
});
</script>

<style scoped lang="scss">
.main {
  position: fixed;
  top: 90px;
  right: 15px;
  left: 15px;
  bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: self-end;
  > div {
    flex: 1;
  }
  .bottom-box {
    display: flex;
    width: 100%;
  }
}
</style>
