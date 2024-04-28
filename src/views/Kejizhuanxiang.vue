<template>
  <div class="main">
    <div class="left-box">
      <YuyeItem title="高素质农民培训">
        <template v-slot>
          <div class="item-1">
            <div class="sfxqTab0-tab-box">
              <div
                v-for="item in sfxqTab0"
                :key="item.name"
                class="sfxqTab0-tab"
                :class="{ active: item.name == curSfxqTabName0 }"
                @click="curSfxqTabName0 = item.name"
              >
                {{ item.name }}
              </div>
            </div>
            <div class="item-1-content" ref="echarts1"></div>
          </div>
        </template>
      </YuyeItem>
      <YuyeItem title="农技培训名单" style="margin: 12px 0">
        <template v-slot>
          <div
            class="item-3"
            style="height: 100%; box-sizing: border-box; padding: 10px"
          >
            <el-table
              :data="tableData1"
              style="width: 100%"
              row-class-name="table-row"
              header-row-class-name="table-row"
              header-cell-class-name="table-row"
              cell-class-name="table-row"
            >
              <el-table-column prop="name" label="姓名" />
              <el-table-column
                prop="main"
                width="180"
                label="新型农业经营主体名称"
              />
              <el-table-column prop="zhen" label="乡镇" />
              <el-table-column prop="class" label="专业" />
              <el-table-column width="160" prop="time" label="参与培训时间" />
            </el-table>
          </div>
        </template>
      </YuyeItem>
      <YuyeItem title="示范详情">
        <template v-slot>
          <div class="sfxq-tab-box">
            <div
              class="sfxq-tab"
              v-for="item in sfxqTab"
              :key="item.name"
              :class="{ active: curSfxqTabName == item.name }"
              @click="curSfxqTabName = item.name"
            >
              {{ item.name }}
            </div>
          </div>
          <div
            class="item-3"
            style="height: 100%; box-sizing: border-box; padding: 10px"
          >
            <el-table
              :data="tableData2"
              style="width: 100%"
              row-class-name="table-row"
              header-row-class-name="table-row"
              header-cell-class-name="table-row"
              cell-class-name="table-row"
            >
              <el-table-column prop="name" label="实施单位" />
              <el-table-column prop="main" label="基地名称" />
              <el-table-column prop="zhen" label="行业" />
              <el-table-column prop="class" label="基地负责人" />
            </el-table></div
        ></template>
      </YuyeItem>
    </div>
    <div class="right-box">
      <YuyeItem title="乡镇培训开展情况">
        <template v-slot>
          <div class="item-4" style="flex: 1">
            <div
              class="img-box"
              style="background-image: url('/img/Yuye/编组 11.png')"
            ></div>
            <div style="flex: 1">
              <div class="title">农业培训班第105期</div>
              <img
                style="width: 100%; margin-top: 6px"
                src="/img/keji/1713969136849.jpg"
                alt=""
              />
            </div>
            <div
              class="img-box"
              style="background-image: url('/img/Yuye/编组 11备份.png')"
            ></div>
          </div>
        </template>
      </YuyeItem>
      <YuyeItem style="margin: 12px 0" title="全年乡镇培训人数统计">
        <template v-slot>
          <div
            style="flex: 1"
            ref="echarts2"
            class="right-box-item-content"
          ></div>
        </template>
      </YuyeItem>
      <YuyeItem title="农技员统计">
        <template v-slot>
          <div class="last-item">
            <div class="main-item">
              <img
                style="transform: scale(0.7)"
                src="/img/keji/main.jpg"
                alt=""
              />
              <div class="main-item-tips">张明 · 水产养殖</div>
            </div>
            <div class="last-item-item item-1 left-item">
              <div style="margin-bottom: 2px">园艺种植</div>
              <div>103人，占比25%</div>
            </div>
            <div class="last-item-item item-2 right-item">
              <div style="margin-bottom: 2px">水产养殖</div>
              <div>103人，占比25%</div>
            </div>
            <div class="last-item-item item-3 left-item">
              <div style="margin-bottom: 2px">畜禽养殖</div>
              <div>103人，占比25%</div>
            </div>
            <div class="last-item-item item-4 right-item">
              <div style="margin-bottom: 2px">稻麦种植</div>
              <div>103人，占比25%</div>
            </div>
          </div>
        </template>
      </YuyeItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import YuyeItem from "../components/Yuyeziyuan/YuyeItem.vue";
import * as echarts from "echarts";
// console.log("Kejizhuanxiang");
import { ref, onMounted } from "vue";
const tableData1 = ref([
  {
    name: "孙杨",
    main: "华盛网络渔业公司",
    zhen: "高桥镇",
    class: "农业学科",
    time: "2024-06-09",
  },
  {
    name: "孙杨",
    main: "华盛网络渔业公司",
    zhen: "高桥镇",
    class: "农业学科",
    time: "2024-06-09",
  },
  {
    name: "孙杨",
    main: "华盛网络渔业公司",
    zhen: "高桥镇",
    class: "农业学科",
    time: "2024-06-09",
  },
  {
    name: "孙杨",
    main: "华盛网络渔业公司",
    zhen: "高桥镇",
    class: "农业学科",
    time: "2024-06-09",
  },
]);
const tableData2 = ref([
  {
    name: "现代天骄农业科技有限公司",
    main: "农业科普教育基地",
    zhen: "种植业",
    class: "黄胜文",
  },
  {
    name: "现代天骄农业科技有限公司",
    main: "农业科普教育基地",
    zhen: "种植业",
    class: "黄胜文",
  },
  {
    name: "现代天骄农业科技有限公司",
    main: "农业科普教育基地",
    zhen: "种植业",
    class: "黄胜文",
  },
]);
const sfxqTab = ref([
  {
    name: "全国基层农技推广",
  },
  {
    name: "省级现代农业",
  },
  {
    name: "镇江市",
  },
]);
const curSfxqTabName = ref("全国基层农技推广");
const sfxqTab0 = ref([
  {
    name: "性别",
  },
  {
    name: "学历",
  },
  {
    name: "类型",
  },
]);
const curSfxqTabName0 = ref("性别");

