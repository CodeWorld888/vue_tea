const path = require('path')
const { defineConfig } = require('@vue/cli-service')
// const { config } = require('vue/types/umd')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  //代理
  devServer: {
	  proxy: {
	    '/api': {
	      target: "http://localhost:3000",
	      changeOrigin: true,
	      pathRewrite: {
	        '^/api': '/api'
	      }
	    }
	  },
	},
  //数据代理
  configureWebpack:(config)=>{
    config.resolve = {
      extensions:['.js','.json','.vue'],
      alias:{
        '@':path.resolve(__dirname,'./src')
      }
    }
  }
})
