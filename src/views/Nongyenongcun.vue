<template>
  <div class="top-box" style="pointer-events: none">
    <Lssctj style="pointer-events: all"></Lssctj>
    <div class="left-box" style="margin: 15px 0">
      <YuyeItem
        style="
          margin-right: 10px;
          height: 33vh;
          width: 560px;
          pointer-events: all;
        "
        title="农产品基地面积变化"
      >
        <template v-slot>
          <div
            ref="echarts0"
            style="flex: 1; height: auto"
            class="right-box-item-content"
          ></div>
        </template>
      </YuyeItem>
      <!-- <Ncpjdmjbh style="margin-right: 10px"></Ncpjdmjbh> -->
      <Zhen style="flex: 1"></Zhen>
    </div>
    <div class="bottom-box" style="pointer-events: all">
      <YuyeItem style="flex: 1; margin: 0 5px" title="园艺生产统计">
        <template v-slot>
          <div
            ref="echarts1"
            style="flex: 1"
            class="right-box-item-content"
          ></div>
        </template>
      </YuyeItem>
      <YuyeItem
        style="flex: 1; margin: 0 5px; pointer-events: all"
        title="年末农业机械统计"
      >
        <template v-slot>
          <div
            class="item-1"
            style="flex: 1; display: flex; flex-direction: column"
          >
            <SubTitle
              subtitle="年末机械总动力"
              :value="26"
              unit="万千瓦"
            ></SubTitle>
            <div class="item-1-content" style="flex: 1" ref="echarts2"></div>
          </div>
        </template>
      </YuyeItem>
      <YuyeItem style="flex: 1; margin: 0 5px" title="秸秆综合利用">
        <template v-slot>
          <div
            class="item-1"
            style="flex: 1; display: flex; flex-direction: column"
          >
            <SubTitle
              subtitle="全年秸秆理论资源总量"
              :value="16.32"
              unit="万吨"
            ></SubTitle>
            <div class="item-1-content" style="flex: 1" ref="echarts3"></div>
          </div>
        </template>
      </YuyeItem>
      <YuyeItem
        style="flex: 1; margin: 0 5px"
        class="nyntqy"
        title="农业龙头企业"
      >
        <template v-slot>
          <div
            style="flex: 1; display: flex; flex-direction: column"
            class="right-box-item-content"
          >
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
      </YuyeItem>
      <!-- <Jgzhly class="bottom-box-item"></Jgzhly> -->
      <!-- <Nyltqy class="bottom-box-item"></Nyltqy> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import SubTitle from "../components/SubTitle.vue";
import YuyeItem from "../components/Yuyeziyuan/YuyeItem.vue";
import Lssctj from "../components/Lssctj.vue";
// import Ncpjdmjbh from "../components/Ncpjdmjbh.vue";
// import Nyltqy from "../components/Nyltqy.vue";
import Zhen from "../components/Zhen.vue";
import { onMounted, ref } from "vue";
import * as echarts from "echarts";

const echarts0 = ref<HTMLElement>();
const myChart0 = ref<any>();

const echarts1 = ref<HTMLElement>();
const myChart1 = ref<any>();

const echarts2 = ref<HTMLElement>();
const myChart2 = ref<any>();

const echarts3 = ref<HTMLElement>();
const myChart3 = ref<any>();
const initBarEcharts = () => {
  myChart0.value = echarts.init(echarts0.value!);
  myChart0.value.setOption({
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
  myChart1.value = echarts.init(echarts1.value!);
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
      top: 16,
      itemGap: 60,
      textStyle: {
        fontSize: 14, //字体大小
        color: "#ffffff", //字体颜色
      },
    },
    xAxis: {
      data: ["蔬菜", "茶叶", "水果", "花卉"],
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
        name: "今年",
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "bar",
        yAxisIndex: 0,
        label: {
          show: true,
          position: "top",
        },
      },
      {
        name: "去年",
        data: [6000, 5301, 4567, 7563, 4586, 5672, 6666],
        type: "line",
        yAxisIndex: 1,
        label: {
          show: true,
          position: "top",
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
        top: "20%",
      },
    ],
    legend: {
      top: 0,
      show: true,
      left: "10%",
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

  myChart3.value = echarts.init(echarts3.value!);
  myChart3.value.setOption({
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
        radius: ["55%", "73%"],
        center: ["44%", "43.5%"],
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
.nyntqy {
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
}
.top-box {
  position: fixed;
  left: 15px;
  right: 15px;
  top: 90px;
  bottom: 15px;
  display: flex;
  flex-direction: column;
}
.left-box {
  display: flex;
  align-items: flex-end;
}
.bottom-box {
  display: flex;
  flex: 1;
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
