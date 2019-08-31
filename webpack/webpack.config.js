
const path = require('path');

module.exports = {
    mode:"production", // "production" | "development" | "none", 模式不同会开启不同的插件
    enter: "./app/enter", // string |object | array, 默认为 './src'
    output:{
        path:path.resolve(__dirname, "dist"),
        filename: "bundle.js", // "[name].js // 多入口" "[chunkhash].js // 长效缓存"
        publicPath:"/assets",
        library:"MyLibrary",
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname,"app")
                ],

                exclude:[
                    path.resolve(__dirname, "app/demo")
                ],
                issuer: {test, include, exclude},
                enforce: "pre",
                loader: "bable-loader",
                options:{
                    presets: ["es2015"]
                }
            }
        ]
    },
    plugins:[]
}