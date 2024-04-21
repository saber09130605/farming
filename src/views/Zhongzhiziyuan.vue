<template>
  <div class="left-box">
    <YuyeItem title="年度粮食统计">
      <template v-slot>
        <div class="item-1 left-box-item-content">
          <div class="item-1-1">
            <div class="item-1-1-item" v-for="item in data1" :key="item.name">
              <div style="margin-bottom: 10px">{{ item.name }}</div>
              <div>
                <span style="font-size: 22px">{{ item.value }}</span
                >{{ item.unit }}
              </div>
            </div>
          </div>
          <div class="fgx"></div>
          <div class="item-1-2">
            <div class="item-1-2-item" v-for="item in data2" :key="item.name">
              <img
                :src="item.img"
                alt=""
                :style="{ transform: counterStore.backTransformX }"
              />
              <div>
                <div>{{ item.name }}</div>
                <div class="value">{{ item.value }}{{ item.unit }}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </YuyeItem>
    <YuyeItem style="margin: 10px 0" title="农业龙头企业">
      <template v-slot>
        <div class="left-item-2">
          <div class="left">
            <div
              v-for="item in item2Data"
              :key="item.value"
              class="content-item"
            >
              <img :src="item.icon" alt="" />
              <div class="main">
                <div>
                  <span style="font-size: 18px">{{ item.value }}</span>
                  {{ item.unit }}
                </div>
                <div>{{ item.name }}</div>
              </div>
            </div>
          </div>
          <div class="right"></div>
        </div>
      </template>
    </YuyeItem>
    <YuyeItem title="绿色示范区" style="flex: 1">
      <template v-slot>
        <div class="right-box-item1-tips">
          <div>建设总面积：<span style="color: #3bb3ff">12342</span> 亩</div>

          <div
            style="
              flex: 1;
              text-align: right;
              font-size: 12px;
              color: rgba(255, 255, 255, 0.6);
            "
          >
            单位：亩
          </div>
        </div>
        <div ref="echarts0" class="right-box-item-content"></div>
      </template>
    </YuyeItem>
  </div>
  <div class="right-box">
    <YuyeItem title="病虫害数据统计">
      <template v-slot>
        <div class="right-box-item1-tips">
          <div>总发生面积：<span style="color: #3bb3ff">1234</span> 万亩次</div>
          <div style="margin-left: 16px">
            总防治面积：<span style="color: #50ffbb">1234</span>
            万亩次
          </div>
          <div
            style="
              flex: 1;
              text-align: right;
              font-size: 12px;
              color: rgba(255, 255, 255, 0.6);
            "
          >
            单位：万亩次
          </div>
        </div>
        <div ref="echarts1" class="right-box-item-content"></div>
      </template>
    </YuyeItem>
    <YuyeItem title="农药年度统计">
      <template v-slot>
        <div class="right-box-item1-tips">
          <div>年度销售量：<span style="color: #3bb3ff">1234</span> 千克</div>
          <div style="margin-left: 16px">
            年度进货量：<span style="color: #50ffbb">1234</span>
            千克
          </div>
          <div
            style="
              flex: 1;
              text-align: right;
              font-size: 12px;
              color: rgba(255, 255, 255, 0.6);
            "
          >
            单位：千克
          </div>
        </div>
        <div ref="echarts2" class="right-box-item-content"></div>
      </template>
    </YuyeItem>
    <YuyeItem title="茶叶年度统计">
      <template v-slot>
        <div ref="echarts3" class="right-box-item-content"></div>
      </template>
    </YuyeItem>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import YuyeItem from "../components/Yuyeziyuan/YuyeItem.vue";
import { useCommonStore } from "../store/commonStore";
import * as echarts from "echarts";
const counterStore = useCommonStore();

const item2Data = ref([
  {
    name: "所属乡镇",
    value: "高桥镇",
    unit: "",
    icon: "/img/大麦.png",
  },
  {
    name: "经营主体或农户数量",
    value: "10",
    unit: "个",
    icon: "/img/大麦.png",
  },
  {
    name: "建筑面积",
    value: "200",
    unit: "平方千米",
    icon: "/img/大麦.png",
  },
]);

const echarts0 = ref<HTMLElement>();
const myChart0 = ref<any>();
const echarts1 = ref<HTMLElement>();
const myChart1 = ref<any>();
const echarts2 = ref<HTMLElement>();
const myChart2 = ref<any>();
const echarts3 = ref<HTMLElement>();
const myChart3 = ref<any>();

