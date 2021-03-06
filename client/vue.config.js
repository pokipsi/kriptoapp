const path = require('path');

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:5000"
      }
    }
  },
  outputDir: path.resolve(__dirname, '../server/public')
}