const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  viewportWidth: 1980,  // Largura padrão
  viewportHeight: 1080,  // Altura padrão
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/tests/**/*.cy.{js,jsx,ts,tsx}",
  },
});
