import { mainHeading, continueButton } from '../partials';

const baseUrl = Cypress.config('baseUrl');

describe('Example - Text assertions', () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  describe('vanilla approach', () => {
    it('should render a main heading', () => {
      mainHeading().invoke('text').then((text) => {
        expect(text.trim()).equal('Dry Cypress examples');
      });
    });

    it('should render a continue button', () => {
      continueButton().invoke('text').then((text) => {
        expect(text.trim()).equal('Continue');
      });
    });
  });

  decsribe('DRY, simpler approach', () => {
    it('should render a main heading', () => {
      cy.assertText(mainHeading(), 'Dry Cypress examples');
    });

    it('should render a continue button', () => {
      cy.assertText(continueButton(), 'Continue');
    });
  });

  // TODO: cy.assertContinueButton();
});
