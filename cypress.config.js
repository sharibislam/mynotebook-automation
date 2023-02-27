const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: [
      "cypress/e2e/misc/sample_spec.js",
      //"cypress/e2e/feature/web-ui/Note.feature",
      //"cypress/e2e/misc/*.{js,ts}",
    ],
  },
  env: {
    baseUrl: "http://localhost:3000/login",
    hostUrl: "http://localhost:5000/",
  },
});
