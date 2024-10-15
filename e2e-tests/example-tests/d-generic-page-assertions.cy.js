import genericPageAssertions from '../dry-assertions/generic-page';
import { anyQuestions, continueButton, thankYou } from '../partials';
import { successPage } from '../pages';

const baseUrl = Cypress.config('baseUrl');

// TODO
// TODO - "better approach" / before and after

describe('Example - Generic page assertions', () => {
  /**
   * NOTE:
   * For the purpose of these examples, i've kept 2x pages in 1x spec,
   * to easily demonstrate the differences and possibilities.
   * In a real world E2E suite, these tests would be split up into their own specs so e.g:
   * - "X page" would contain the first describe.
   * - "Success page" would contain the second describe.
   */
  describe('X page', () => {
    beforeEach(() => {
      cy.visit(baseUrl);
    });

    genericPageAssertions({ expectedMainHeading: 'DRY Cypress examples' });
  });

  describe('Success page', () => {
    beforeEach(() => {
      cy.visit(baseUrl);

      continueButton().click();
    });

    genericPageAssertions({
      expectedMainHeading: 'Form submission success',
      assertFeedbackLink: false
    });

    describe('page specific tests', () => {
      it('should render `thank you` copy', () => {
        cy.assertText(successPage.thankYou(), 'Thank you for submitting the form.');
      });

      it('should render `any questions` copy', () => {
        cy.assertText(successPage.anyQuestions(), 'If you have any questions, please ...');
      });
    });
  });
});
