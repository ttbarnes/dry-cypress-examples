import { continueButton } from '../partials';
import { landingPage } from '../pages';

const { reason } = landingPage;

const baseUrl = Cypress.config('baseUrl');

describe('Example - Enter text', () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  context('vanilla approach', () => {
    describe('when submitting the form', () => {
      beforeEach(() => {
        cy.visit(baseUrl);

        reason().clear().type('Mock reason');
        continueButton().click();
      });

      it('should redirect to `/success`', () => {
        cy.url().should('eq', `${baseUrl}/success`);
      });

      // it should ...
    });
  });

  context('DRY, simpler approach', () => {
    describe('when submitting the form', () => {
      beforeEach(() => {
        cy.visit(baseUrl);

        cy.enterText(reason(), 'Mock reason');
        cy.clickContinueButton();
      });

      it('should redirect to `/success`', () => {
        cy.assertUrl(`${baseUrl}/success`);
      });

      // it should ...
    });
  });
});
