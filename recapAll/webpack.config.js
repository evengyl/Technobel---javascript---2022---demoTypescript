const path = require("path")

module.exports = {
    mode : "development",
    devtool : "inline-source-map",
    entry : {
        main: "./src/index.ts"
    },
    output : {
        path : path.resolve(__dirname, './dist'),
        filename : "index.js"
    },
    resolve : {
        extensions : [".ts"]
    },
    module : {
        rules : [
            {
                loader :"ts-loader"
            }
        ]
    }
}