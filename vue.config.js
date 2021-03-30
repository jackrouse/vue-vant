'use strict'
const path = require('path')
// const defaultSettings = require('./src/settings.js')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
function resolve (dir) {
  return path.join(__dirname, dir)
}

const name = 'vue Element Admin' // page title

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following method:
// port = 8888 npm run dev OR npm run dev --port = 8888
const port = process.env.port || process.env.npm_config_port || 8888 // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      // change xxx-api/login => mock/login
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target: `http://127.0.0.1:${port}/mock`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    },
    after: require('./mock/mock-server.js')
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  css: {
    loaderOptions: {
      // 更改vant-ui的主题 需更改babel.config.js的配置 style: name => `${name}/style/less`
      // less: {
      //   modifyVars: {
      //     // 直接覆盖变量
      //     // 'text-color': '#111',
      //     // 'border-color': '#eeefff',
      //     // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
      //     'hack': `true; @import "${resolve('src/styles/_theme-vant.less')}";`
      //   }
      // },
      sass: {
        implementation: require('sass'),
        data: '@import "@/styles/_mixin.scss";@import "@/styles/_variables.scss";' // 全局引入
      }
    }
  },
  chainWebpack (config) {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()

    config
      // https://webpack.js.org/configuration/devtool/#development
      .when(process.env.NODE_ENV === 'development'
        // config => config.devtool('cheap-source-map')
      )

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
            // `runtime` must same as runtimeChunk name. default is `runtime`
              inline: /runtime\..*\.js$/
            }])
            .end()
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                vant: {
                  name: 'chunk-vant', // split elementUI into a single package
                  priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                  test: /[\\/]node_modules[\\/]_?vant(.*)/ // in order to adapt to cnpm
                },
                commons: {
                  name: 'chunk-commons',
                  test: resolve('src/components'), // can customize your rules
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          config.optimization.runtimeChunk('single')
          // gzip需要nginx进行配合
          config
            .plugin('compression')
            .use(CompressionWebpackPlugin)
            .tap(() => [
              {
                test: /\.js$|\.html$|\.css/, // 匹配文件名
                threshold: 10240, // 超过10k进行压缩
                deleteOriginalAssets: false // 是否删除源文件
              }
            ])
          // config.optimization.minimizer([
          //   new UglifyjsWebpackPlugin({
          //     // 生产环境推荐关闭 sourcemap 防止源码泄漏
          //     // 服务端通过前端发送的行列，根据 sourcemap 转为源文件位置
          //     // sourceMap: true,
          //     uglifyOptions: {
          //       warnings: false,
          //       compress: {
          //         drop_console: true,
          //         drop_debugger: true
          //       }
          //     }
          //   })
          // ])
        }
      )
  }
}
