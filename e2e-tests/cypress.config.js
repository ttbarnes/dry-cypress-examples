import { defineConfig } from 'cypress';

export default defineConfig({
  viewportWidth: 1900,
  viewportHeight: 1000,
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: '**/*.cy.js'
  }
});
