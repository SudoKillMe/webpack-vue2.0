var path = require( 'path' );
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {

    entry: { 
        index: [ path.resolve( __dirname, '../app/index/index.js' ) ] 
    },

    output: {
        path: path.resolve( __dirname, '../output/static' ),
        //publicPath: 'static/',
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[id][chunkhash].js'
    },
    resolve: {
        extensions: [ '', '.js', '.vue' ],
        alias: {
            'vue': 'vue/dist/vue.js',
            'materialCSS': 'vue-material/dist/vue-material.css' 
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
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.(png|jpeg|jpg|gif)$/,
                loader: 'url?limit=8192'
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
            filename: 'index.html',
            template: path.resolve( __dirname, '../app/index/index.html' ),
            inject: true
        } )
    ]

}