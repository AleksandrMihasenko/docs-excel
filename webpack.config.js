const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';
  const isDev = !isProd;

  const fileName = function(ext) {
    return isProd ? `[name].[contenthash].bundle.${ext}`:`[name].bundle.${ext}`;
  };

  const plugins = () => {
    const base = [
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src', 'favicon.ico'),
            to: path.resolve(__dirname, 'dist'),
          },
        ],
      }),
      new MiniCssExtractPlugin({
        filename: fileName('css'),
      }),
    ];
    if (isDev) {
      base.push(new ESLintPlugin());
    }
    return base;
  };

  return {
    context: path.resolve(__dirname, 'src'),
    entry: {
      main: [
        'core-js/stable',
        'regenerator-runtime/runtime',
        './index.js',
      ],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: fileName('js'),
      clean: true,
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@core': path.resolve(__dirname, 'core'),
      },
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'src'),
      },
      port: 8001,
      open: true,
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-class-properties'],
            },
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    plugins: plugins(),
    devtool: isDev ? 'source-map' : false,
  };
};
