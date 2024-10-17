/**
 * assertUrl
 * Check that the URL is correct
 * @param {String} expectedUrl: The URL to assert
 */
const assertUrl = (expectedUrl) => {
  cy.url().should('eq', expectedUrl);
};

export default assertUrl;
