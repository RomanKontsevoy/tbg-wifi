// var tinyPngWebpackPlugin = require('tinypng-webpack-plugin');

module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? ''
        : '/',
}

// module.exports = {
//     plugins: [
//         new tinyPngWebpackPlugin({
//             key:"VBDkBCpEXLRet4VLaS4IBUGdwNi6YQL4",//can be Array, eg:['your key 1','your key 2'....]
//             ext: ['png', 'jpeg', 'jpg'],//img ext name
//         })
//     ]
// }