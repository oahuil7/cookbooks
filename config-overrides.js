const path = require('path')
const { 
  override, 
  fixBabelImports, 
  addWebpackResolve,
  addWebpackAlias,
  addDecoratorsLegacy
} = require('customize-cra');

module.exports = override(
  // 按需加载
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),

  // resolve
  addWebpackResolve({
    extensions: ['.js', '.json', '.jsx']
  }),

  // 给文件夹取别名
  addWebpackAlias({
      "@": path.resolve(__dirname, 'src/'),
      "@a": path.resolve(__dirname, 'src/assets/'),
      "@c": path.resolve(__dirname, 'src/components/'),
      "@u": path.resolve(__dirname, 'src/utils/')
  }),

  addDecoratorsLegacy()
);