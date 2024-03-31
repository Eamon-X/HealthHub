import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: () => import("@/pages/home/index.vue"),
    },
    {
      path: "/hospital",
      component: () => import("@/pages/hospital/index.vue"),
      children: [
        {
          path: "close",
          component: () => import("@/pages/hospital/close/index.vue"),
        },
        {
          path: "detail",
          component: () => import("@/pages/hospital/detail/index.vue"),
        },
        {
          path: "notice",
          component: () => import("@/pages/hospital/notice/index.vue"),
        },
        {
          path: "register",
          component: () => import("@/pages/hospital/register/index.vue"),
        },
        {
          path: "search",
          component: () => import("@/pages/hospital/search/index.vue"),
        },
        {
          path: "register_step1",
          component: () => import("@/pages/hospital/register/register_step1.vue"),
        },
      ],
    },
    // TODO： 了解一下ifarm路由重定向
    {
      path: "/wxlogin",
      component: () => import("@/pages/wxlogin/index.vue"),
    },
    {
      path: "/",
      redirect: "/home",
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
        top: 0,
        left: 0
    }
  },
});

export default router;
