module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/': './',
  outputDir: 'dist',
  assetsDir: 'assets',
  indexPath: 'index.html',
  devServer: {
    open: true,
    host: 'localhost',
    port: 80,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'https://dev.yifenganxin.com:8541/biz',
        secure: false,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}