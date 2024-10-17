import { continueButton } from '../../../partials';

/**
 * assertContinueButton
 * Check that a "continue" button exists with the correct text
 */
const assertContinueButton = () => {
  cy.assertText(continueButton(), 'Continue');
};

export default assertContinueButton;
