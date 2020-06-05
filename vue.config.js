const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const CompressionWebpackPlugin = require("compression-webpack-plugin");

const ENV = process.env.NODE_ENV || "development";
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
    if (ENV === "production") {
      config.plugin("webpack-bundle-analyzer").use(BundleAnalyzerPlugin);
      config
        .plugin("moment-ignore")
        .use(
          new webpack.ContextReplacementPlugin(
            /moment[/\\]locale$/,
            /zh-cn|zh-hk|en/
          )
        );
      config.plugin("gzip").use(
        new CompressionWebpackPlugin({
          algorithm: "gzip",
          test: /\.(js|css|html)$/,
          threshold: 10240,
          minRatio: 0.8,
        })
      );
    }
  },

  // 禁用生产环境的sourceMap
  // productionSourceMap: false,
};
