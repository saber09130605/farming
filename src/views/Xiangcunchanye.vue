<template>
  <div class="main">
    <YuyeItem class="item-1" title="人口统计">
      <template v-slot>
        <div style="display: flex; padding: 40px 30px">
          <div class="item-1-left">
            <div
              class="item-1-left-item"
              style="
                background-image: url('/img/xccy/111.png');
                margin-bottom: 35px;
              "
            >
              <div class="item-1-left-item-value">825943人</div>
              <div class="item-1-left-item-name">全市总人口</div>
            </div>
            <div
              class="item-1-left-item"
              style="background-image: url('/img/xccy/222.png')"
            >
              <div class="item-1-left-item-value">264513户</div>
              <div class="item-1-left-item-name">全市总户数</div>
            </div>
          </div>
          <div class="item-1-right">
            <div
              v-for="item in item1data2"
              :key="item.name"
              class="item-1-right-item"
              :style="{ backgroundImage: `url(${item.bg})` }"
            >
              <div class="item-1-right-item-name">{{ item.name }}</div>
              <div class="item-1-right-item-value">{{ item.value }}</div>
            </div>
          </div>
        </div>
      </template>
    </YuyeItem>
    <div class="item-2" style="margin: 20px 0">
      <YuyeItem title="主体构成产业" class="item-2-left">
        <template v-slot>
          <div class="item-2-left-main">
            <div
              class="item-2-left-item"
              v-for="item in item2LeftData"
              :key="item.name"
              :style="{ color: item.color }"
            >
              <div
                class="item-2-left-item-value"
                :style="{ backgroundImage: `url(/img/xccy/${item.mainBg})` }"
              >
                <div style="font-size: 30px">{{ item.value }}</div>
                <div style="font-size: 12px">{{ item.tips }}</div>
              </div>
              <div
                class="item-2-left-item-name"
                :style="{ backgroundImage: `url(/img/xccy/${item.titleBg})` }"
              >
                {{ item.name }}
              </div>
            </div>
          </div>
        </template>
      </YuyeItem>
      <YuyeItem title="经营主体分布情况" class="item-2-right">
        <template v-slot>
          <div class="echarts1" ref="echarts1"></div>
        </template>
      </YuyeItem>
    </div>
    <div class="item-3">
      <YuyeItem title="产业分布情况" class="item-3-left">
        <template v-slot>
          <div class="echarts2" ref="echarts2"></div>
        </template>
      </YuyeItem>
      <YuyeItem title="农场、合作社统计" class="item-3-right">
        <template v-slot>
          <div class="item-3-right-main">
            <el-table
              :data="tableData"
              style="width: 100%"
              row-class-name="table-row"
              header-row-class-name="table-row"
              header-cell-class-name="table-row"
              cell-class-name="table-row"
            >
              <el-table-column prop="name" label="名称" />
              <el-table-column prop="class" label="类型" />
              <el-table-column prop="lxr" label="联系人" />
              <el-table-column prop="phone" label="联系电话" />
              <el-table-column prop="zhen" label="所属乡镇" />
            </el-table>
          </div>
        </template>
      </YuyeItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import YuyeItem from "../components/Yuyeziyuan/YuyeItem.vue";
import * as echarts from "echarts";
const tableData = ref([
  {
    name: "如家家庭农场",
    class: "家庭农场",
    lxr: "陈国良",
    phone: "13064245751",
    zhen: "高桥镇",
  },
  {
    name: "如家家庭农场",
    class: "家庭农场",
    lxr: "陈国良",
    phone: "13064245751",
    zhen: "高桥镇",
  },
  {
    name: "如家家庭农场",
    class: "家庭农场",
    lxr: "陈国良",
    phone: "13064245751",
    zhen: "高桥镇",
  },
  {
    name: "如家家庭农场",
    class: "家庭农场",
    lxr: "陈国良",
    phone: "13064245751",
    zhen: "高桥镇",
  },
]);
const item1data2 = ref([
  {
    name: "出生人口",
    value: "6891人",
    bg: "/img/xccy/4_1.png",
  },
  {
    name: "迁入人口",
    value: "15820人",
    bg: "/img/xccy/4_2.png",
  },
  {
    name: "乡村从业人数",
    value: "35640人",
    bg: "/img/xccy/4_3.png",
  },
  {
    name: "死亡人口",
    value: "8720人",
    bg: "/img/xccy/4_4.png",
  },
  {
    name: "迁出人口",
    value: "12340人",
    bg: "/img/xccy/4_5.png",
  },
  {
    name: "农村组",
    value: "4564个",
    bg: "/img/xccy/4_6.png",
  },
]);
const item2LeftData = ref([
  {
    name: "龙头企业",
    value: "69",
    tips: "占比9.9%",
    titleBg: "编组13.png",
    mainBg: "42_2.png",
    color: "#FFEAC6",
  },
  {
    name: "家庭农场",
    value: "511",
    tips: "占比73.31%",
    titleBg: "编组12.png",
    mainBg: "42_1.png",
    color: "#C6FEFF",
  },
  {
    name: "龙头企业",
    value: "69",
    tips: "占比9.9%",
    titleBg: "编组13.png",
    mainBg: "42_2.png",
    color: "#F4E0FF",
  },
]);

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
        left: 130,
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
      data: [
        "高桥镇",
        "辛丰镇",
        "谷阳镇",
        "上党镇",
        "宝堰镇",
        "世业镇",
        "宜城街道",
        "江心州生态农业园区",
        "荣炳盐资源区",
      ],
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
    radar: {
      // shape: 'circle',
      indicator: [
        { name: "种植业", max: 350 },
        { name: "种养结合", max: 350 },
        { name: "渔业", max: 350 },
        { name: "畜牧业", max: 350 },
        { name: "其他", max: 350 },
      ],
    },
    series: [
      {
        name: "产业分布情况",
        type: "radar",
        data: [
          {
            value: [330, 200, 180, 345, 300],
            name: "产业分布情况",
            areaStyle: {
              color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                {
                  color: "rgba(255, 145, 124, 0.5)",
                  offset: 0,
                },
                {
                  color: "rgba(255, 145, 124, 1)",
                  offset: 1,
                },
              ]),
            },
          },
        ],
      },
    ],
  });
};
onMounted(() => {
  initEcharts();
});
</script>

