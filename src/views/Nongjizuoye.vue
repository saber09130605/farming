<template>
  <div class="main">
    <div class="left-box">
      <!-- 左边 -->
      <YuyeItem title="农机作业总量统计">
        <template v-slot>
          <div class="left-box-item-content">
            <div ref="echartA" style="width: 100%; height: 100%"></div>
            <div class="echarts2-legend">
              <div
                v-for="item in echarts2Legend"
                :key="item.name"
                :style="{ backgroundImage: `url('${item.img}')` }"
              >
                {{ item.name }}
                <span :style="{ color: item.color }">{{ item.value }}</span>
              </div>
            </div>
          </div>
        </template>
      </YuyeItem>
      <YuyeItem title="农机作业效率统计">
        <template v-slot>
          <div class="item2 left-box-item-content">
            <div ref="echartB" style="width: 100%; height: 100%"></div>
          </div>
        </template>
      </YuyeItem>

      <YuyeItem title="北斗农机占比分析">
        <template v-slot>
          <div
            class="item3 left-box-item-content"
            style="width: 100%; height: 100%; position: relative"
          >
            <div ref="echartC" style="width: 100%; height: 100%"></div>
          </div>
        </template>
      </YuyeItem>
    </div>
    <!-- 中间 -->
    <div class="center-box">
      <YuyeItem title="区域农机及作业面积统计">
        <template v-slot>
          <div style="height: 280px; display: flex">
            <div class="center-box-left">
              <div
                class="box1 bgcenter"
                style="background-image: url('/public/img/zuoye/box1.png')"
              >
                <p>
                  <span class="num">205</span>
                  <span>台</span>
                </p>
                <p><span>农机总数</span></p>
              </div>
              <div
                class="box2 bgcenter"
                style="background-image: url('/public/img/zuoye/box2.png')"
              >
                <p>
                  <span class="num">215</span>
                  <span>亩</span>
                </p>
                <p><span>作业总面积</span></p>
              </div>
            </div>
            <div ref="echarts3" class="center-box-right echartBox"></div>
          </div>
        </template>
      </YuyeItem>
    </div>
    <!-- 右边 -->
    <div class="right-box">
      <YuyeItem title="北斗农机在线统计">
        <template v-slot>
          <div class="item4">
            <div
              class="box bgcenter"
              v-for="(item, idx) in item4Data"
              :key="idx"
              :style="{ backgroundImage: `url('${item.url}')` }"
            >
              <div class="box-left"></div>
              <div class="box-right">
                <p>{{ item.title }}</p>
                <p>
                  <span class="num2">{{ item.num }}</span
                  >{{ item.nuit }}
                </p>
              </div>
            </div>
          </div>
        </template>
      </YuyeItem>

      <YuyeItem title="最新动态">
        <template v-slot>
          <div class="carousel">
            <div class="carousel-images">
              <img
                :src="images[currentIndex]"
                :alt="'Image ' + (currentIndex + 1)"
                v-for="(image, index) in images"
                :key="index"
                class="carousel-image"
              />
              <div style="margin: 0 10%; border: solid 1px #41f4ff">
                <p>郝冬云</p>
                <p style="text-align: right">
                  <span style="float: left">2024-05-05</span>
                  <span>682205332158</span>
                </p>
              </div>
            </div>
            <div>
              <p
                @click="previousImage"
                :disabled="currentIndex === 0"
                style="
                  position: absolute;
                  left: 3%;
                  top: 18%;
                  width: 6%;
                  height: 50%;
                  background: url('/public/img/zuoye/jt1.png') center center
                    no-repeat;
                  cursor: pointer;
                  z-index: 999;
                "
              ></p>
              <p
                @click="nextImage"
                :disabled="currentIndex === images.length - 1"
                style="
                  position: absolute;
                  right: 3%;
                  top: 18%;
                  width: 6%;
                  height: 50%;
                  background: url('/public/img/zuoye/jt2.png') center center
                    no-repeat;
                  cursor: pointer;
                  z-index: 999;
                "
              ></p>
            </div>
            <div class="carousel-thumbnails">
              <img
                :src="
                  images[(currentIndex - 1 + images.length) % images.length]
                "
                class="carousel-thumbnail"
              />
              <img
                :src="images[(currentIndex + 1) % images.length]"
                class="carousel-thumbnail"
              />
            </div>
          </div>
        </template>
      </YuyeItem>

      <YuyeItem title="年度作业统计">
        <template v-slot>
          <div class="right-box-item-content">
            <div ref="echartF" style="width: 100%; height: 100%"></div>
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

