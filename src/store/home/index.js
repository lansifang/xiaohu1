//引入封装好的三级联动接口数据
import {reqCategoryList} from '@/api/index'
//home的数据小仓库
const state = {
    categoryList:[]
};//state：仓库数据储存地方
const mutations = {
    CATERGORYLIST(sata,categoryList){ 
        state.categoryList =  categoryList.slice(0,16);
    }
};//mutations：修改state的唯一手段
const actions = {
    //通过API里面接口调用函数，向服务器发请求，获取服务器的数据
   async categoryList({commit}){
        let result = await reqCategoryList();
        if(result.code === 200){
            commit('CATERGORYLIST',result.data)
        }
    }
};//actions：书写自己的业务逻辑，也可以处理异步
const getters = {};//getters：理解为计算属性，用于简化仓库数据
export default {
    state,
    mutations,
    actions,
    getters
}