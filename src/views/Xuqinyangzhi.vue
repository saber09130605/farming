<template>
  <div class="main" style="pointer-events: none">
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
            <div ref="echarts3" style="flex: 1; flex-basis: 60%"></div>
            <div class="right">
              <div
                class="b-i-1-item"
                v-for="item in bottomItemData1"
                :key="item.name"
                :style="{ backgroundImage: `url(/img/xqyz/${item.name}.png)` }"
              >
                <div>
                  <div>存栏量</div>
                  <span>{{ item.value1 }}</span>
                </div>
                <div>
                  <div>出栏量</div>
                  <span>{{ item.value2 }}</span>
                </div>
              </div>
            </div>
          </div>
        </template>
      </YuyeItem>
      <YuyeItem title="动物屠宰检疫" style="margin: 0 15px; width: 350px">
        <template v-slot>
          <div class="bottom-item-2" style="flex: 1">
            <div class="title">检疫出证情况</div>
            <div class="content">
              <div
                class="bottom-item-2-item"
                v-for="item in bottomItemData2"
                :key="item.name"
              >
                <div>{{ item.value }}</div>
                <div>{{ item.name }}</div>
              </div>
            </div>
          </div>
        </template>
      </YuyeItem>
      <YuyeItem title="年度生猪屠宰统计" style="margin: 0 15px">
        <template v-slot>
          <div class="bottom-item-3" style="flex: 1">
            <div>
              <div class="value" style="color: #00adff">31</div>
              <div class="name">屠宰场（家）</div>
            </div>
            <div>
              <div class="value" style="color: #8affba">29464</div>
              <div class="name">生猪屠宰量</div>
            </div>
          </div>
        </template>
      </YuyeItem>
      <YuyeItem title="免疫防控统计" style="width: 500px">
        <template v-slot>
          <div style="flex: 1" ref="echarts4"></div>
        </template>
      </YuyeItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import YuyeItem from "../components/Yuyeziyuan/YuyeItem.vue";
import * as echarts from "echarts";
const bottomItemData2 = ref([
  {
    name: "产品A证（份）",
    value: 12,
  },
  {
    name: "产品B证（份）",
    value: 243,
  },
  {
    name: "动物产品数（头）",
    value: 345,
  },
  {
    name: "产品C证（份）",
    value: 235,
  },
]);
const bottomItemData1 = ref([
  {
    name: "猪",
    value1: "10.77万",
    value2: "13.13万",
  },
  {
    name: "牛",
    value1: "10.77万",
    value2: "13.13万",
  },
  {
    name: "羊",
    value1: "10.77万",
    value2: "13.13万",
  },
  {
    name: "鸡",
    value1: "10.77万",
    value2: "13.13万",
  },
]);

const echarts1 = ref<HTMLElement>();
const myChart1 = ref<any>();

const echarts2 = ref<HTMLElement>();
const myChart2 = ref<any>();

const echarts3 = ref<HTMLElement>();
const myChart3 = ref<any>();

const echarts4 = ref<HTMLElement>();
const myChart4 = ref<any>();
const initEcharts = () => {
  myChart4.value = echarts.init(echarts4.value!);
  myChart4.value.setOption({
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
      data: ["禽流感", "猪瘟", "非洲猪瘟", "蓝耳病", "布鲁氏菌"],
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
        name: "监测数",
        data: [25000, 58000, 22000, 57000, 57000],
        type: "bar",
        yAxisIndex: 0,
        label: {
          show: true,
          position: "top",
        },
      },

      {
        name: "合格率",
        data: [30, 45, 20, 12, 50],
        type: "line",
        yAxisIndex: 1,
        label: {
          show: true,
          position: "top",
        },
        // itemStyle: {
        //   color: "#2fce98",
        // },
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
        areaStyle: {
          opacity: 0.7,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(128, 255, 165)",
            },
            {
              offset: 1,
              color: "rgb(1, 191, 236)",
            },
          ]),
        },
      },
    ],
  });
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

  myChart3.value = echarts.init(echarts3.value!);
  myChart3.value.setOption({
    legend: {
      show: true,
      left: "center",
      bottom: 0,
      itemGap: 20,
      textStyle: {
        fontSize: 16,
        color: "rgba(255, 255, 255)",
      },
    },
    series: [
      {
        type: "pie",
        name: "各乡镇养殖量对比",
        color: [
          "#c9d65e",
          "#9441d0",
          "#c95941",
          "#5cbca6",
          "#d69f45",
          "#4363d4",
        ],
        emphasis: {
          disabled: true, // 是否关闭高亮状态
        },
        tooltip: {
          show: false, // 是否展示提示框浮层
        },
        labelLine: {
          //图形外文字线
          normal: {
            length: 35,
            length2: 20,
          },
        },

        label: {
          normal: {
            show: true,
            formatter: "{name|{b}} {value|{c}}",
            rich: {
              name: {
                color: "#fff",
              },
              value: {
                color: "inherit",
              },
            },
          },
        },
        data: [
          {
            name: "猪",
            value: 100,
            color: "#c9d65e",
            img: "/img/Yuye/编组 18.png",
          },
          {
            name: "牛",
            value: 200,
            color: "#9441d0",
            img: "/img/Yuye/编组 18备份.png",
          },
          {
            name: "羊",
            value: 200,
            color: "#c95941",
            img: "/img/Yuye/编组 18备份 2.png",
          },
          {
            name: "禽类",
            value: 500,
            color: "#5cbca6",
            img: "/img/Yuye/编组 18备份 3.png",
          },
          {
            name: "其他",
            value: 600,
            color: "#d69f45",
            img: "/img/Yuye/编组 18备份 4.png",
          },
        ],
        radius: ["50%", "68%"],
        center: ["50%", "50%"],
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
    .bottom-item-3 {
      display: flex;
      justify-content: space-around;
      text-align: center;
      color: #fff;
      padding: 33px 20px 0;
      > div {
        width: 144px;
        height: 219px;
        padding-top: 100px;
        box-sizing: border-box;
        .value {
          font-size: 38px;
        }
        .name {
          font-size: 19px;
        }
        &:first-child {
          background-image: url("/img/xqyz/编组 30.png");
          margin-right: 20px;
        }
        &:last-child {
          background-image: url("/img/xqyz/编组 30备份.png");
        }
      }
    }
    .bottom-item-2 {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .title {
        width: 292px;
        height: 72px;
        box-sizing: border-box;
        background-image: url("/img/xqyz/编组 31.png");
        text-align: center;
        line-height: 72px;
        font-weight: 600;
        font-size: 18px;
        color: #9fd0ff;
      }
      .content {
        display: flex;
        flex-wrap: wrap;
        margin: 0 27px;
        box-sizing: border-box;
        .bottom-item-2-item {
          width: 146px;
          height: 45px;
          color: #fff;
          background-image: url("/img/xqyz/编组 32.png");
          background-repeat: no-repeat;
          box-sizing: border-box;
          padding-left: 50px;
          margin-bottom: 10px;
        }
      }
    }
    .bottom-item-1 {
      flex: 1;
      display: flex;
      .right {
        flex: 1;
        flex-basis: 40%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .b-i-1-item {
          width: 263px;
          height: 55px;
          color: #fff;
          display: flex;
          justify-content: space-between;
          box-sizing: border-box;
          padding: 6px 47px;
        }
      }
    }
  }
}
</style>