const echartsNum = ref<HTMLElement>();
const mychartsNum = ref<any>();

const echarts3 = ref<HTMLElement>();
const myChart3 = ref<any>();

const echartA = ref<HTMLElement>();
const myChartA = ref<any>();
const echartB = ref<HTMLElement>();
const myChartB = ref<any>();
const echartC = ref<HTMLElement>();
const myChartC = ref<any>();
const echartD = ref<HTMLElement>();
const myChartD = ref<any>();
const echartF = ref<HTMLElement>();
const myChartF = ref<any>();

const echarts2Legend = ref([
  {
    name: "耕种作业",
    value: 100,
    color: "#c9d65e",
    img: "/img/Yuye/编组 18.png",
  },
  {
    name: "播种作业",
    value: 200,
    color: "#9441d0",
    img: "/img/Yuye/编组 18备份.png",
  },
  {
    name: "施肥职业",
    value: 300,
    color: "#c95941",
    img: "/img/Yuye/编组 18备份 2.png",
  },
  {
    name: "收割作业",
    value: 400,
    color: "#5cbca6",
    img: "/img/Yuye/编组 18备份 3.png",
  },
  {
    name: "打药作业",
    value: 500,
    color: "#4363d4",
    img: "/img/Yuye/编组 18备份 5.png",
  },
]);

const item4Data = [
  {
    title: "农机总数",
    num: "31",
    nuit: "台",
    url: "/public/img/zuoye/item4-1.png",
    color: "#C6D2FF",
  },
  {
    title: "当前在线",
    num: "278",
    nuit: "台",
    color: "#C6FEFF",
    url: "/public/img/zuoye/item4-2.png",
  },
  {
    title: "当前离线",
    num: "56",
    nuit: "台",
    color: "#FFF9C6",
    url: "/public/img/zuoye/item4-3.png",
  },
  {
    title: "检测类型",
    num: "5",
    nuit: "种",
    color: "#FFC6F7",
    url: "/public/img/zuoye/item4-4.png",
  },
  {
    title: "年度新增数",
    num: "33",
    nuit: "台",
    color: "#FFF9C6",
    url: "/public/img/zuoye/item4-5.png",
  },
];

const item5Data = {
  data1: [
    { title: "农机年末服务收入", num: 1789 },
    { title: "农机年末投入", num: 1789 },
    { title: "乡村农机年末从业人员", num: 312 },
  ],
  data2: [
    { title: "农机维修厂", num: 238 },
    { title: "农机维修人数", num: 394 },
    { title: "农机服务组织", num: 238 },
    { title: "农机户", num: 786 },
  ],
};
const item6Data = {
  data1: [
    { title: "检查总数", num: 258 },
    { title: "发现问题数", num: 158 },
    { title: "未发现问题数", num: 1000 },
  ],
  data2: [
    { title: "违反操作次数", num: 106 },
    { title: "无证驾驶", num: 8 },
    { title: "未检验数", num: 28 },
  ],
  data3: [
    { title: "罚款数", num: 15 },
    { title: "警告数", num: 286 },
  ],
};

// 轮播图
var currentIndex = ref(0);
const images = [
  "/public/img/zuoye/lbt2.png",
  "/public/img/zuoye/item4-1.png",
  "/public/img/zuoye/item4-2.png",
];

onMounted(() => {
  initEchartsA();
  initEchartsB();
  initEchartsC();
  statistics();
  initEchartsF();
});

