require("@babel/polyfill");


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',
    entry : {
        main: [
            '@babel/polyfill',
            './src/index',
        ]
    },
    resolve: {extensions: ['.js', '.ts']},
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Is it sunny tomorrow ?',
            template: './src/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new CopyWebpackPlugin(
            { 
                patterns: [
                    {
                        from:'./src/assets/images',
                        to:'assets/images'   
                    }
                ]}),
        new Dotenv()
    ],
    module: {
        rules: [
            {
                test: [/.js$/],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }
            },
            {   
                test: /\.(sa|sc|c)ss$/,
                use: [    
                    MiniCssExtractPlugin.loader,    
                    'css-loader',   
                    'sass-loader'  
                ] 
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'assets/images'
                    }
                  }
                ]
              }
        ]
    }
  };