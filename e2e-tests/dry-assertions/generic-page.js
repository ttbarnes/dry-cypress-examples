import { mainHeading, continueButton } from '../partials';

/**
 * genericPageAssertions
 * Assert generic elements of a page.
 * These are generic elements that are on every page,
 * with the only difference being for example, headings and button copy.
 * @param {String} mainHeading: Expected main heading text. 
 */
const genericPageAssertions = ({
  expectedMainHeading,
  expectedContinueButton = 'Continue'
}) => {
  describe('generic page assertions', () => {
    // it should render a header

    it('should render a main heading', () => {
      cy.assertText(mainHeading(), expectedMainHeading);
    });

    it('should render a continue button', () => {
      cy.assertText(continueButton(), expectedContinueButton);
    });

    // it should render a footer
  });
};

export default genericPageAssertions;