// 左图表1
const initEchartsA = () => {
  myChartA.value = echarts.init(echartA.value!);
  myChartA.value.setOption({
    legend: {
      show: false,
    },
    graphic: {
      //图形中间文字
      type: "group",
      left: "26%",
      top: "center",
      children: [
        {
          type: "text",
          left: "center",
          top: "-20",
          style: {
            fill: "#fff",
            text: "2100",
            font: "36px Microsoft YaHei",
          },
        },
        {
          type: "text",
          left: "center", // 相对父元素居中
          top: "20",
          style: {
            fill: "#fff",
            text: "总作业量",
            font: "18px Microsoft YaHei",
          },
        },
      ],
    },
    series: [
      {
        type: "pie",
        color: ["#c9d65e", "#9441d0", "#c95941", "#5cbca6", "#4363d4"],
        emphasis: {
          disabled: true, // 是否关闭高亮状态
        },
        tooltip: {
          show: false, // 是否展示提示框浮层
        },
        labelLine: {
          //图形外文字线
          normal: {
            length: 15,
            length2: 10,
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
            name: "耕种作业",
            value: 100,
          },
          {
            name: "播种作业",
            value: 200,
          },
          {
            name: "施肥职业",
            value: 300,
          },
          {
            name: "收割作业",
            value: 400,
          },
          {
            name: "打药作业",
            value: 500,
          },
        ],
        radius: ["50%", "68%"],
        center: ["35%", "50%"],
      },
    ],
  });
};
// 左图表2
const initEchartsB = () => {
  const option = {
    grid: {
      left: "5%",
      right: "18%",
      bottom: "3%",
      containLabel: true,
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      textStyle: {
        fontSize: 10,
        color: "#ffffff",
      },
    },
    xAxis: {
      type: "category",
      name: "作业速度(亩/h)",
      nameGap: 5,
      splitLine: {
        show: true,
        lineStyle: {
          color: "#ffffff66", // 线的颜色
        },
      },
    },
    yAxis: {
      type: "value",
      name: "作业质量 (%)",
      nameLocation: "start", // 设置名称显示位置为坐标轴末端
      nameGap: 20,
      splitLine: {
        show: true,
        lineStyle: {
          color: "#ffffff66", // 线的颜色
        },
      },
    },
    series: [
      {
        name: "拖拉机", // 与legend中的data对应
        type: "scatter",
        data: [2, null, null, null, null, null],
        color: "#c9d65e",
      },
      {
        name: "耕整机",
        type: "scatter",
        data: [null, 3, null, null, null, null],
        color: "#9441d0",
      },
      {
        name: "植保机",
        type: "scatter",
        data: [null, null, 6, null, null, null],
        color: "#c95941",
      },
      {
        name: "播种机",
        type: "scatter",
        data: [null, null, null, 5, null, null],
        color: "#5cbca6",
      },
      {
        name: "收割机",
        type: "scatter",
        data: [null, null, null, null, 1, null],
        color: "#4363d4",
      },
      {
        name: "濯溉设备",
        type: "scatter",
        data: [null, null, null, null, null, 6],
        color: "#FFCD00",
      },
    ],
  };
  myChartB.value = echarts.init(echartB.value!);
  myChartB.value.setOption(option);
};

// 左图表3
const initEchartsC = () => {
  // 可以添加背景图片，或者用div添加背景图定位到图表中心
  const option = {
    graphic: {
      //图形中间文字
      type: "group",
      left: "26%",
      top: "center",
      children: [
        {
          type: "text",
          left: "center",
          top: "-20",
          style: {
            fill: "#fff",
            text: "205",
            font: "36px Microsoft YaHei",
          },
        },
        {
          type: "text",
          left: "center",
          top: "20",
          style: {
            fill: "#fff",
            text: "农机总数量",
            font: "18px Microsoft YaHei",
          },
        },
      ],
    },
    color: ["#FFBF00", "#9441D0", "#FF0087", "#80FFA5", "#37A2FF"],
    legend: {
      x: "70%",
      y: "center",
      itemGap: 35,
      textStyle: {
        fontSize: 14, //字体大小
        color: "#ffffff", //字体颜色
      },
      orient: "vertical",
      formatter: (name: any) => {
        let target;
        let data = option.series[0].data;
        for (let i = 0; i < data.length; i++) {
          if (data[i].name === name) {
            target = `    ${data[i].value}台`;
          }
        }
        // return '<span style="color:red;font-weight:bold;">' + name + '</span>';
        return name + target;
      },
    },
    series: [
      {
        labelLine: {
          show: false, //隐藏指示线
        },
        label: {
          show: false, //隐藏标示文字
        },
        type: "pie",
        axisLabel: {
          show: false,
        },
        data: [
          {
            value: 15,
            name: "收割机",
          },
          {
            value: 12,
            name: "烘干机",
          },
          {
            value: 40,
            name: "植保机",
          },
          {
            value: 60,
            name: "插秧机",
          },
          {
            value: 50,
            name: "拖拉机",
          },
        ],
        radius: ["70%", "80%"],
        center: ["35%", "50%"],
      },
      {
        name: "内圆",
        type: "pie",
        radius: ["0%", "60%"], // 内圆的内外半径，这里设置了25%到45%的容器宽度
        data: [
          {
            value: 1048,
            itemStyle: { color: "#386ac452" },
          },
        ],
        center: ["35%", "50%"],
      },
    ],
  };
  myChartC.value = echarts.init(echartC.value!);
  myChartC.value.setOption(option);
};

