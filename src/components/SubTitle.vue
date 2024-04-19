<template>
  <div class="title-box">
    <div>{{ props.subtitle }}</div>
    <div>
      <span style="font-size: 18px">{{ props.value }}</span> {{ props.unit }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  subtitle: {
    type: String,
    default: "",
  },
  value: {
    type: Number,
    default: 0,
  },
  unit: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss">
.title-box {
  background: #484d56;
  border-radius: 4px;
  height: 36px;
  width: 90%;
  margin: 16px auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: PingFangSC, PingFang SC;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  line-height: 22px;
  text-align: left;
  font-style: normal;
  .tips {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.8);
  }
}
</style>
