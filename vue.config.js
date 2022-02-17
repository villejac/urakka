const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})


const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, '../server/public'),
    devServer: {
        proxy: {
            '/api/parkano': {
                target: 'http://localhost:3001/'
            },
            '/api/seinajoki': {
                target: 'http://localhost:3001/'
            },
            '/api/ilmajoki': {
                target: 'http://localhost:3001/'
            }

        }
    }
};