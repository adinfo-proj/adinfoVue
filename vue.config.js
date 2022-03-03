module.exports = {
  runtimeCompiler: true,
  productionSourceMap: false,

  publicPath: process.env.NODE_ENV === 'production'
      ? './'
      : '/',
  devServer: {
    disableHostCheck: true,
    port: 8080,
    proxy: 'http://api.adinfo.co.kr:30000'
  }
}