const path = require('path');

module.exports = {
  entry:'./src/playground/redux-101.js',
  //entry: './src/app.js',
  output:{
    path:path.join(__dirname, 'public'),
    filename:'bundle.js'
  },
  devServer:{
    contentBase:path.join(__dirname,'public')
  },
  module:{
    rules:[{
      loader:'babel-loader',
      test:/\.js$/,
      exclude:/node_modules/
    }]
  },
  devtool:'cheap-module-eval-source-map'
};

