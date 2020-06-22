module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.module
      .rule("yaml")
      .test(/\.ya?ml$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
  },  
  configureWebpack: {
    //Necessary to run npm link https://webpack.js.org/configuration/resolve/#resolve-symlinks
    resolve: {
       symlinks: false
    },      
    devtool: 'source-map'
  },
  transpileDependencies: [
    '@coreui/utils'
  ]
}
