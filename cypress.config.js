const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   baseUrl: 'https://example.cypress.io',
   retries: {
    runMode: 3,
    openMode: 2
   }
  },
});
