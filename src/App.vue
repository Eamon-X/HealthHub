<template>
  <div class="container">
    <HospitalTop></HospitalTop>
    <div class="content">
      <!-- <router-link to="/home">首页</router-link>
      <router-link to="/hospital">医院</router-link> -->
      <!-- 展示路由组件的区域 -->
      <router-view></router-view>
    </div>
    <HospitalBottom></HospitalBottom>
  </div>
</template>

<script setup lang="ts">
import request from "@/utils/request";
import { onMounted } from "vue";
onMounted(() => {
  request
    .get("/hosp/hospital/1/10")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    margin-top: 70px;
    width: 1200px;
    min-height: 1000px;
  }
}
</style>
