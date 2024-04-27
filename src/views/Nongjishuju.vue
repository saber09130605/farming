<template>
  <div class="main" style="pointer-events: none">
    <div class="left-box">
      <!-- 左边 -->
      <YuyeItem title="农机年检统计">
        <template v-slot>
          <div class="item-1 left-box-item-content">
            <p
              class="subtitle bgcenter"
              style="background-image: url('/img/Nongji/title1.png')"
            >
              拖拉机检验情况
            </p>
            <el-row>
              <el-col :span="8">
                <div
                  class="subbox bgcenter"
                  style="background-image: url('/img/Nongji/subbox1.png')"
                >
                  <p class="num">1789</p>
                  <p>保有量</p>
                </div>
              </el-col>
              <el-col :span="8">
                <div
                  class="subbox bgcenter"
                  style="background-image: url('/img/Nongji/subbox1.png')"
                >
                  <p class="num">1789</p>
                  <p>保有量</p>
                </div>
              </el-col>
              <el-col :span="8">
                <div
                  class="subbox bgcenter"
                  style="background-image: url('/img/Nongji/subbox1.png')"
                >
                  <p class="num">1789</p>
                  <p>保有量</p>
                </div>
              </el-col>
            </el-row>

            <p
              class="subtitle bgcenter"
              style="background-image: url('/img/Nongji/title2.png')"
            >
              收割机检验情况
            </p>
            <el-row>
              <el-col :span="8">
                <div
                  class="subbox bgcenter"
                  style="background-image: url('/img/Nongji/subbox2.png')"
                >
                  <p class="num">1789</p>
                  <p>保有量</p>
                </div>
              </el-col>
              <el-col :span="8">
                <div
                  class="subbox bgcenter"
                  style="background-image: url('/img/Nongji/subbox2.png')"
                >
                  <p class="num">1789</p>
                  <p>保有量</p>
                </div>
              </el-col>
              <el-col :span="8">
                <div
                  class="subbox bgcenter"
                  style="background-image: url('/img/Nongji/subbox2.png')"
                >
                  <p class="num">1789</p>
                  <p>保有量</p>
                </div>
              </el-col>
            </el-row>
          </div>
        </template>
      </YuyeItem>
      <YuyeItem title="农机数量统计" style="margin: 15px 0">
        <template v-slot>
          <div class="item-2 left-box-item-content">
            <div class="totel">农机总数：<span class="num">29658</span>台</div>
            <div ref="echartsNum" class="echartBox"></div>
          </div>
        </template>
      </YuyeItem>

      <YuyeItem title="各乡镇农机分布" style="height: 315px">
        <template v-slot>
          <div class="left-box-item-content">
            <div ref="echarts2" style="width: 100%; height: 100%"></div>
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
    </div>
    <div class="center-box">
      <div style="flex: 1; margin: 15px 0"></div>
      <YuyeItem title="驾驶证业务统计" style="height: 315px">
        <template v-slot>
          <div style="flex: 1">
            <div ref="echarts3" class="echartBox"></div>
          </div>
        </template>
      </YuyeItem>
    </div>
    <!-- 右边 -->
    <div class="right-box">
      <YuyeItem title="年度机械总动力统计">
        <template v-slot>
          <div class="totel">总动力：<span class="num">29万</span>千瓦</div>
          <div ref="echarts1" class="right-box-item-content"></div>
        </template>
      </YuyeItem>

      <YuyeItem title="农机服务组织人员及投入产出情况" style="margin: 15px 0">
        <template v-slot>
          <el-row>
            <el-col :span="8" v-for="(item, idx) in item5Data.data1" :key="idx">
              <div
                class="subbox bgcenter"
                style="background-image: url('/img/Nongji/subboxR.png')"
              >
                <p>
                  <span class="num">{{ item.num }}</span
                  >万元
                </p>
                <p>{{ item.title }}</p>
              </div>
            </el-col>
          </el-row>

          <el-row style="margin-bottom: 5%; padding: 0 10px" :gutter="5">
            <el-col :span="6" v-for="(item, idx) in item5Data.data2" :key="idx">
              <div
                class="subbox bgcenter"
                style="
                  background-image: url('/img/Nongji/subboxR.png');
                  background-size: 100% 100%;
                "
              >
                <p>
                  <span class="num">{{ item.num }}</span
                  >万元
                </p>
                <p>{{ item.title }}</p>
              </div>
            </el-col>
          </el-row>
        </template>
      </YuyeItem>

      <YuyeItem title="执法检查统计" style="height: 315px">
        <template v-slot>
          <div class="item-6">
            <div class="content">
              <p
                class="bgcenter"
                style="
                  background-image: url('/img/Nongji/item6.png');
                  background-size: contain;
                  padding: 0px;
                  padding-left: 23px;
                  height: 23px;
                  line-height: 23px;
                  margin: 8px;
                "
              >
                检查结果
              </p>
              <el-row>
                <el-col
                  :span="8"
                  v-for="(item, idx) in item6Data.data1"
                  :key="idx"
                >
                  <div
                    class="last-item-item"
                    style="
                      background-image: url('/img/Nongji/item61.png');
                      color: #b0d9ff;
                    "
                  >
                    <p>{{ item.title }}</p>
                    <p>{{ item.num }}</p>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="content">
              <p
                class="bgcenter"
                style="
                  background-image: url('/img/Nongji/item6.png');
                  background-size: contain;
                  padding: 0px;
                  padding-left: 23px;
                  height: 23px;
                  line-height: 23px;
                  margin: 8px;
                "
              >
                违法行为
              </p>
              <el-row>
                <el-col
                  :span="8"
                  v-for="(item, idx) in item6Data.data2"
                  :key="idx"
                >
                  <div
                    class="last-item-item"
                    style="background-image: url('/img/Nongji/item62.png')"
                  >
                    <p style="color: #ffe3b0">{{ item.title }}</p>
                    <p>{{ item.num }}</p>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="content">
              <p
                class="bgcenter"
                style="
                  background-image: url('/img/Nongji/item6.png');
                  background-size: contain;
                  padding: 0px;
                  padding-left: 23px;
                  height: 23px;
                  line-height: 23px;
                  margin: 8px;
                "
              >
                处罚种类
              </p>
              <el-row>
                <el-col
                  :span="8"
                  v-for="(item, idx) in item6Data.data3"
                  :key="idx"
                >
                  <div
                    class="last-item-item"
                    style="
                      background-image: url('/img/Nongji/item63.png');
                      color: #ffb7b0;
                    "
                  >
                    <p>{{ item.title }}</p>
                    <p>{{ item.num }}</p>
                  </div>
                </el-col>
              </el-row>
            </div>
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
const echarts3 = ref<HTMLElement>();
const myChart3 = ref<any>();

