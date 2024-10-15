const assertUrl = (expectedUrl) => {
  cy.url().should('eq', expectedUrl);
};

export default assertUrl;
