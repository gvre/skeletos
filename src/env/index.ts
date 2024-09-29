export function isProductionEnvironment() {
  return process.env['NODE_ENV'] === 'production';
}