const echartsNum = ref<HTMLElement>();
const mychartsNum = ref<any>();

const echarts2Legend = ref([
  {
    name: "高桥镇",
    value: 100,
    color: "#c9d65e",
    img: "/img/Yuye/编组 18.png",
  },
  {
    name: "辛丰镇",
    value: 200,
    color: "#9441d0",
    img: "/img/Yuye/编组 18备份.png",
  },
  {
    name: "谷阳镇",
    value: 300,
    color: "#c95941",
    img: "/img/Yuye/编组 18备份 2.png",
  },
  {
    name: "上党镇",
    value: 400,
    color: "#5cbca6",
    img: "/img/Yuye/编组 18备份 3.png",
  },
  {
    name: "宝堰镇",
    value: 500,
    color: "#d69f45",
    img: "/img/Yuye/编组 18备份 4.png",
  },
  {
    name: "世业镇",
    value: 600,
    color: "#4363d4",
    img: "/img/Yuye/编组 18备份 5.png",
  },
]);

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

onMounted(() => {
  initEcharts();
  statistics();
  statisticsDrive();
});

const initEcharts = () => {
  // 右图表1
  myChart1.value = echarts.init(echarts1.value!);
  myChart1.value.setOption({
    grid: [
      {
        show: false,
        bottom: 36,
      },
    ],
    legend: {
      show: true,
      right: 20,
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
        "排灌动力机械",
        "水稻插秧机",
        "联合收获机",
      ],
      axisLabel: {
        show: true,
        color: "#fff",
      },
    },
    yAxis: {
      type: "value",
      name: "单位：千瓦",
    },
    series: [
      {
        data: [150, 90, 170, 80, 220],
        type: "bar",
        label: {
          show: true,
          position: "top",
          color: "#00D0DD",
        },
        barWidth: "30%",
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#188df0" },
            { offset: 0.05, color: "#188df0" },
            { offset: 0.1, color: "#188df0" },
            { offset: 0.2, color: "#00D0DD" },
            { offset: 1, color: "#01A9DE" },
          ]),
        },
      },
    ],
  });

  myChart2.value = echarts.init(echarts2.value!);
  myChart2.value.setOption({
    legend: {
      show: false,
    },
    graphic: {
      //图形中间文字
      type: "group",
      left: "29%",
      top: "center",
      children: [
        {
          type: "text",
          left: "center", // 相对父元素居中
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
            text: "总养殖量",
            font: "18px Microsoft YaHei",
          },
        },
      ],
    },
    series: [
      {
        type: "pie",
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
            name: "高桥镇",
            value: 100,
          },
          {
            name: "辛丰镇",
            value: 200,
          },
          {
            name: "谷阳镇",
            value: 300,
          },
          {
            name: "上党镇",
            value: 400,
          },
          {
            name: "宝堰镇",
            value: 500,
          },
          {
            name: "世业镇",
            value: 600,
          },
        ],
        radius: ["50%", "68%"],
        center: ["35%", "50%"],
      },
    ],
  });
};

