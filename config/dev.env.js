'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  FLASK_API_SERVER: '"http://localhost"',
  FLASK_API_PORT: '"5000"'

})
