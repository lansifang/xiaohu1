import Vue from 'vue'
import App from './App.vue'
//引入路由
//3极联动组件 全局组件
import TypeNav from '@/components/TypeNav'
//第一个参数：全局组件名字，第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav);
//引入MockServes.js数据
import '@/mock/mockServe'
import router from '@/router'  //引入路由
import store from '@/store'  //引入Vuex数据仓库
Vue.config.productionTip = false
//测试接口
// import {reqGetSearchInfo} from '@/api'
// reqGetSearchInfo();
new Vue({
  render: h => h(App),
  router,
  //注册数据仓库：组件实例身上会多了一个$stores属性
  store
}).$mount('#app')
