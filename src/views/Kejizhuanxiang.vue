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
        <template v-slot> </template>
      </YuyeItem>
      <YuyeItem title="全年乡镇培训人数统计">
        <template v-slot> </template>
      </YuyeItem>
      <YuyeItem title="农技员统计">
        <template v-slot> </template>
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
};
onMounted(() => {
  initEcharts();
});
</script>

<style scoped lang="scss">
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
  top: 90px;
  bottom: 15px;
  display: flex;
  > div {
    width: 600px;
  }
  .left-box {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    > div {
      flex: 1;
    }
  }
}
</style>
