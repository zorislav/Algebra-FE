const path = require('path');

module.exports = {
    entry: './main.js',
    mode: 'production',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'myscripts.js'

    } ,
    resolve: {
        fallback: {
            "fs":false
        },
        alias: {
            handlebars: 'handlebars/dist/handlebars.min.js'
        }
    }
}