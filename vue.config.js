module.exports = {
  runtimeCompiler: true,
  productionSourceMap: false,

  publicPath: process.env.NODE_ENV === 'production'
      ? './'
      : '/',
  devServer: {
    disableHostCheck: true,
    port: 8080,
    proxy: 'http://192.168.0.200:30000'
  }
}