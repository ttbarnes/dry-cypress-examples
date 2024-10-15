import { mainHeading, continueButton } from '../partials';

const genericPageAssertions = ({ }) => {
  describe('generic page assertions', () => {
    it('should render a main heading', () => {
      cy.assertText(mainHeading(), 'Dry Cypress examples');
    });

    it('should render a continue button', () => {
      cy.assertText(continueButton(), 'Continue');
    });
  });
};

export default genericPageAssertions;
