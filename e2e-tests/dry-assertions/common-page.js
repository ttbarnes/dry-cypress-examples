import { continueButton, feedbackLink, mainHeading } from '../partials';

/**
 * commonPageAssertions
 * Assert common elements in a page.
 * These are elements that are repeated on every page, or the majority of pages.
 * with the only difference being for example, headings and button copy.
 * @param {String} expectedContinueButton: Expected "continue" button text.
 * @param {String} expectedMainHeading: Expected "main heading" text".
 * @param {Boolean} assertFeedbackLink: Flag for asserting the feedback link.
 */
const commonPageAssertions = ({
  expectedContinueButton = 'Continue',
  expectedMainHeading,
  assertFeedbackLink = true
}) => {
  describe('common page assertions', () => {
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

export default commonPageAssertions;
