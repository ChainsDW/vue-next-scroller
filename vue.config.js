const path = require('path')

module.exports = {
  pages: {
    index: {
      entry: 'examples/main.ts',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置，使 src 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add(path.join(__dirname, '/src'))
      .end()
    config.module
      .rule("md")
      .test(/\.md$/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("vue-markdown-loader")
      .loader("vue-markdown-loader")
      .options({
        raw: true
      })
  }
}