<style scoped lang="scss">
.item-3-left {
  margin-right: 20px;
}
.item-3-right-main {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
}
:deep(.item-3-right-main .el-table__inner-wrapper) {
  font-size: 12px !important;
}
:deep(.item-3-right-main .table-row) {
  // background-color: transparent;
  color: #ffffff;
  border-bottom: none;
  text-align: center;
}
:deep(.item-3-right-main .el-table) {
  background-color: transparent;
}
:deep(.item-3-right-main .el-table tr) {
  background: linear-gradient(
    90deg,
    rgba(49, 125, 170, 1),
    rgba(49, 125, 170, 0)
  );
}
:deep(.item-3-right-main .el-table th.el-table__cell) {
  background-color: transparent;
  margin-bottom: 2px;
  border-bottom: 1px #000 solid;
}
:deep(.item-3-right-main .table-row:hover) {
  background: linear-gradient(90deg, rgb(21, 85, 121), rgba(21, 85, 121, 0));
  color: #ffffff;
  border-bottom: none;
}
:deep(.item-3-right-main .table-row:hover > td.el-table__cell) {
  background: linear-gradient(90deg, rgb(21, 85, 121), rgba(21, 85, 121, 0));
  color: #ffffff;
  border-bottom: none;
}

:deep(.item-3-right-main .el-table th.el-table__cell.is-leaf) {
  margin-bottom: 2px;
  border-bottom: 1px #000 solid;
}
:deep(.item-3-right-main .el-table__inner-wrapper:before) {
  content: none;
}
.item-2,
.item-3 {
  display: flex;
  > div {
    flex: 1;
  }
}
.item-3 {
  flex: 1;
}
.echarts2 {
  flex: 1;
}
.item-2-right {
  .echarts1 {
    flex: 1;
  }
}
.item-2-left {
  margin-right: 20px;
  .item-2-left-main {
    display: flex;
    padding: 40px 0px;
    justify-content: center;
    .item-2-left-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      .item-2-left-item-value {
        width: 180px;
        height: 153px;
        text-align: right;
        padding-right: 68px;
        box-sizing: border-box;
        padding-top: 30px;
      }
      .item-2-left-item-name {
        width: 118px;
        height: 32px;
        line-height: 32px;
        text-align: center;
      }
    }
  }
}
.main {
  position: fixed;
  right: 15px;
  top: 80px;
  bottom: 15px;
  display: flex;
  flex-direction: column;
  max-width: 1160px;
  .item-1 {
    display: flex;
    .item-1-left {
      margin-right: 16px;
    }
    .item-1-left-item {
      width: 284px;
      height: 93px;
      box-sizing: border-box;
      padding-left: 130px;
      padding-top: 8px;
      .item-1-left-item-value {
        font-size: 24px;
        color: #ffffff;
        text-shadow: 0px 2px 2px #002b43;
        text-transform: none;
        background: linear-gradient(90deg, #ffffff 0%, #a6d4ff 100%);
        background-clip: text;
      }
      .item-1-left-item-name {
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 12px;
        color: #b0d9ff;
        font-style: normal;
        text-transform: none;
      }
    }
    .item-1-right {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;

      .item-1-right-item {
        width: 258px;
        height: 61px;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding-left: 78px;
        padding-right: 17px;
        .item-1-right-item-name {
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          font-size: 12px;
          color: #b0d9ff;
          text-align: left;
          font-style: normal;
          text-transform: none;
          flex: 1;
        }
        .item-1-right-item-value {
          font-family: DIN, DIN;
          font-weight: 500;
          font-size: 24px;
          color: #ffffff;
          text-shadow: 0px 2px 2px #002b43;
          text-align: center;
          background: linear-gradient(90deg, #ffffff 0%, #a6d4ff 100%);
          background-clip: text;
        }
      }
    }
  }
}
</style>