const echarts1 = ref<HTMLElement>();
const myChart1 = ref<any>();
const echarts2 = ref<HTMLElement>();
const myChart2 = ref<any>();

const initEcharts = () => {
  myChart1.value = echarts.init(echarts1.value!);
  myChart1.value.setOption({
    legend: {
      show: true,
      right: 45,
      top: "center",
      orient: "vertical",
      itemGap: 20,
      textStyle: {
        fontSize: 16,
        color: "rgba(255, 255, 255)",
      },
      // formatter: (name: any) => {
      //   let pData = chart2data.find((node) => node.name == name);
      //   return `${name}   ${pData?.value}`;
      // },
    },

    // graphic: {
    //   //图形中间文字
    //   type: "group",
    //   left: "29%",
    //   top: "center",
    //   children: [
    //     {
    //       type: "text",
    //       left: "center", // 相对父元素居中
    //       top: "-20",
    //       style: {
    //         fill: "#fff",
    //         text: "2100",
    //         font: "36px Microsoft YaHei",
    //       },
    //     },
    //     {
    //       type: "text",
    //       left: "center", // 相对父元素居中
    //       top: "20",
    //       style: {
    //         fill: "#fff",
    //         text: "总养殖量",
    //         font: "18px Microsoft YaHei",
    //       },
    //     },
    //   ],
    // },
    series: [
      {
        type: "pie",
        name: "高素质农民培训",
        color: ["rgba(9, 117, 203, 1)", "rgba(212, 163, 0, 1)"],
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
            name: "男",
            value: 35,
          },
          {
            name: "女",
            value: 65,
          },
        ],
        radius: ["0", "68%"],
        center: ["35%", "50%"],
      },
    ],
  });

  myChart2.value = echarts.init(echarts2.value!);
  myChart2.value.setOption({
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
      data: ["高桥镇", "辛丰镇", "谷阳镇", "上党镇", "宝堰镇", "世业镇"],
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
        name: "全年乡镇培训人数统计",
        data: [150, 90, 170, 80, 220, 140],
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
};
onMounted(() => {
  initEcharts();
});
</script>

<style scoped lang="scss">
.item-4 {
  display: flex;
  align-items: center;
  .title {
    height: 38px;
    line-height: 38px;
    text-align: center;
    width: 100%;
    background-image: url("/img/keji/title.png");
    color: #fff;
    font-weight: 500;
    font-size: 18px;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .img-box {
    width: 40px;
    height: 100%;
    background-size: contain;
    background-origin: border-box;
    background-repeat: no-repeat;
  }
}
.last-item {
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  .main-item {
    position: relative;
    .main-item-tips {
      position: absolute;
      bottom: -10px;
      width: 133px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      color: #fff;
      left: 0;
      right: 0;
      margin: auto;
      background-image: url("/img/keji/main_buttom.png");
    }
  }
  .last-item-item {
    position: absolute;

    width: 172px;
    height: 57px;
    font-size: 10px;

    color: #fff;
    box-sizing: border-box;
    &.left-item {
      padding-top: 7px;
      padding-left: 75px;
    }
    &.right-item {
      padding-top: 7px;
      padding-right: 75px;
      text-align: right;
    }

    &.item-1 {
      background-image: url("/img/keji/111.png");
      top: 16px;
      left: 13px;
    }
    &.item-2 {
      background-image: url("/img/keji/222.png");
      top: 16px;
      right: 13px;
    }
    &.item-3 {
      background-image: url("/img/keji/444.png");
      bottom: 16px;
      left: 13px;
    }
    &.item-4 {
      background-image: url("/img/keji/333.png");
      right: 13px;
      bottom: 16px;
    }
  }
}
.item-1 {
  flex: 1;
  display: flex;
  flex-direction: column;
  .item-1-content {
    flex: 1;
  }
}
.sfxqTab0-tab-box {
  display: flex;
  justify-content: space-around;
  font-family: PingFangSC, PingFang SC;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  padding: 12px 0;
  .sfxqTab0-tab {
    height: 40px;
    width: 133px;
    line-height: 40px;
    text-align: center;
    background-image: url("/img/编组 14备份.png");
    background-size: contain;
    background-repeat: no-repeat;
    &.active {
      color: #00e8ff;
    }
  }
}
.sfxq-tab-box {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  .sfxq-tab {
    background-image: url("/img/tab_未选中bg.png");
    background-size: 100% 112%;
    background-repeat: no-repeat;
    margin: 0 12px;
    flex-basis: 33%;
    height: 36px;
    line-height: 36px;
    text-align: center;
    color: #ffffff;
    font-family: PingFangSC, PingFang SC;
    font-weight: 500;
    font-size: 14px;
    font-style: normal;
    &.active {
      background-image: url("/img/tab_选中bg.png");
      color: #00e8ff;
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
.main {
  position: fixed;
  left: 15px;
  top: 80px;
  bottom: 15px;
  display: flex;
  > div {
    display: flex;
    flex-direction: column;
    width: 600px;
    > div {
      flex: 1;
    }
  }
  .left-box {
    margin-right: 16px;
  }
}
</style>
