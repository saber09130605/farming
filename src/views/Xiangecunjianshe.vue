<template>
  <div class="main">
    <div class="item-1">
      <div
        class="item-1-item"
        v-for="(item, index) in item1Data"
        :key="item.name"
        :style="{ backgroundImage: `url(/img/xcjs/${index + 1}.png)` }"
      >
        <div>
          {{ item.name }}
        </div>
        <div class="value">
          <span :style="{ color: item.color }">{{ item.value }}</span>
          {{ item.unit }}
        </div>
      </div>
    </div>
    <YuyeItem
      title="村容村貌数量统计"
      :style="{ width: `${itemWidth}px` }"
      style="margin: 15px 0"
    >
      <template v-slot>
        <div class="item-2">
          <div
            class="item"
            v-for="(item, index) in item2Data"
            :key="item.name"
            :style="{
              backgroundImage: `url(/img/xcjs/${index + 7}.png)`,
              color: item.color,
            }"
          >
            <div>
              {{ item.name }}
            </div>
            <div class="value">
              <span>{{ item.value }}</span>
              {{ item.unit }}
            </div>
          </div>
        </div>
      </template>
    </YuyeItem>
    <YuyeItem
      title="生态河道长度统计"
      :style="{ width: `${itemWidth}px` }"
      style="height: 263px"
    >
      <template v-slot>
        <div ref="echarts1" style="flex: 1"></div>
      </template>
    </YuyeItem>
    <div class="item-footer">
      <YuyeItem title="生态河道长度统计" style="width: 385px">
        <template v-slot>
          <div class="footer-1">
            <div class="item" style="top: 51px; left: 14px">
              <div style="text-shadow: 0px 2px 4px #ffbb00">23657户</div>
              <div>户厕总数</div>
            </div>
            <div
              class="item"
              style="bottom: 46px; left: 0; right: 0; margin: auto"
            >
              <div style="text-shadow: 0px 2px 4px #0066ff">157893户</div>
              <div>全是农户总数</div>
            </div>
            <div class="item" style="top: 51px; right: 14px">
              <div style="text-shadow: 0px 2px 4px #ffbb00">93%</div>
              <div>农村卫生户厕普及率</div>
            </div>
          </div>
        </template>
      </YuyeItem>
      <YuyeItem title="农村生活污水治理" style="margin: 0 20px">
        <template v-slot>
          <div style="flex: 1" class="footer-2">
            <div
              class="item"
              :style="{ backgroundImage: `url(/img/xcjs/999.png)` }"
            >
              <div style="margin-bottom: 16px; font-size: 20px; color: #00adff">
                60%
              </div>
              <div>农村生态河道覆盖率</div>
            </div>
            <div
              class="item"
              :style="{ backgroundImage: `url(/img/xcjs/888.png)` }"
            >
              <div style="margin-bottom: 16px; font-size: 20px; color: #ff9500">
                85%
              </div>
              <div>农村生活污水治理行政村覆盖率</div>
            </div>
            <div
              class="item"
              :style="{ backgroundImage: `url(/img/xcjs/777.png)` }"
            >
              <div style="margin-bottom: 16px; font-size: 20px; color: #00adff">
                34%
              </div>
              <div>自然村覆盖率</div>
            </div>
          </div>
        </template>
      </YuyeItem>
      <YuyeItem title="农村废弃物治理" style="width: 385px">
        <template v-slot>
          <div style="flex: 1" class="footer-3">
            <div class="item" v-for="item in footerData" :key="item.name">
              <img src="/img/xcjs/编组 12.png" alt="" />
              <div>
                <div>{{ item.name }}</div>
                <div style="font-size: 20px">{{ item.value }}</div>
              </div>
            </div>
          </div>
        </template>
      </YuyeItem>
      <YuyeItem
        title="美丽乡村简介"
        style="margin-left: 20px; height: 297px"
        :style="{ width: `${itemWidth}px` }"
      >
        <template v-slot>
          <div class="footer-4">
            <div
              class="img-box"
              style="background-image: url('/img/Yuye/编组 11.png')"
            ></div>
            <div
              style="display: flex; flex-direction: column; align-items: center"
            >
              <div
                style="
                  width: 500px;
                  background-image: url('/img/xcjs/img／按钮.png');
                  height: 38px;
                  line-height: 38px;
                  text-align: center;
                  font-size: 18px;
                  margin-bottom: 8px;
                "
              >
                新丰镇龙山村
              </div>
              <div style="display: flex; flex: 1; width: 100%">
                <div class="footer-4-left">
                  <div v-for="item in data3">{{ item }}</div>
                </div>
                <div class="footer-4-right" style="flex: 1">
                  <el-carousel style="height: 150px; width: 100%">
                    <el-carousel-item v-for="item in bannerData" :key="item">
                      <img style="width: 100%" :src="item" alt="" />
                    </el-carousel-item>
                  </el-carousel>
                  <!-- <img src="@/assets/img/圆盘.png" alt="" /> -->
                </div>
              </div>
            </div>

            <div
              class="img-box"
              style="background-image: url('/img/Yuye/编组 11备份.png')"
            ></div>
          </div>
        </template>
      </YuyeItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import YuyeItem from "../components/Yuyeziyuan/YuyeItem.vue";
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
const data3 = ref([
  "李小沫",
  "15704142055",
  "江苏省镇江市丹徒区 勤政路117号",
  "在历届X村两委的带领下,发扬…",
]);
const bannerData = ref<string[]>([
  "https://t12.baidu.com/it/u=83379620,203651023&fm=30&app=106&f=JPEG?w=640&h=427&s=D03BB7F3B8B9F8CC26B20A7703008076",
  "https://img2.baidu.com/it/u=202274861,1200480826&fm=253&fmt=auto&app=138&f=JPEG?w=1425&h=800",
  "https://picx.zhimg.com/v2-51e785d06d568f4416f3ce8529e6f9bf_720w.jpg?source=172ae18b",
]);
const footerData = ref([
  {
    name: "畜禽类污资源化利用率",
    value: "99%",
  },
  {
    name: "规模养殖治理率",
    value: "85%",
  },
  {
    name: "废旧农膜回收利用率",
    value: "99%",
  },
  {
    name: "秸秆综合利用率",
    value: "85%",
  },
]);
const itemWidth = ref(675);
const item1Data = ref([
  {
    name: "垃圾转运站",
    value: 22,
    color: "rgba(35, 185, 255, 1)",
    unit: "座",
  },
  {
    name: "农村垃圾房",
    value: 3769,
    color: "rgba(254, 164, 29, 1)",
    unit: "座",
  },
  {
    name: "农村垃圾分类收集亭",
    value: 3769,
    color: "rgba(241, 29, 254, 1)",
    unit: "座",
  },
  {
    name: "垃圾清运车辆",
    value: 433,
    color: "rgba(29, 254, 75, 1)",
    unit: "座",
  },
  {
    name: "农村垃圾回收率",
    value: "98%",
    color: "rgba(29, 254, 229, 1)",
  },
  {
    name: "无害化处置率",
    value: "98%",
    color: "rgba(254, 144, 29, 1)",
  },
]);
const item2Data = ref([
  {
    name: "市级美丽宜居村庄",
    value: 31,
    color: "rgba(198, 210, 255, 1)",
    unit: "家",
  },
  {
    name: "省级绿美村庄",
    value: 278,
    color: "rgba(198, 254, 255, 1)",
    unit: "台",
  },
  {
    name: "省级特色田园乡村",
    value: 56,
    color: "rgba(255, 249, 198, 1)",
    unit: "台",
  },
  {
    name: "市级特色田园乡村",
    value: 339,
    color: "rgba(255, 198, 247, 1)",
    unit: "家",
  },
  {
    name: "国家级传统村落",
    value: "33",
    color: "rgba(255, 249, 198, 1)",
    unit: "台",
  },
  {
    name: "省级传统村落",
    value: "10254",
    color: "rgba(255, 224, 198, 1)",
    unit: "台",
  },
]);

