const withSass = require('@zeit/next-sass')

module.exports = withSass({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      loader: 'url-loader'
    })
    return config
  }
})