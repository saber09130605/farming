<template>
  <YuyeItem class="item-box" :title="title">
    <template v-slot>
      <div style="padding: 0 20px 20px">
        <SubTitle subtitle="全年播种面积" :value="mj" unit="亩"></SubTitle>
        <div class="content-tab-box">
          <div
            v-for="item in shouList"
            :key="item.id"
            class="content-tab"
            :class="{ active: curId == item.id }"
            @click="setId(item)"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="content-box">
          <div class="content-item" style="">
            <img src="@/assets/img/小麦.png" alt="" />
            <div class="content-item-main">
              <div class="name">小麦</div>
              <div class="value">{{ data[curId - 1].data.xiaomai }}</div>
            </div>
          </div>
          <div class="content-item">
            <img src="@/assets/img/大麦.png" alt="" />
            <div class="content-item-main">
              <div class="name">元大麦</div>
              <div class="value">{{ data[curId - 1].data.yuandamai }}</div>
            </div>
          </div>
          <div class="content-item">
            <img src="@/assets/img/蚕豌豆.png" alt="" />
            <div class="content-item-main">
              <div class="name">蚕豌豆</div>
              <div class="value">{{ data[curId - 1].data.canwandou }}</div>
            </div>
          </div>
        </div>
        <div class="sub-content-box">
          <div class="sub-content-item" style="flex: 1">
            <div>
              <span clas="name">生产面积：</span>
              <span class="value">6569.53</span>
              公顷
            </div>
            <div>
              <span clas="name">较上年：</span>
              <span class="value" style="color: #f00">5%↑</span>
            </div>
          </div>
          <div>
            <div>
              <span clas="name">总产量：</span>
              <span class="value">31266</span>
              吨
            </div>
            <div>
              <span clas="name">较上年：</span>
              <span class="value" style="color: #59ff00">5%↓</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </YuyeItem>
  <!-- <div class="item-box">
    <ItemTitle :title="title" :unit="unit"></ItemTitle>
    
  </div> -->
</template>

<script setup lang="ts">
import YuyeItem from "./Yuyeziyuan/YuyeItem.vue";
import { ref } from "vue";
// import ItemTitle from "./ItemTitle.vue";
import SubTitle from "./SubTitle.vue";
const title = ref("粮食生产统计");
// const unit = ref("吨");

// const subtitleText = ref("全年播种面积");
const mj = ref(1047893);

const shouList = ref([
  {
    name: "夏收粮食",
    id: 1,
  },
  {
    name: "秋收粮食",
    id: 2,
  },
]);
const curId = ref(1);

const setId = (item: any) => {
  curId.value = item.id;
};

const data = ref([
  {
    id: 1,
    data: { xiaomai: 130142, yuandamai: 1224, canwandou: 1879 },
  },
  {
    id: 2,
    data: { xiaomai: 93142, yuandamai: 3125, canwandou: 4356 },
  },
]);
</script>

<style scoped lang="scss">
.sub-content-box {
  margin-top: 16px;
  display: flex;
  font-size: 18px;
  color: #fff;
  .value {
    color: #56c1ff;
  }
}
.item-box {
  //   border: #2f9ddf 1px solid;
  background-color: rgba(14, 33, 55, 0.9);
  width: 560px;
  height: auto;
  border-radius: 8px;
  box-sizing: border-box;

  .content-tab-box {
    display: flex;
    justify-content: space-around;
    width: 70%;
    margin: 10px auto;
    .content-tab {
      width: 120px;
      height: 36px;
      border: 1px solid #3c5973;
      border-radius: 2px;
      font-weight: 400;
      font-size: 20px;
      color: #4e7190;
      line-height: 36px;
      text-align: center;
      &.active {
        border-color: #a3d4ff;
        color: #ffffff;
        // background: linear-gradient(90deg, #ffffff 0%, #9fcaff 100%);
      }
    }
  }
  .content-box {
    display: flex;
    margin: 0 auto;
    margin-left: -20px;
    .content-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 200px;
      > img {
        width: 80px;
      }
      .content-item-main {
        text-align: center;
        color: #ffffff;
        font-size: 20px;
        flex: 1;
        // .name {
        // //   font-size: 26px;
        // }
        // .value {
        //     // font-size: ;
        // }
      }
    }
  }
}
</style>
