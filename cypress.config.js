const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://corujice-vendas-api.onrender.com",
    supportFile: "cypress/support/index.js",
    specPattern: "cypress/api/**/*.cy.js",

    requestTimeout: 10000,
    responseTimeout: 10000,
    defaultCommandTimeout: 8000,

    viewportWidth: 1280,
    viewportHeight: 720,

    video: true,
    screenshotOnRunFailure: true,

    setupNodeEvents(on, config) {},
  },

  env: {
    apiUrl: "https://corujice-vendas-api.onrender.com",
    timeout: 10000,
  },
});
