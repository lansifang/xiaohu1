import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
//引入小仓库
import home from './home'
import search from './search'



// const state = {
//     count:1
// };//state：仓库数据储存地方
// const mutations = {
//     ADD(state){
//         state.count++;
//     }
// };//mutations：修改state的唯一手段
// const actions = {
//     //这里可以书写业务逻辑，但是不能修改state
//     add({commit}){
//         commit('ADD')
//     }
// };//actions：书写自己的业务逻辑，也可以处理异步
// const getters = {};//getters：理解为计算属性，用于简化仓库数据
export default new Vuex.Store({
    // state,
    // mutations,
    // actions,
    // getters

    //实现vuex的模块式开发
    modules:{
        home,
        search 
    }
})