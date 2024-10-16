import { continueButton, mainHeading } from '../partials';

const baseUrl = Cypress.config('baseUrl');

describe('Example - Text assertions', () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  context('vanilla approach', () => {
    it('should render a main heading', () => {
      mainHeading().invoke('text').then((text) => {
        expect(text.trim()).equal('DRY Cypress examples');
      });
    });

    it('should render a continue button', () => {
      continueButton().invoke('text').then((text) => {
        expect(text.trim()).equal('Continue');
      });
    });
  });

  context('DRY, simpler approach', () => {
    it('should render a main heading', () => {
      cy.assertText(mainHeading(), 'DRY Cypress examples');
    });

    it('should render a continue button', () => {
      cy.assertText(continueButton(), 'Continue');
    });

    it('should render a continue button - better approach', () => {
      cy.assertContinueButton();
    });
  });
});
