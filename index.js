const resolveClientEnv = require('@vue/cli-service/lib/util/resolveClientEnv')

module.exports = (api, options) => {
  api.chainWebpack(webpackConfig => {
    const obj = resolveClientEnv(options)
    const env = obj['process.env']

    // we use process.env.BUILD
    // so we make it always expose to client
    const exposeEnv =
      (options.pluginOptions && options.pluginOptions.exposeEnv) || []
    const keys = ['BUILD'].concat(exposeEnv)
    keys.forEach(k => {
      env[k] = JSON.stringify(process.env[k])
    })

    webpackConfig
      .plugin('define')
      .use(require('webpack/lib/DefinePlugin'), [obj])
  })
}
