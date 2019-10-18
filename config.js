const isProductEnv = process.env.NODE_ENV === 'production'

module.exports = {
  isProductEnv,
  staticPath: 'public',
  // 端口配置
  port: 3201,
  defaultFePort: 3201
}
