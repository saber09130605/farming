<template>
  <div class="left-box" :style="{ transform: counterStore.transformX }">
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
              <div>{{ item.name }}</div>
              <div>{{ item.value }}{{ item.unit }}</div>
            </div>
          </div>
        </div>
      </template>
    </YuyeItem>
    <YuyeItem style="margin: 10px 0" title="重点水生野生动物管理">
      <template v-slot>
        <div class="item-2">
          <div class="item-2-left">
            <div v-for="item in data3">{{ item }}</div>
          </div>
          <div
            class="item-2-right"
            :style="{ transform: counterStore.backTransformX }"
          >
            <img src="@/assets/img/圆盘.png" alt="" />
          </div>
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
            <el-table-column prop="name" label="养殖主体" width="180" />
            <el-table-column prop="gm" label="规模（亩）" width="180" />
            <el-table-column prop="class" label="养殖品种" width="180" />
            <el-table-column prop="lxr" label="联系人" width="180" />
            <el-table-column prop="phone" label="联系电话" width="180" />
          </el-table>
        </div>
      </template>
    </YuyeItem>
  </div>
  <div class="right-box" :style="{ transform: counterStore.transformX }">
    <YuyeItem title="规模渔场分布统计">
      <template v-slot>
        <div ref="echarts1" class="right-box-item-content"></div>
      </template>
    </YuyeItem>
    <YuyeItem title="各乡镇养殖量对比">
      <template v-slot>
        <div
          :style="{ transform: counterStore.backTransformX }"
          class="right-box-item-content"
        >
          <div ref="echarts2" style="width: 100%; height: 100%"></div>
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
      show: true,
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
    legend: {
      show: true,
      right: 40,
      itemGap: 60,
      textStyle: {
        fontSize: 14, //字体大小
        color: "#ffffff", //字体颜色
      },
    },
    xAxis: {
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
        yAxisIndex: 0,
        label: {
          show: true,
          position: "top",
        },
        areaStyle: {
          show: true,
        },
      },
      {
        name: "黑鱼",
        data: [456, 782, 124, 783, 1237, 146, 45],
        type: "line",
        yAxisIndex: 0,
        label: {
          show: true,
          position: "top",
        },
        areaStyle: {
          show: true,
        },
      },
      {
        name: "鲈鱼",
        data: [454, 458, 127, 473, 214, 783, 137],
        type: "line",
        yAxisIndex: 0,
        label: {
          show: true,
          position: "top",
        },
        areaStyle: {
          show: true,
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
  { name: "鱼类养殖产量", value: 36477, unit: "吨" },
  { name: "甲壳类产量", value: 6873, unit: "吨" },
  { name: "贝类样式产量", value: 2345, unit: "吨" },
  { name: "其他水产养殖产量", value: 324, unit: "吨" },
  { name: "设施养殖面积", value: 3698, unit: "公顷" },
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
    }
  }
}
:deep(.item-3 .table-row) {
  background-color: rgb(60 60 109 / 67%) !important;
  color: #ffffff;
}
:deep(.item-3 .table-row:hover) {
  background-color: rgb(60 60 109 / 67%) !important;
  color: #ffffff;
}
.item-2 {
  display: flex;
  padding: 16px;
  > div {
    flex: 1;
  }
  .item-2-right {
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
      width: 245px;
    }
  }
  .item-2-left {
    color: #ffffff;
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    > div {
      height: 36px;
      padding-left: 16px;
      line-height: 36px;
      background-color: rgb(60 60 109 / 67%);
      border-radius: 4px;
      margin-bottom: 12px;
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
    flex-basis: 28%;
    text-align: center;
    margin: 0 10px 10px 10px;
    background-color: rgb(60 60 109 / 67%);
    padding: 10px;
    border-radius: 4px;
    box-sizing: border-box;
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
    padding: 24px 30px;
    .item-1-1 {
      display: flex;
      justify-content: space-between;
      color: #ffffff;
      font-size: 16px;
      .item-1-1-item {
        background-color: rgb(60 60 109 / 67%);
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
