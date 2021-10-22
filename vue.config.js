const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const vueConfig = {
  configureWebpack: {
    // webpack plugins
    plugins: [
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
}

module.exports = vueConfig