// 农机数量统计 柱状图
const statistics = () => {
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      splitLine: { show: false },
      type: "value",
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      name: "单位：台",
      axisLabel: {
        formatter: "{value}",
        show: true,
        color: "#fff",
      },
      axisLine: {
        show: true,
        color: "#fff",
      },
      type: "category",
      data: [
        "联合收获机",
        "水稻插秧机",
        "排灌动机机械",
        "小型拖拉机",
        "大中型拖拉机",
      ],
    },
    series: [
      {
        name: "2012",
        type: "bar",
        data: [65, 130, 60, 100, 60],
        barWidth: "50%",
        itemStyle: {
          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            { offset: 0, color: "#188df0" },
            { offset: 0.05, color: "#188df0" },
            { offset: 0.1, color: "#188df0" },
            { offset: 0.2, color: "#00D0DD" },
            { offset: 1, color: "#01A9DE" },
          ]),
        },
      },
    ],
  };
  mychartsNum.value = echarts.init(echartsNum.value!);
  mychartsNum.value.setOption(option);
};

// 驾驶证业务统计 柱状图
const statisticsDrive = () => {
  const option = {
    color: ["#00DDFF", "#FFBF00", "#80FFA5"],
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
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["高桥镇", "辛丰镇", "谷阳镇", "上党镇", "宝堰镇", "世业镇"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "  农机数量  ",
        type: "bar",
        barWidth: "10%",
        data: [68, 180, 50, 150, 220, 260],
      },
      {
        name: "  农机数量.  ",
        type: "bar",
        barWidth: "10%",
        data: [131, 68, 131, 50, 170, 34],
      },
      {
        name: "  作业面积  ",
        type: "line",
        data: [131, 300, 38, 230, 250, 200],
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

  myChart3.value = echarts.init(echarts3.value!);
  myChart3.value.setOption(option);
};
</script>

<style scoped lang="scss">
@import "./Nongjishuju.scss";
</style>
