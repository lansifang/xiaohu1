//搜索的数据小仓库
import {reqGetSearchInfo} from '@/api/index'
const state = {
    searchList:{} 
};//state：仓库数据储存地方
const mutations = {
    REQGETSEARCHINFO(state,searchList){     
        state.searchList =  searchList;
    }
};//mutations：修改state的唯一手段
const actions = {
    async getSerachList({commit},params={}){
        //params形参 是当用户atcion派发的时候，第二个参数传进来的，至少是一个空对象
        let result = await reqGetSearchInfo(params);
        if(result.code === 200){
            commit('REQGETSEARCHINFO',result.data)
        }
    }
    //这里可以书写业务逻辑，但是不能修改state
};//actions：书写自己的业务逻辑，也可以处理异步
const getters = {
    //当前形参state为当前仓库的state  不是大仓库的state
    goodsList(state){
       return state.searchList.goodsList || []
    },
    trademarkList(state){
        return state.searchList.trademarkList || []
     },
     attrsList(state){
        return state.searchList.attrsList || []
     }
};//getters：理解为计算属性，用于简化仓库数据  将数据处理成自己想要的格式
export default {
    state,
    mutations,
    actions,
    getters
}