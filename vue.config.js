const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  // productionSourceMap: false,
  devServer: {
    public: "10.0.0.119:8080",
    proxy: {
      // 匹配 api 前缀
      "/api": {
        target: "http://localhost:6003/",
        changeOrigin: true,
        ws: true,
        //logLevel: 'debug',
        // 把 api 前缀去掉
        // pathRewrite: {
        //   '^/api': ''
        // }
      },
      "/public": {
        target: "http://localhost:6003/",
        changeOrigin: true,
        ws: true,
      },
    },
    disableHostCheck: true,
    overlay: {
      warnings: false,
      errors: false,
    },
  },
  configureWebpack: {
    devtool: "source-map",
    externals: {
      /**
       * 这里采用Object的形式
       * 更多的形式参考(https://webpack.js.org/configuration/externals/#src/components/Sidebar/Sidebar.jsx)
       * key: 依赖包的名字
       * value: 依赖包挂载在项目中的变量名
       * 挂载的变量必须与依赖包中挂载的一样，在项目中使用也是这个变量名
       */
      vue: "Vue",
      "vue-router": "VueRouter",
      vuex: "Vuex",
      axios: "axios",
    },
  },
  // chainWebpack: (config) => {
  //   // new Loader for ts
  //   config.module
  //     .rule("typescript")
  //     .test(/\.ts$/)
  //     .use("ts-loader")
  //     .loader("ts-loader")
  //     .end();
  // },
  chainWebpack: (config) => {
    config.plugin("webpack-bundle-analyzer").use(BundleAnalyzerPlugin);
  },
};
