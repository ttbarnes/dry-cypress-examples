/**
 * enterText
 * Clear and type text into a form input field, with zero delay.
 * This is especially useful in a large test suite.
 * It is possible to override the default .type() command,
 * but this means that a lot of tests need to repeat .clear().
 * Having a single enterText commands removes this need
 * and helps to ensure that every instance of "enter some text",
 * has 0 delay, and always clears the input.
 * Without zero delay, this can become particularly time consuming
 * for validation tests with maximum characters.
 * E.g, if there are multiple instances of a limit of 1000 maximum characters
 * and you are testing that 1001 characters renders an error,
 * In the long term, this will save a lot of time.
 * @param {Function} selector: A Cypress selector
 * @param {String} text: The text to enter
 */
const enterText = (selector, text) => {
  selector.clear().type(text, { delay: 0 });
};

export default enterText;
