const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const development = {
    mode: "development",
    entry: {
      'index' : "./src/js/index.js",
    },
    output: {
      filename: "./js/[name].[contenthash].js",
      path: path.resolve(__dirname, "dist"),
    },
    devtool: 'source-map' , 
    module: {
      rules: [
        {
          test: /\.(jpeg|jpg|gif)$/,
          loader: 'file-loader',
          options:{
              outputPath: './assets/img/',
              context: path.resolve(__dirname, "src/"),
              name: '[path][name].[ext]?[hash]' , 
              publicPath : '../', 
              useRelativePaths: true
          }
       },
        {
          test: /\.(png|jpg|svg|gif)$/,
          loader: 'file-loader',
          options:{
              // outputPath: './assets/icon/',
              context: path.resolve(__dirname, "src/"),
              name: '[path][name].[ext]?[hash]' , 
              publicPath : '../',
              useRelativePaths: true
          }, 
       },
      {
          test: /\.(eot|ttf|otf|woff|woff2|json|xml)$/,
          loader: 'file-loader',
          options:{
              context: path.resolve(__dirname, "src/"),
              name: '[path][name].[ext]?[hash]' ,
              publicPath : '../' ,
              useRelativePaths: true
          }
      },
        {
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        },
      ],
    },
  
    plugins: [
      new MiniCssExtractPlugin({
        filename: "./css/[name].css",
      }),
      new CleanWebpackPlugin(),
      new HtmlPlugin({
        template: "./src/html/index.html",
        inject: "body",
        minify: false,
        filename: "./html/index.html",
      }),
    ],
  };
  



const production = {
  mode: "production",
  entry: {
    index: "./src/js/index.js",
  },
  output: {
    filename: "./js/[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
  },

  module: {
    rules: [
      {
        test: /\.(jpg|gif|jpeg)$/,
        loader: 'file-loader',

        options:{
          context: path.resolve(__dirname, "src/"),
          name: '[path][name].[ext]?[hash]' ,
          publicPath : '../' ,
          useRelativePaths: true
      }
      },
      {
        test: /\.(ttf|otf)$/,
        loader: 'file-loader',

        options:{
          context: path.resolve(__dirname, "src/"),
          name: '[path][name].[ext]?[hash]' ,
          publicPath : '../' ,
          useRelativePaths: true
      }
      },
      {
        test: /\.(png|svg)$/,
        loader: 'file-loader',
        options:{
          context: path.resolve(__dirname, "src/"),
          name: '[path][name].[ext]?[hash]' ,
          publicPath : '../' ,
          useRelativePaths: true
      }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/[name].css",
    }),
    new CleanWebpackPlugin(),
    new HtmlPlugin({
      template: "./src/html/index.html",
      inject: "body",
      minify: true ,
      filename: "./page/index.html",
      publicPath : "../"
    }),
  ],
};


module.exports = (env) => {
  if (env.mode === "development") {
    return development;
  } else if (env.mode === "production") {
    return production;
  }
};


