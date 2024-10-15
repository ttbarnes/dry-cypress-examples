const assertLink = ({ selector, expectedText, expectedHref }) => {
  selector.should('have.attr', 'href', expectedHref);

  cy.assertText(selector, expectedText);
};

export default assertLink;
