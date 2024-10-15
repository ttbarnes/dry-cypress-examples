import { feedbackLink } from '../partials';

const baseUrl = Cypress.config('baseUrl');

describe('Example - Link assertions', () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  describe('vanilla approach', () => {
    it('should render a feedback link', () => {
      feedbackLink().invoke('text').then((text) => {
        expect(text.trim()).equal('Feedback');
      });

      feedbackLink().should('have.attr', 'href', 'https://example.com');

    });
  });

  describe('DRY, simpler approach', () => {
    it('should render a feedback link', () => {
      cy.assertLink({
        selector: feedbackLink(),
        expectedHref: 'https://example.com',
        expectedText: 'Feedback'
      });
    });

    it('should render a feedback link - better approach', () => {
      cy.assertFeedbackLink();
    });
  });
});
