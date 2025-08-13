const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://kanban-dusky-five.vercel.app/",
    setupNodeEvents(on, config) {
      // Adiciona o Brave à lista já existente de browsers detectados
      config.browsers.push({
        name: 'brave',
        channel: 'stable',
        family: 'chromium',
        displayName: 'Brave',
        version: '139.0.7258.66',
        path: 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe',
        majorVersion: 139,
      });
      return config;
    },
  },
});