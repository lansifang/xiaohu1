//配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'
//使用路由插件
Vue.use(VueRouter)
//引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
//先把vueRouter原型对象的push保存一份
// let  originPush =  VueRouter.prototype.push;
// //重写push|replace
// //第一个参数：告诉原来的push方法,你往哪里跳转（传递那些参数）
// VueRouter.prototype.push = function(licction,reslove,reject){
//   if(reslove && reject){
//     //call可以调用函数一次，都可以篡改函数的上下文一次
//     originPush.call(this,location,reslove,reject);
//   }else{
//     originPush.call(this,location,()=>{},()=>{})
//   }
// }
//配置路由
export default new VueRouter({
    routes:[
      {
        path:'/home',
        component:Home,
        meta:{show:true}
      },
      {
        path:'/login',
        component:Login,
        meta:{show:true}
      },
      {
        path:'/register',
        component:Register,
        meta:{show:false}
      },
      {
        path:'/search/:keyword?',
        component:Search,
        meta:{show:true},
        name:'search',
         //路由组件可以传递props数据吗  
        //布尔值写法：params   这种写法只能传递params参数
        // props:true
        //对象写法  额外给路由传递props
        // props:{a:1,b:2}
        //函数写法：可以把params和query参数通过props传给路由组件
        props:(($route)=>{
          return {keyword:$route.params.keyword,k:$route.query.id}
        })
      },
      //重定向，在项目运行起来的时候，访问/,立马让他定向到首页
      {
          path:'*',
          redirect:'/home',
          meta:{show:true}
      }
    ]
})