const echarts1 = ref<HTMLElement>();
const myChart1 = ref<any>();
const initEcharts = () => {
  myChart1.value = echarts.init(echarts1.value!);
  myChart1.value.setOption({
    grid: [
      {
        show: false,
        bottom: 36,
        top: 36,
      },
    ],
    legend: {
      show: false,
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
        name: "生态河道长度统计",
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
};
onMounted(() => {
  initEcharts();
});
</script>

<style scoped lang="scss">
.footer-4 {
  display: flex;
  align-items: center;
  transform-origin: top;
  padding: 0 10px;
  flex: 1;
  .img-box {
    width: 25px;
    height: 200px;
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
  .footer-4-right {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    > img {
      width: 245px;
    }
  }
  .footer-4-left {
    color: #ffffff;
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    margin-left: 10px;
    > div {
      height: 30px;
      padding-left: 16px;
      line-height: 30px;
      background-color: rgb(60 60 109 / 67%);
      border-radius: 4px;
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.main {
  pointer-events: none;
  position: fixed;
  top: 80px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: #fff;
  .item-footer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex: 1;
    .footer-3 {
      display: flex;
      flex-wrap: wrap;
      padding: 30px 38px 0;
      flex: 1;
      .item {
        flex-basis: 50%;
        display: flex;
        align-items: center;

        img {
          width: 65px;
          height: 80px;
          margin-right: 6px;
        }
      }
    }
    .footer-2 {
      display: flex;
      justify-content: space-between;
      padding: 36px 20px;
      .item {
        width: 108px;
        height: 181px;
        text-align: center;
        box-sizing: border-box;
        padding: 70px 18px 0;
        font-size: 12px;
        margin-right: 10px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .footer-1 {
      flex: 1;
      background-image: url("/img/xcjs/分组 1.png");
      background-repeat: no-repeat;
      background-position: center center;
      position: relative;
      .item {
        width: 100px;
        position: absolute;
        text-align: center;

        > div:first-child {
          font-size: 20px;

          margin-bottom: 43px;
        }
        > div:last-child {
          font-size: 12px;
        }
      }
    }
  }
  .item-2 {
    display: flex;
    flex-wrap: wrap;
    align-self: center;
    justify-content: space-around;
    padding: 25px 0;
    .item {
      width: 202px;
      height: 77px;
      background-size: cover;
      background-repeat: no-repeat;
      box-sizing: border-box;
      color: #fff;
      padding-top: 10px;
      padding-left: 68px;
      font-size: 12px;
      span {
        font-size: 24px;
      }
      &:first-child {
        margin-bottom: 30px;
      }
    }
  }
  .item-1 {
    pointer-events: all;
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: rgba(14, 33, 55, 0.9);
    border: 1px solid #264c67;
    border-radius: 8px;
    padding: 26px 0;
    box-shadow: 18px 18px 18px rgb(1 28 51), 18px -18px 18px rgb(1 28 51),
      -18px 18px 18px rgb(1 28 51), -18px -18px 18px rgb(1 28 51);
    .item-1-item {
      width: 303px;
      height: 110px;
      color: #fff;
      box-sizing: border-box;
      padding-left: 123px;
      padding-top: 26px;
      font-size: 14px;

      .value {
        color: rgba(255, 255, 255, 0.59);
        span {
          font-size: 28px;
        }
      }
    }
  }
}
</style>
