const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 引入分离 css 文件的 模块
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({ template: './publk/index.html' }),
    new MiniCssExtractPlugin({
      filename: 'css/index.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/, // 正则表达式
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },

          'css-loader',
        ], // 先 css-loader后style-loader
      },
      {
        test: /\.less$/,
        use: [
          // 分离出 css 内容
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        type: 'asset',
        generator: {
          filename: 'images/[hash][ext]',
        },
      },
      // 处理字体图标的解析
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        type: 'asset',
        generator: {
          filename: 'fonts/[hash][ext]',
        },
      },
    ],
  },
}
