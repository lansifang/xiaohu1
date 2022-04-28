//当前这个模块:API进行统一管理
import requests from "./request";
//三级联动接口  /api/product/getBaseCategoryList  get  无参数
export const reqCategoryList = ()=>{
    //发送请求：axios发送请求结果Promised对象
   return requests({url:'/product/getBaseCategoryList',method:"get"})
}
//获取搜索模块数据 /api/list  post
//参数

export const  reqGetSearchInfo = (params)=>{
  return  requests({
        url:'/list',
        method:'post',
        data:params
    })
}
