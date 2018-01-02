module.exports = {
    entry: {
        app: './app.js' // chunk name: 路径需要带上./
    },
    output: {
        filename: '[name].[hash:5].js'
    }
}