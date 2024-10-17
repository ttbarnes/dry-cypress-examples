import { feedbackLink } from '../partials';

const baseUrl = Cypress.config('baseUrl');

describe('Example - Click events', () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  context('vanilla approach', () => {
    describe('when clicking the feedback link', () => {
      it('should redirect to `/feedback`', () => {
        feedbackLink().click();

        cy.url().should('eq', `${baseUrl}/feedback`);
      });
    });
  });

  context('DRY, simpler approach', () => {
    describe('when clicking the feedback link - better approach', () => {
      it(`should redirect to /feedback`, () => {
        cy.clickFeedbackLink();

        cy.assertUrl(`${baseUrl}/feedback`);
      });
    });
  });
});
