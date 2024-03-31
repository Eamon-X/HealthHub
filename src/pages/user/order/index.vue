<template>
    <div>
      <div v-if="$route.query.orderId">
        订单详情
      </div>
      <div v-else>
        所有订单 
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRoute } from "vue-router";
  //获取路由对象
  let $route = useRoute();
  </script>
  
  <style scoped></style>
  