## 路由的跳转
    声明路由router-link 可以进行路由跳转
    编程路由push|replace 可以进行路由跳转
    编程导航除了可以进行路由跳转，还可以左一些其他的业务逻辑


路由传参：
第一张方式：对象方式
 this.$router.push({name:'search',params:{keyword:23423},query:{id:this.keyword
如何指定params参数可以传递或者不传递，在配置路由的时候，在占位的后面加上一个问号【params可以传递或者不传】
 this.$router.push({name:'search',query:{id:this.keyword
params参数可以传递或者不传递，如果传的是空串怎么解决
使用undefined解决：params参数可否传递的问题
路由组件可以传递props数据吗  可以 3种写法
多次点击搜索跳转会报错