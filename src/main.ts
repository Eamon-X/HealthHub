import { createApp } from 'vue'
import App from '@/App.vue'

//引入清除默认样式
import '@/style/reset.scss'
//引入全局组件
import HospitalTop from '@/components/hospital_top/index.vue'
import HospitalBottom from '@/components/hospital_bottom/index.vue'
import router from '@/router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//创建应用实例
const app = createApp(App)
//全局注册组件
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)
//安装vue-router
app.use(router);
app.use(ElementPlus, {
    locale:zhCn
});
//挂载
app.mount('#app')
