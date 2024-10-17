/**
 * assertLink
 * Check that a link exists with the correct HREF and text
 * @param {Function} selector: A Cypress selector
 * @param {String} expectedText: The text to assert
 * @param {String} expectedHref: The HREF to assert
 */
const assertLink = ({ selector, expectedText, expectedHref }) => {
  selector.should('have.attr', 'href', expectedHref);

  cy.assertText(selector, expectedText);
};

export default assertLink;
