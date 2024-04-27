<template>
  <div class="left-box">
    <YuyeItem title="年度水产统计">
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
              <img :src="item.img" alt="" />
              <div>
                <div>{{ item.name }}</div>
                <div class="value">{{ item.value }}{{ item.unit }}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </YuyeItem>
    <YuyeItem style="margin: 10px 0" title="重点水生野生动物管理">
      <template v-slot>
        <div class="item-2">
          <div
            class="img-box"
            style="background-image: url('/img/Yuye/编组 11.png')"
          ></div>

          <div class="item-2-left">
            <div v-for="item in data3">{{ item }}</div>
          </div>
          <div class="item-2-right">
            <img src="@/assets/img/圆盘.png" alt="" />
          </div>
          <div
            class="img-box"
            style="background-image: url('/img/Yuye/编组 11备份.png')"
          ></div>
        </div>
      </template>
    </YuyeItem>
    <YuyeItem title="养殖主体" style="flex: 1">
      <template v-slot>
        <div
          class="item-3"
          style="height: 100%; box-sizing: border-box; padding: 10px"
        >
          <el-table
            :data="tableData"
            style="width: 100%"
            row-class-name="table-row"
            header-row-class-name="table-row"
            header-cell-class-name="table-row"
            cell-class-name="table-row"
          >
            <el-table-column prop="name" label="养殖主体" />
            <el-table-column prop="gm" label="规模（亩）" />
            <el-table-column prop="class" label="养殖品种" />
            <el-table-column prop="lxr" label="联系人" />
            <el-table-column prop="phone" label="联系电话" />
          </el-table>
        </div>
      </template>
    </YuyeItem>
  </div>
  <div class="right-box">
    <YuyeItem title="规模渔场分布统计">
      <template v-slot>
        <div ref="echarts1" class="right-box-item-content"></div>
      </template>
    </YuyeItem>
    <YuyeItem title="各乡镇养殖量对比">
      <template v-slot>
        <div class="right-box-item-content">
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
    <YuyeItem title="渔获量统计">
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

const echarts1 = ref<HTMLElement>();
const myChart1 = ref<any>();
const echarts2 = ref<HTMLElement>();
const myChart2 = ref<any>();
const echarts3 = ref<HTMLElement>();
const myChart3 = ref<any>();

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
const initEcharts = () => {
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
      data: ["1镇", "2镇", "3镇", "4镇", "5镇", "6镇"],
      axisLabel: {
        show: true,
        color: "#fff",
      },
    },
    yAxis: {
      type: "value",
      name: "单位：个数",
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
        name: "渔场数量",
        data: [50, 100, 108, 134, 172, 210],
        type: "bar",
        label: {
          show: true,
          position: "top",
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
  let chart2data = [
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
  ];
  myChart2.value = echarts.init(echarts2.value!);
  myChart2.value.setOption({
    legend: {
      show: false,
      right: 45,
      orient: "vertical",
      itemGap: 20,
      textStyle: {
        fontSize: 16,
        color: "rgba(255, 255, 255)",
      },
      formatter: (name: any) => {
        let pData = chart2data.find((node) => node.name == name);
        return `${name}   ${pData?.value}`;
      },
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

  myChart3.value = echarts.init(echarts3.value!);
  myChart3.value.setOption({
    color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      show: true,
      right: 40,
      itemGap: 60,
      textStyle: {
        fontSize: 14, //字体大小
        color: "#ffffff", //字体颜色
      },
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "4%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["2020", "2021", "2022", "2023", "2024"],
      axisLabel: {
        show: true,
        color: "#fff",
      },
    },
    yAxis: {
      type: "value",
      name: "单位：万吨",
      axisLabel: {
        formatter: "{value}",
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
        name: "草鱼",
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        label: {
          show: true,
          position: "top",
        },
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
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
        name: "黑鱼",
        data: [456, 782, 124, 783, 1237, 146, 45],
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
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
      {
        name: "鲈鱼",
        data: [454, 458, 127, 473, 214, 783, 137],
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(55, 162, 255)",
            },
            {
              offset: 1,
              color: "rgb(116, 21, 219)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
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
  width: 666px;
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

.item-2 {
  display: flex;
  align-items: center;
  padding: 10px;
  transform-origin: top;
  flex: 1;
  .img-box {
    width: 40px;
    height: 100%;
    background-size: contain;
    background-origin: border-box;
    background-repeat: no-repeat;
  }
  // > img {
  //   height: 300px;
  // }
  > div {
    flex: 1;
    &:first-child,
    &:last-child {
      flex: none;
    }
  }
  .item-2-right {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    > img {
      width: 245px;
    }
  }
  .item-2-left {
    color: #ffffff;
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    margin-left: 10px;
    > div {
      height: 36px;
      padding-left: 16px;
      line-height: 36px;
      background-color: rgb(60 60 109 / 67%);
      border-radius: 4px;
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
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
  width: 666px;
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
