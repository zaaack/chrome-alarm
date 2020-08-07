const webpack = require("webpack");
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer')
const srcDir = '../src/';

const IsDev = process.env.NODE_ENV==='development'

module.exports = {
    entry: {
        popup: path.join(__dirname, srcDir + 'popup/index.tsx'),
        // options: path.join(__dirname, srcDir + 'options/index.tsx'),
        background: path.join(__dirname, srcDir + 'background/index.ts'),
        // content_script: path.join(__dirname, srcDir + 'content_script.ts')
    },
    output: {
        path: path.join(__dirname, '../dist/js'),
        filename: '[name].js'
    },
    // optimization: {
    //     splitChunks: {
    //         name: 'vendor',
    //         chunks: "initial",
    //         minChunks: 2
    //     }
    // },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
              test: /\.css$/,
              include: [
                path.resolve(process.cwd(), 'src'),
                path.resolve(process.cwd(), 'node_modules'),
              ],
              use: [
                'style-loader',
                {
                  loader: 'css-loader',
                },
              ],
            },
            {
              test: /\.s(c|a)ss$/,
              include: [
                path.resolve(process.cwd(), 'src'),
                path.resolve(process.cwd(), 'node_modules'),
              ],
              use: [
                {
                  loader: 'style-loader',
                },
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 2,
                    modules: true,
                  },
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    plugins: () => [autoprefixer()],
                    sourceMap: IsDev,
                  },
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: IsDev,
                  },
                },
              ],
            },
            {
              test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf|mp3)$/,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 8192,
                    name(file) {
                      if (IsDev) {
                        return '[path][name].[ext]'
                      }

                      return `[name]_[hash:5].[ext]`
                    },
                  },
                },
              ],
            },
        ]
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      modules: [path.resolve(process.cwd(), 'src'), 'node_modules'],
    },
    plugins: [
        // exclude locale files in moment
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new CopyPlugin([
            { from: '.', to: '../' }
          ],
          {context: 'public' }
        ),
    ]
};
