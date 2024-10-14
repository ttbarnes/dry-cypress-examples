import genericPageAssertions from './dry-assertions/generic-page';

const baseUrl = Cypress.config('baseUrl');

describe('example C', () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  describe('generic page assertions', () => {
    genericPageAssertions({});
  });
});
