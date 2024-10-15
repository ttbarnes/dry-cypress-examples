import { continueButton } from '../../../partials';

const assertContinueButton = () => {
  cy.assertText(continueButton(), 'Continue');
};

export default assertContinueButton;
