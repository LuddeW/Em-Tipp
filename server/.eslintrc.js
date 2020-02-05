const baseConfig = require('@em-tipp/tools/.eslintrc')

module.exports = {
  ...baseConfig,

  env: {
    ...baseConfig.env,
    node: true
  }
}
