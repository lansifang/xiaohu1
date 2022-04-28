const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false, //关闭校验
  //代理跨域
  devServer:{
    proxy:{
      '/api':{
        target:'http://gmall-h5-api.atguigu.cn',//要请求的网站路径
        // pathRewrite:{'^/api':''}
      }
    }
  }
    //   devServer:{
    //   proxy:'http://192.168.1.6:8080'
    // }
})