// 右图表3
const initEchartsF = () => {
  const option = {
    color: ["#FFBF00", "#80FFA5"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      show: true,
      itemGap: 60,
      textStyle: {
        fontSize: 14, //字体大小
        color: "#ffffff", //字体颜色
      },
    },
    grid: {
      left: "5%",
      right: "18%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      name: "单位：小时",
      data: ["2021", "2022", "2023", "2024"],
      nameGap: 3,
    },
    yAxis: {
      type: "value",
      name: "单位：亩",
      nameLocation: "end", // 设置名称显示位置为坐标轴末端
      nameGap: 20,
      splitLine: {
        lineStyle: {
          color: "#ffffff66", // 线的颜色
        },
      },
    },
    series: [
      {
        name: "农机数量",
        type: "bar",
        barWidth: "10%",
        data: [25000, 58000, 22000, 57000],
      },
      {
        name: "作业面积",
        type: "line",
        data: [19000, 37000, 14000, 22000],
        areaStyle: {
          opacity: 0.4,
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            {
              offset: 1,
              color: "#53FE6E",
            },
            {
              offset: 0,
              color: "#0D364D",
            },
          ]),
        },
        // 点样式配置
        itemStyle: {
          // 点的颜色
          color: "#53FE6E",
          // 点的边框颜色
          borderColor: "#53FE6E",
          // 点的边框宽度
          borderWidth: 12,
        },
        // 点的形状，可选值包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none' 等
        symbol: "circle",
        // 点的大小
        symbolSize: 2,
      },
    ],
  };

  myChartF.value = echarts.init(echartF.value!);
  myChartF.value.setOption(option);
};

// 中间
const statistics = () => {
  console.log("F");
  const option = {
    color: ["#60BEF6", "#FEBD53"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      show: true,
      itemGap: 60,
      textStyle: {
        fontSize: 14, //字体大小
        color: "#ffffff", //字体颜色
      },
    },
    grid: {
      left: "5%",
      right: "18%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: [
        "曲阿街道",
        "云阳街道",
        "司徒镇",
        "严林镇",
        "珥陵镇",
        "倒墅镇",
        "吕城镇",
        "吕城镇",
        "陵口镇",
        "访仙镇",
        "丹北镇",
        "界牌镇",
      ],
      nameGap: 0,
      axisLabel: {
        rotate: 45,
        formatter: function (value: any) {
          return value;
        },
        color: "#FFF",
      },
    },
    yAxis: {
      type: "value",
      name: "单位：台",
      nameLocation: "end", // 设置名称显示位置为坐标轴末端
      nameGap: 20,
      splitLine: {
        lineStyle: {
          color: "#ffffff66", // 线的颜色
        },
      },
    },
    series: [
      {
        label: {
          show: true,
          position: "top",
          color: "#00D0DD",
          formatter: function (data: any) {
            return data.value;
          },
        },
        name: "农机数量",
        type: "bar",
        barWidth: "30%",
        data: [12, 21, 25, 28, 33, 40, 12, 21, 25, 28, 33, 40],
      },
      {
        name: "作业面积",
        type: "line",
        data: [10, 10, 14, 14, 13, 16, 10, 10, 14, 14, 13, 16],
        areaStyle: {
          opacity: 0.4,
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            {
              offset: 1,
              color: "#FEBD53",
            },
            {
              offset: 0,
              color: "#0D364D",
            },
          ]),
        },
        // 点样式配置
        itemStyle: {
          // 点的颜色
          color: "#FEBD53",
          // 点的边框颜色
          borderColor: "#FEBD53",
          // 点的边框宽度
          borderWidth: 12,
        },
        // 点的形状，可选值包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none' 等
        symbol: "circle",
        // 点的大小
        symbolSize: 2,
      },
    ],
  };

  myChart3.value = echarts.init(echarts3.value!);
  myChart3.value.setOption(option);
};

// 轮播图
const nextImage = () => {
  console.log("next");
  currentIndex.value = (currentIndex.value + 1) % images.length;
};
const previousImage = () => {
  console.log("prev");
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};
</script>

<style scoped lang="scss">
@import "./Nongjizuoye.scss";
</style>
