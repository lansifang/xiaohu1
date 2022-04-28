<template>
  <div>
      <h2>首页</h2>
      <!-- 三级联动全局组件已经注册为全局 所有不需要在引入 -->
      <TypeNav/>
      <ListContainer/>
      <Recommend/>
      <Rank/>
      <Like/>
      <Floor/>
      <Floor/>
      <Brand/>
  </div>
</template>

<script>
//引入其余的组件
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
export default {
name:'',
components:{
  ListContainer,Recommend,Rank,Like,Floor,Brand
}
}
</script>

<style>

</style>