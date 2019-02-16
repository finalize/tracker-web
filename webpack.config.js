const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  module: {
    rules: [
        {                             // Linterを走らせる
            enforce: 'pre',           // ビルド前処理だよってこと
            loader: 'tslint-loader',  // tslint-loaderを使う
            test: /\.tsx?$/,          // tslint-loaderに渡すファイルの正規表現。xxx.tsとxxx.tsxの正規表現。
            exclude: [                // 渡さないファイル
                /node_modules/
            ],
            options: {
                emitErrors: true      // これ設定しとくとTSLintが出してくれたwarningをエラーとして扱ってくれる、要するに-Wall
            }
        },
        {
            loader: 'ts-loader',      // ts-loaderを使う、こいつがトランスパイルしてくれる
            test: /\.tsx?$/,
            exclude: [
                /node_modules/
            ],
            options: {
                configFile: 'tsconfig.json' // TypeScriptのコンパイル設定ファイル
            }
        }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public/javascripts'),
    filename: 'bundle.js'
  },
};