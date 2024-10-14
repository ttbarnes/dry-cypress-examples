import { mainHeading, continueButton } from './partials';

const baseUrl = Cypress.config('baseUrl');

describe('example A', () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

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
