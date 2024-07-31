const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1336,
  viewportHeight: 800,
  chromeWebSecurity: false,
  e2e: {
    specPattern: 'cypress/**/*.cy.ts',
    baseUrl: 'https://juice-shop.herokuapp.com',
    env: {
      "user_email": "",
      "user_password": "",
      "false_password": "",
      "invalid_user": "",
      "invalid_password": ""
    }
    
  }
})