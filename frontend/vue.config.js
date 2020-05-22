
module.exports = {
    lintOnSave: true,
    devServer: {
      proxy: {
        '/': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          pathRewrite: {
            // '^/': '/'
          }
        }
      }
    }
}