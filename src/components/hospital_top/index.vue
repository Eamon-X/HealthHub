<template>
  <div class="top">
    <div class="content">
      <div class="left" style="cursor: pointer" @click="goHome">
        <img src="@/assets/images/logo.png" alt="尚医通 预约挂号统一平台" />
        <span>尚医通 预约挂号统一平台</span>
      </div>
      <div class="right">
        <p class="help">帮助中心</p>
        <!-- 如果没有用户名字:显示登录注册 -->
        <p class="login" @click="login" v-if="!userStore.userInfo.name">
          登录/注册
        </p>
        <!-- 如果有用户信息展示用户信息 -->
        <el-dropdown v-else>
          <span class="el-dropdown-link">
            {{ userStore.userInfo.name }}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="goUser('/user/certification')"
                >实名认证</el-dropdown-item
              >
              <el-dropdown-item @click="goUser('/user/order')"
                >挂号订单</el-dropdown-item
              >
              <el-dropdown-item @click="goUser('/user/patient')"
                >就诊人管理</el-dropdown-item
              >
              <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import useUserStore from "@/store/modules/user";
import { ArrowDown } from "@element-plus/icons-vue";

const userStore = useUserStore();
const $router = useRouter();
function goHome() {
  $router.push("/home");
}
function login() {
  userStore.visiable = true;
}
function goUser(route: string) {
  $router.push(route);
}
function logout() {
  userStore.logout();
  $router.push("/home");
}
</script>

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
      font-size: 14px;
      color: #bbb;
      .help {
        margin-right: 10px;
      }
    }
  }
}
</style>
