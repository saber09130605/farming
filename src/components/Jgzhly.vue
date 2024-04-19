<template>
  <div class="item-box">
    <ItemTitle title="秸秆综合利用" unit="万吨"></ItemTitle>
    <SubTitle
      subtitle="全年秸秆理论资源总量"
      :value="allValue"
      unit="万吨"
    ></SubTitle>
    <div class="bt-box">
      <img class="bj" src="@/assets/img/圆盘.png" alt="" />
      <div class="bt" ref="barChart"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import * as echarts from "echarts";
import ItemTitle from "./ItemTitle.vue";
import SubTitle from "./SubTitle.vue";

const allValue = ref(16.32);
const barChart = ref<HTMLElement>();
const myChart1 = ref<any>();
const initBarEcharts = () => {
  myChart1.value = echarts.init(barChart.value!);
  console.log({ barChart });
  myChart1.value.setOption({
    compName: "饼图0",
    title: {
      show: false,
      textStyle: {
        color: "#FFFFFF",
        fontSize: 20,
      },
    },
    tooltip: {
      show: true,
    },
    legend: {
      show: true,
      right: 0,
      orient: "vertical",
      itemWidth: 30,
      itemHeight: 10,
      textStyle: {
        fontSize: 12,
        color: "rgba(255, 255, 255, 0.6)",
      },
      // itemGap: 30,
      selector: false,
      selectorLabel: {
        borderRadius: 0,
        color: "#fffff",
        padding: [2, 4, 2, 4],
      },
      selectorPosition: "end",
    },
    series: [
      {
        type: "pie",
        name: "饼图",
        color: [
          "rgba(46, 122, 255, 1)",
          "rgba(70, 168, 247, 1)",
          "rgba(86, 237, 216, 1)",
          "rgba(147, 255, 246, 1)",
          "rgba(56, 60, 227, 1)",
          "rgba(112, 69, 215, 1)",
          "rgba(165, 64, 196, 1)",
          "rgba(255, 207, 40, 1)",
        ],
        label: {
          show: true,
          fontSize: 12,
        },
        data: [
          {
            name: "水稻秸秆",
            value: 100,
          },
          {
            name: "三麦秸秆",
            value: 150,
          },
          {
            name: "油菜秸秆",
            value: 128,
          },
          {
            name: "玉米秸秆",
            value: 139,
          },
          {
            name: "豆类秸秆",
            value: 119,
          },
          {
            name: "其他秸秆",
            value: 101,
          },
        ],
        radius: ["65", "85%"],
        center: ["240", "50%"],
      },
    ],
    dataInfo: {},
    mapModel: {},
  });
};
onMounted(() => {
  initBarEcharts();
});
</script>

<style scoped lang="scss">
.bt-box {
  flex: 1;
  position: relative;
  .bj {
    position: absolute;
    height: 214px;
    left: 132px;
  }
  .bt {
    width: 100%;
    height: 100%;
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
