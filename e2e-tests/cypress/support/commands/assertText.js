
/**
 * assertText
 * Check that a text element exists with the correct text
 * @param {Function} selector: A Cypress selector
 * @param {String} expected: The text to assert
 */
const assertText = (selector, expected) => {
  selector.invoke('text').then((text) => {
    expect(text.trim()).equal(expected);
  });
};

export default assertText;