const initEcharts = () => {
  myChart0.value = echarts.init(echarts0.value!);
  myChart0.value.setOption({
    grid: [
      {
        show: false,
        bottom: 36,
        top: 36,
      },
    ],
    legend: {
      show: true,
      right: 20,
      top: 0,
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
      axisLabel: {
        show: true,
        color: "#fff",
      },
    },
    yAxis: {
      type: "value",
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
    },
    series: [
      {
        name: "建设面积",
        data: [820, 1100, 900, 920, 780, 1080, 820, 1100, 900, 920, 780, 1080],
        type: "bar",
        label: {
          show: true,
          position: "top",
        },
        showBackground: true,
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
  myChart1.value = echarts.init(echarts1.value!);
  myChart1.value.setOption({
    grid: [
      {
        show: false,
        bottom: 36,
        top: "10%",
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
      data: ["螺害", "鼠害", "草害", "飞蝗", "病虫害"],
    },
    series: [
      {
        name: "发生面积",
        data: [50, 100, 108, 134, 172],
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
      {
        name: "防治面积",
        data: [32, 98, 56, 105, 134],
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
          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            { offset: 0, color: "rgba(0, 0, 0)" },
            { offset: 1, color: "rgba(50, 229, 255, 1)" },
          ]),
        },
        // emphasis: {
        //   itemStyle: {
        //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //       { offset: 0, color: "#2378f7" },
        //       { offset: 0.7, color: "#2378f7" },
        //       { offset: 1, color: "#83bff6" },
        //     ]),
        //   },
        // },
      },
    ],
  });
  myChart2.value = echarts.init(echarts2.value!);
  myChart2.value.setOption({
    grid: {
      top: "12%",
    },
    legend: {
      show: true,
      right: 45,
      itemGap: 20,
      textStyle: {
        fontSize: 16,
        color: "rgba(255, 255, 255)",
      },
    },
    xAxis: {
      type: "category",
      data: ["杀虫剂", "杀菌剂", "除草剂", "杀鼠剂", "其他"],
      axisLabel: {
        show: true,
        color: "#fff",
      },
    },
    yAxis: {
      type: "value",
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
    tooltip: {
      show: true,
      // trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    series: [
      {
        name: "进货量",
        data: [130, 110, 190, 120, 160],
        type: "line",
        symbolSize: 10,
        smooth: true,
        stack: "Total",
        areaStyle: {
          opacity: 0.8,
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
        emphasis: {
          focus: "series",
        },
      },
      {
        name: "销售量",
        data: [200, 123, 230, 150, 130],
        type: "line",
        symbolSize: 10,
        smooth: true,
        stack: "Total",
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(0, 221, 255)",
            },
            {
              offset: 1,
              color: "rgb(77, 119, 255)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
      },
    ],
  });
  const chart3data = [
    { value: 198, name: "龙井茶" },
    { value: 368, name: "碧螺春" },
    { value: 798, name: "太湖石井" },
    { value: 198, name: "黄山毛峰" },
  ];
  myChart3.value = echarts.init(echarts3.value!);
  myChart3.value.setOption({
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "center",
      orient: "vertical",
      right: "2%",
      itemGap: 20,
      textStyle: { color: "#fff" },
      formatter: (name: any) => {
        let pData = chart3data.find((node) => node.name == name);
        return `${name}   ${pData?.value}`;
      },
    },
    graphic: {
      //图形中间文字
      type: "group",
      left: "28%",
      top: "center",
      children: [
        {
          type: "text",
          left: "center", // 相对父元素居中
          top: "-20",
          style: {
            fill: "#ffaa45",
            text: "1567千克",
            font: "24px Microsoft YaHei",
          },
        },
        {
          type: "text",
          left: "center", // 相对父元素居中
          top: "20",
          style: {
            fill: "#fff",
            text: "年度总产量",
            font: "18px Microsoft YaHei",
          },
        },
      ],
    },
    series: [
      {
        name: "茶叶年度统计",
        type: "pie",
        startAngle: 270,
        center: ["38%", "50%"],
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
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
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          showAbove: true,
          length: 10,
          length2: 20,
          smooth: true,
        },

        data: chart3data,
      },
    ],
  });
};
onMounted(() => {
  initEcharts();
});
// console.log(56798);
const data1 = ref([
  { name: "水产品经济总量", value: 12345, unit: "万元" },
  { name: "水产品总产量", value: 3602, unit: "吨" },
  { name: "水产品养殖面积", value: 3602, unit: "公顷" },
]);
const data2 = ref([
  {
    name: "鱼类养殖产量",
    value: 36477,
    unit: "吨",
    img: "/img/Yuye/编组 9.png",
  },
  { name: "甲壳类产量", value: 6873, unit: "吨", img: "/img/Yuye/编组 5.png" },
  {
    name: "贝类样式产量",
    value: 2345,
    unit: "吨",
    img: "/img/Yuye/编组 6.png",
  },
  {
    name: "其他水产养殖产量",
    value: 324,
    unit: "吨",
    img: "/img/Yuye/编组 7.png",
  },
  {
    name: "设施养殖面积",
    value: 3698,
    unit: "公顷",
    img: "/img/Yuye/编组 8.png",
  },
]);
const data3 = ref([
  "企业名称：华盛网络渔业公司",
  "养殖种类：草鱼",
  "地址：江苏省镇江市丹徒市（江省镇…",
  "联系人：苏翊鸣",
  "联系电话：157****1077",
]);

const tableData = ref([
  {
    name: "苏翊鸣",
    gm: 150,
    class: "黑鱼",
    lxr: "黄胜文",
    phone: "157****1077",
  },
  {
    name: "高亭宇",
    gm: 200,
    class: "草鱼",
    lxr: "黄胜文",
    phone: "157****1077",
  },
  {
    name: "孙杨",
    gm: 20,
    class: "鲈鱼",
    lxr: "黄胜文",
    phone: "157****1077",
  },
  {
    name: "李浩田",
    gm: 50,
    class: "黑鱼",
    lxr: "黄胜文",
    phone: "157****1077",
  },
  {
    name: "胡锦昱",
    gm: 80,
    class: "草鱼",
    lxr: "黄胜文",
    phone: "157****1077",
  },
]);
</script>

<style scoped lang="scss">
.right-box {
  position: fixed;
  right: 15px;
  bottom: 15px;
  top: 90px;
  transform-origin: top right;
  display: flex;
  flex-direction: column;
  width: 500px;
  .right-box-item1-tips {
    padding: 10px;
    display: flex;
    align-items: flex-end;
    color: #ffffff;
    font-size: 16px;
    span {
      font-size: 18px;
    }
  }
  > div {
    flex: 1;
    margin: 10px 0;
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
    .right-box-item-content {
      flex: 1;
      position: relative;
      .echarts2-legend {
        position: absolute;
        right: 40px;
        top: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        > div {
          height: 36px;
          line-height: 36px;
          padding-left: 36px;
          background-size: cover;

          font-size: 16px;
          color: #ffffff;
        }
      }
    }
  }
}
:deep(.item-3 .table-row) {
  // background-color: transparent;
  color: #ffffff;
  border-bottom: none;
  text-align: center;
}
:deep(.item-3 .el-table) {
  background-color: transparent;
}
:deep(.item-3 .el-table tr) {
  background: linear-gradient(
    90deg,
    rgba(49, 125, 170, 1),
    rgba(49, 125, 170, 0)
  );
}
:deep(.item-3 .el-table th.el-table__cell) {
  background-color: transparent;
  margin-bottom: 2px;
  border-bottom: 1px #000 solid;
}
:deep(.item-3 .table-row:hover) {
  background: linear-gradient(90deg, rgb(21, 85, 121), rgba(21, 85, 121, 0));
  color: #ffffff;
  border-bottom: none;
}
:deep(.item-3 .table-row:hover > td.el-table__cell) {
  background: linear-gradient(90deg, rgb(21, 85, 121), rgba(21, 85, 121, 0));
  color: #ffffff;
  border-bottom: none;
}

:deep(.item-3 .el-table th.el-table__cell.is-leaf) {
  margin-bottom: 2px;
  border-bottom: 1px #000 solid;
}
:deep(.item-3 .el-table__inner-wrapper:before) {
  content: none;
}
.left-item-2 {
  flex: 1;
  display: flex;
  .left {
    padding: 10px 0 10px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .content-item {
      width: auto;
      height: 60px;
      display: flex;
      align-items: center;
      color: #fff;
      font-size: 16px;
      text-align: center;
      padding-right: 12px;
      background-color: rgba(49, 125, 170, 1);
      > img {
        height: 60px;
        width: 60px;
        margin-right: 12px;
      }
      .main {
        flex: 1;
      }
    }
  }
}
.item-1-2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: #ffffff;
  .item-1-2-item {
    display: flex;
    align-items: center;
    flex-basis: 33%;
    text-align: center;
    // margin: 0 10px 10px 10px;
    // background-color: rgb(60 60 109 / 67%);
    padding: 10px;
    border-radius: 4px;
    box-sizing: border-box;
    > img {
      width: 60px;
      height: 60px;
      margin-right: 10px;
    }
    .value {
      background-image: url("/img/Yuye/编组 4.png");
      background-size: cover;
      margin-top: 6px;
      text-align: left;
      padding-left: 20px;
    }
  }
}
.fgx {
  border-bottom: 1px #ffffff solid;
  margin: 10px 0;
}
.left-box {
  position: fixed;
  left: 15px;
  bottom: 15px;
  // padding-bottom: 15px;
  box-sizing: border-box;
  top: 90px;
  transform-origin: top left;
  display: flex;
  flex-direction: column;
  width: 500px;
  .right-box-item1-tips {
    padding: 10px;
    display: flex;
    align-items: flex-end;
    color: #ffffff;
    font-size: 16px;
    span {
      font-size: 18px;
    }
  }
  .right-box-item-content {
    flex: 1;
  }
  > div {
    flex: 1;
    margin: 6px 0;
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
    .left-box-item-content {
      flex: 1;
    }
  }
  .item-1 {
    padding: 12px 30px;
    transform-origin: top;
    .item-1-1 {
      display: flex;
      justify-content: space-between;
      color: #ffffff;
      font-size: 16px;
      .item-1-1-item {
        background-image: url("@/assets/img/Yuye/item1.png");
        background-size: contain;
        padding: 10px;
        border-radius: 4px;
        margin: 0 10px;
        flex: 1;
        min-width: 160px;
        box-sizing: border-box;
        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
