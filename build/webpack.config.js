var path = require( 'path' );
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {

    entry: path.resolve( __dirname, '../app/index/index.js' ),

    output: {
        path: path.resolve( __dirname, '../output/static' ),
        publicPath: 'static/',
        filename: '[name].[hash].js',
        chunkFilename: '[id][chunkhash].js'
    },
    resolve: {
        extensions: [ '', '.js', '.vue' ],
        alias: {
            'Vue': 'vue/dist/vue.js'
        }
    },

    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel?presets=es2015',
                exclude: /node_modules/
            }
        ]
    },

    Favlist: {
        loaders: {
            js: 'babel'
        }
    },

    plugins: [
        new HtmlWebpackPlugin( {
            filename: '../index.html',
            template: path.resolve( __dirname, '../app/index/index.html' ),
            inject: true
        } )
    ]

}