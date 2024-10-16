# DRY Cypress examples

Built with [Express](https://expressjs.com/) and [Cypress](https://www.cypress.io/).

This repo is built to demonstrate some DRY approaches to E2E testing with Cypress.

The following approaches are demonstrated with "before and after" examples:

- Text assertions
- Link assertions
- Click events
- Generic page assertions

## Why

In large applications, cypress E2E tests can become very complex.

Some tests can become repeated - for example with common elements, assertions and user journeys.

A simple example would be the following. To assert that some text equals X, you could do the following:

```js
cy.get('[data-cy="main-heading"]').invoke('text').then((text) => {
  expect(text.trim()).equal('The landing page');
});
```

This is quite a lot of methods and lines of code for a simple, strict equality text assertion.

Instead, a command could be created and this could simply become:

```js
cy.assertText(mainHeading(), 'The landing page');
```

The assertion could even become the following - avoiding the need to import the `mainHeading` selector in individual tests.

```js
cy.assertMainHeadingText('The landing page');
```

It might seem minor at first glance. Such approaches can be adapted to many other areas, which improve the test suite and ultimately reduce development time on E2E tests. By creating such commands, we can ensure that:

- Every assertion asserts the text with strict equality, instead of "should contain".
- Individual E2E tests have only 1 line per assertion instead of 3 lines.
- Tests are DRY and consistent, with improved readability.
- Tests for user journey iterations become easier to update.
- Future E2E refactoring is easier, since we should only need to update in one place.
- Once some patterns are in place, reduce time and effort on E2E tests.
- Unlikely, but if Cypress's `invoke('text')` or `text.trim()` methods change, we only need to update them in one place.

Additionally, as an application grows, we could otherwise be repeating the same assertions throughout multiple tests. With text assertions, the only differences between tests are the selector and/or expected text.

For example, 1x test spec could contain 4x lines of code to assert a single piece of text. If you have 200 tests, this means 800 lines of code. Instead, this could be 200 lines of code; 1 line for each spec.

It is best to introduce such approaches as early as possible. As a real world example - in a "medium sized, historical project", I recently introduced a generic `assertText` command **which removed just over 2,000 lines of code**.

This repo aims to demonstrate such approaches with simple "before and after" examples.

## Examples

| Name    | Before/After spec examples |
| -------- | ------- |
| [cy.assertText](https://github.com/ttbarnes/dry-cypress-examples/blob/main/e2e-tests/cypress/support/commands/assertText.js)  | [a-text-assertions.cy.js](https://github.com/ttbarnes/dry-cypress-examples/blob/main/e2e-tests/example-tests/a-text-assertions.cy.js)    |
| [cy.assertLink](https://github.com/ttbarnes/dry-cypress-examples/blob/main/e2e-tests/cypress/support/commands/assertLink.js)  | [b-link-assertions.cy.js](https://github.com/ttbarnes/dry-cypress-examples/blob/main/e2e-tests/example-tests/b-link-assertions.cy.js)    |
| [cy.clickCommonLink](https://github.com/ttbarnes/dry-cypress-examples/blob/main/e2e-tests/cypress/support/commands/clickFeedbackLink.js)  | [c-click-events.cy.js](https://github.com/ttbarnes/dry-cypress-examples/blob/main/e2e-tests/example-tests/c-click-events.cy.js)    |
| [commonPageAssertions](https://github.com/ttbarnes/dry-cypress-examples/blob/main/e2e-tests/dry-assertions/common-page.js)  | [d-common-page-assertions.cy.js](https://github.com/ttbarnes/dry-cypress-examples/blob/main/e2e-tests/example-tests/d-common-page-assertions.cy.js)    |

## Prerequisite

- Node version 18 or higher with corresponding npm.
- Run `npm install` or `yarn install` in the root directory.

## Running locally

- Spin up the UI

```bash
npm run dev
```

- In a separate terminal, open up the Cypress GUI

```bash
cd e2e-tests && npx cypress open .
```
