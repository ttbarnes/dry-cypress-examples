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

Also, it should be safe to assume that every page will have a heading - otherwise, there are more than likely to be design/accessibility issues.

Instead, a command could be created and this could simply become:

```js
cy.assertText(mainHeading(), 'The landing page');
```

By creating an `assertText` command, we can ensure that:

- Every assertion asserts the text with strict equality, instead of "should contain".
- Individual E2E tests have only 1 line per assertion instead of 3 lines.
- Tests are DRY.
- If Cypress's `invoke('text')` or `text.trim()` methods change, we only need to update it in one place.

The assertion could even become the following - avoiding the need to import the `mainHeading` selector in individual tests.

```js
cy.assertMainHeadingText('The landing page');
```

This might seem minor at first glance, but as an application grows, we could be repeating the same assertions throughout every test, with the only difference being the actual text.

For example, 1x test spec could contain 4x lines of code to assert a single piece of text. If you have 200 tests, this means 800 lines of code, when this could just be 200 lines of code - 1 line for each spec.

##  Prerequisite

- Node version 18 or higher with corresponding npm.
- Run `npm install` or `yarn install` in the root directory.

## Running locally

- Spin up the UI

```bash
npm run dev
```

- Open up the Cypress GUI

```bash
cd e2e-tests && npx cypress open .
```
