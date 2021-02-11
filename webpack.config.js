module.exports = {
  module: {
    rules: [
     {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
}

// module.exports = {
//   css: {
//     loaderOptions: {
//       sass: {
//         prependData: '@import "@/assets/styles/styles.scss";'
//       }
//     }
//   },
// }