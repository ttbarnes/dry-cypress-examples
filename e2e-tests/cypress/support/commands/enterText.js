/**
 * enterText
 * Clear and type text into a form input field, with no delay.
 * @param {Function} selector: A cypress selector
 * @param {String} text: The text to enter
 */
const enterText = (selector, text) => {
  selector.clear().type(text, { delay: 0 });
};

export default enterText;
