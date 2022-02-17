const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const path = require('path');

module.exports = {
    devServer: {
        proxy: {
            '/api/parkano': {
                target: 'http://localhost:8080/'
            },
            '/api/seinajoki': {
                target: 'http://localhost:8080/'
            },
            '/api/ilmajoki': {
                target: 'http://localhost:8080/'
            }

        }
    }
};