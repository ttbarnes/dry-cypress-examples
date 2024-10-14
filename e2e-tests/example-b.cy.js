import { mainHeading, continueButton } from './partials';

const baseUrl = Cypress.config('baseUrl');

describe('example B', () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('should render a main heading', () => {
    cy.assertText(mainHeading(), 'Dry Cypress examples');
  });

  it('should render a continue button', () => {
    cy.assertText(continueButton(), 'Continue');
  });
});
