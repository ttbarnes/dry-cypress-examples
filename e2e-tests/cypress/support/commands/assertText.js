const assertText = (selector, expected) => {
  selector.invoke('text').then((text) => {
    expect(text.trim()).equal(expected);
  });
};

export default assertText;
