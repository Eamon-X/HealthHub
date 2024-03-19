<template>
  <div class="container">
    <HospitalTop></HospitalTop>
    <div class="content">
      <!-- 展示路由组件的区域 -->
      <router-view></router-view>
    </div>
    <HospitalBottom></HospitalBottom>
    <Login />
  </div>
</template>

<script setup lang="ts">

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
