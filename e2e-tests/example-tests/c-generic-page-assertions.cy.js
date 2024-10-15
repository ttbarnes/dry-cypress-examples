import genericPageAssertions from '../dry-assertions/generic-page';

const baseUrl = Cypress.config('baseUrl');

describe('Example - Generic page assertions', () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  genericPageAssertions({});

  // TODO: page with page specific elements.
});
