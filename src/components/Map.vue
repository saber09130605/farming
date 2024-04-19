<template>
  <div id="container"></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";
// import { BMap } from 'vue3-baidu-map-gl'
onMounted(() => {
  initMap();
});

window._AMapSecurityConfig = {
  securityJsCode: "你的jscode",
};

const initMap = () => {
  AMapLoader.load({
    key: "ffce38f73e1298fd3ba8220bda3469ec",
    version: "2.0",
  }).then((AMap) => {
    // 初始化地图
    let map = new AMap.Map("container", {
      rotateEnable: true,
      pitchEnable: true,
      center: [116.397428, 39.90923],
      layers: [new AMap.TileLayer.Satellite()],
      zoom: 13,
    });
    console.log({ map });
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
