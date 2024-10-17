import commonPageAssertions from '../dry-assertions/common-page';
import { continueButton, mainHeading } from '../partials';
import { successPage } from '../pages';

const baseUrl = Cypress.config('baseUrl');

/**
 * NOTE:
 * For the purpose of these examples, i've kept 2x pages in 1x spec,
 * to easily demonstrate the differences and possibilities.
 * In a real world E2E suite, each page would be split up into their own page specs.
 */
describe('Example - Common page assertions', () => {
  context('vanilla approach', () => {
    describe('Landing page', () => {
      beforeEach(() => {
        cy.visit(baseUrl);
      });

      it('should render a main heading', () => {
        mainHeading()
          .invoke('text')
          .then((text) => {
            expect(text.trim()).equal('DRY Cypress examples');
          });
      });

      it('should render a continue button', () => {
        continueButton()
          .invoke('text')
          .then((text) => {
            expect(text.trim()).equal('Continue');
          });
      });
    });

    describe('Success page', () => {
      beforeEach(() => {
        cy.visit(baseUrl);

        continueButton().click();
      });

      it('should render a main heading', () => {
        mainHeading()
          .invoke('text')
          .then((text) => {
            expect(text.trim()).equal('Form submission success');
          });
      });

      it('should render a continue button', () => {
        continueButton()
          .invoke('text')
          .then((text) => {
            expect(text.trim()).equal('Continue');
          });
      });

      it('should render `thank you` copy', () => {
        cy.assertText(
          successPage.thankYou(),
          'Thank you for submitting the form.'
        );
      });

      it('should render `any questions` copy', () => {
        cy.assertText(
          successPage.anyQuestions(),
          'If you have any questions, please ...'
        );
      });
    });
  });

  context('DRY, simpler approach', () => {
    describe('Landing page', () => {
      beforeEach(() => {
        cy.visit(baseUrl);
      });

      commonPageAssertions({ expectedMainHeading: 'DRY Cypress examples' });
    });

    describe('Success page', () => {
      beforeEach(() => {
        cy.visit(baseUrl);

        cy.clickContinueButton();
      });

      commonPageAssertions({
        expectedMainHeading: 'Form submission success',
        assertFeedbackLink: false
      });

      describe('page specific tests', () => {
        it('should render `thank you` copy', () => {
          cy.assertText(
            successPage.thankYou(),
            'Thank you for submitting the form.'
          );
        });

        it('should render `any questions` copy', () => {
          cy.assertText(
            successPage.anyQuestions(),
            'If you have any questions, please ...'
          );
        });
      });
    });
  });
});
