'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  FLASK_API_SERVER: '"http://localhost"',
  FLASK_API_PORT: '"5000"'

})
