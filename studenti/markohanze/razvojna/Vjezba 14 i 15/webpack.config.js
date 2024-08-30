const path = require('path');
// const { mainModule } = require('process');

module.exports = {
  entry: './main.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'myscript.js'
  }
};