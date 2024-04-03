import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: () => import("@/pages/home/index.vue"),
      meta: {
        title: "首页",
      },
    },
    {
      path: "/hospital",
      component: () => import("@/pages/hospital/index.vue"),
      children: [
        {
          path: "close",
          component: () => import("@/pages/hospital/close/index.vue"),
          meta: {
            title: "停诊信息",
          },
        },
        {
          path: "detail",
          component: () => import("@/pages/hospital/detail/index.vue"),
          meta: {
            title: "医院详情",
          },
        },
        {
          path: "notice",
          component: () => import("@/pages/hospital/notice/index.vue"),
          meta: {
            title: "预约通知",
          },
        },
        {
          path: "register",
          component: () => import("@/pages/hospital/register/index.vue"),
          meta: {
            title: "预约挂号",
          },
        },
        {
          path: "search",
          component: () => import("@/pages/hospital/search/index.vue"),
          meta: {
            title: "查询",
          },
        },
        {
          path: "register_step1",
          component: () =>
            import("@/pages/hospital/register/register_step1.vue"),
          meta: {
            title: "预约第一步",
          },
        },
        {
          path: "register_step2",
          component: () =>
            import("@/pages/hospital/register/register_step2.vue"),
          meta: {
            title: "预约第二步",
          },
        },
      ],
    },
    // TODO： 了解一下ifarm路由重定向
    {
      path: "/wxlogin",
      component: () => import("@/pages/wxlogin/index.vue"),
    },
    {
      path: "/user",
      component: () => import("@/pages/user/index.vue"),
      children: [
        {
          path: "certification",
          component: () => import("@/pages/user/certification/index.vue"),
          meta: {
            title: "实名认证",
          },
        },
        {
          path: "order",
          component: () => import("@/pages/user/order/index.vue"),
          meta: {
            title: "挂号订单",
          },
        },
        {
          path: "feedback",
          component: () => import("@/pages/user/feedback/index.vue"),
          meta: {
            title: "信息反馈",
          },
        },
        {
          path: "patient",
          component: () => import("@/pages/user/patient/index.vue"),
          meta: {
            title: "就诊人管理",
          },
        },
        {
          path: "profile",
          component: () => import("@/pages/user/profile/index.vue"),
          meta: {
            title: "账号信息",
          },
        },
      ],
    },
    {
      path: "/",
      redirect: "/home",
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
      left: 0,
    };
  },
});

export default router;
