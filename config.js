const isProductEnv = process.env.NODE_ENV === 'production'

module.exports = {
  isProductEnv,
  staticPath: 'public',
  // 数据库连接
  port: 3201,
  defaultFePort: 3201
}
