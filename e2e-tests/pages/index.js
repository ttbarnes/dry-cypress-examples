export const landingPage = {
  reason: () => cy.get('[data-cy="reason"]'),
};

export const successPage = {
  anyQuestions: () => cy.get('[data-cy="any-questions"]'),
  thankYou: () => cy.get('[data-cy="thank-you"]')
};
