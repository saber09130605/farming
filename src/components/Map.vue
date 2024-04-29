<template>
  <div id="container"></div>
  <div
    ref="devinfowin"
    style="color: white; z-index: 100; background-color: rgba(0, 0, 0, 0.6)"
  >
    <h4 style="padding: 10px; background-color: rgba(0, 224, 255, 0.8)">
      基本信息
    </h4>
    <div style="padding: 10px">
      <div>郦夕川</div>
      <div>157****1077</div>
      <div>镇江市丹徒区谷阳大道288号</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";
// import { BMap } from 'vue3-baidu-map-gl'
onMounted(() => {
  initMap();
});
const devinfowin = ref();
window._AMapSecurityConfig = {
  securityJsCode: "你的jscode",
};
let stylesArray = [
  {
    icon: {
      //图标样式
      img: "https://a.amap.com/jsapi_demos/static/resource/img/men3.png",
      size: [16, 16], //图标的原始大小
      anchor: "bottom-center", //锚点位置
      fitZoom: 14, //最合适的级别 在此级别显示为图标原始大小
      scaleFactor: 2, //地图放大一级的缩放比例系数
      maxScale: 2, //图片的最大放大比例，随着地图放大图标会跟着放大，最大为2
      minScale: 1, //图片的最小缩小比例，随着地图缩小图标会跟着缩小，最小为1
    },
    label: {
      //文本标注
      content: "百花殿", //文本内容
      position: "BM", //文本位置相对于图标的基准点，"BM"为底部中央
      minZoom: 15, //label的最小显示级别，即文本标注在地图15级及以上，才会显示
    },
  },
  {
    icon: {
      img: "https://a.amap.com/jsapi_demos/static/resource/img/tingzi.png",
      size: [48, 63],
      anchor: "bottom-center",
      fitZoom: 17.5,
      scaleFactor: 2,
      maxScale: 2,
      minScale: 0.125,
    },
    label: {
      content: "万寿亭",
      position: "BM",
      minZoom: 15,
    },
  },
];
let zoomStyleMapping = {
  14: 0, //14-17级使用样式 0
  15: 0,
  16: 0,
  17: 0,
  18: 1, //18-20级使用样式 1
  19: 1,
  20: 1,
};
const initMap = () => {
  AMapLoader.load({
    key: "ffce38f73e1298fd3ba8220bda3469ec",
    version: "2.0",
  }).then((AMap) => {
    // 初始化地图
    let infoWindow = new AMap.InfoWindow({
      offset: new AMap.Pixel(0, -30),
      isCustom: true,
    });
    let map = new AMap.Map("container", {
      rotateEnable: true,
      pitchEnable: true,
      center: [116.397428, 39.90923],
      layers: [new AMap.TileLayer.Satellite()],
      zoom: 13,
    });
    console.log({ map });

    AMap.plugin(["AMap.ElasticMarker"], function () {
      // let content = `<h4 style="background:rgba(0, 224, 255, 0.8)">这是测试弹窗，暂无数据</h4>`;
      let elasticMarker = new AMap.ElasticMarker({
        position: [116.405562, 39.881166], //点标记位置
        styles: stylesArray, //指定样式列表
        zoomStyleMapping: zoomStyleMapping, //指定 zoom 与样式的映射
      });
      elasticMarker.on("mousemove", (e: any) => {
        infoWindow.setContent(devinfowin.value);
        infoWindow.open(map, e.target.getPosition());
      });
      elasticMarker.on("mouseout", (e: any) => {
        infoWindow.setContent("");
        infoWindow.open(map, e.target.getPosition());
      });
      map.add(elasticMarker); //添加到地图上
      map.setFitView(); //缩放地图到合适的视野级别
    });
  });
};
</script>

<style scoped>
#container {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}
</style>
