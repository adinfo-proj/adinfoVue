module.exports = {
  runtimeCompiler: true,
  productionSourceMap: false,

  publicPath: process.env.NODE_ENV === 'production'
      ? './'
      : '/',
  devServer: {
    disableHostCheck: true,
    port: 8080,
//    proxy: 'http://dbfactory.kr:30000'
  }
}