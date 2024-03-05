<template>
  <div class="top">
    <div class="content">
      <div class="left">
        <img src="@/assets/images/logo.png" alt="尚医通 预约挂号统一平台" />
        <span>尚医通 预约挂号统一平台</span>
      </div>
      <div class="right">
        <a href="#">帮助中心</a>
        <a href="#">登录/注册</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.top {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 70px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 1200px;
    height: 70px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
      span {
        font-size: 20px;
        color: #55a6fe;
      }
    }
    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        font-size: 14px;
        color: #bbb;
        text-decoration: none;
        margin-left: 12px;
      }

      .help {
        margin-right: 10px;
      }
    }
  }
}
</style>
