import { continueButton, feedbackLink, mainHeading } from '../partials';

/**
 * genericPageAssertions
 * Assert generic elements of a page.
 * These are generic elements that are on every page,
 * with the only difference being for example, headings and button copy.
 * @param {String} expectedContinueButton: Expected "continue" button text. 
 * @param {String} expectedMainHeading: Expected "main heading" text".
 * @param {Boolean} assertFeedbackLink: Flag for asserting the feedback link.
 */
const genericPageAssertions = ({
  expectedContinueButton = 'Continue',
  expectedMainHeading,
  assertFeedbackLink = true
}) => {
  describe('generic page assertions', () => {
    // it should render a header

    it('should render a main heading', () => {
      cy.assertText(mainHeading(), expectedMainHeading);
    });

    it('should render a continue button', () => {
      cy.assertText(continueButton(), expectedContinueButton);
    });

    if (assertFeedbackLink) {
      it('should render a feedback link', () => {
        cy.assertFeedbackLink();
      });
    } else {
      it('should NOT render a feedback link', () => {
        feedbackLink().should('not.exist');
      });
    }

    // it should render a footer
  });
};

export default genericPageAssertions;
