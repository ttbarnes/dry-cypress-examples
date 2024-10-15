import { feedbackLink } from '../partials';

const baseUrl = Cypress.config('baseUrl');

describe('Example - Click events', () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  describe('when clicking the feedback link', () => {
    it('should redirect to `/feedback`', () => {
      feedbackLink().click();

      cy.url().should('eq', `${baseUrl}/feedback`);
    });
  });

  describe('when clicking the feedback link - better approach', () => {
    it(`should redirect to /feedback`, () => {
      cy.clickFeedbackLink();

      cy.assertUrl(`${baseUrl}/feedback`);
    });
  });
});
