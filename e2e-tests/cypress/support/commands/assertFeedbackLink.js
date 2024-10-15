import { feedbackLink } from '../../../partials';

const assertFeedbackLink = () => {
  cy.assertLink({
    selector: feedbackLink(),
    expectedHref: 'https://example.com',
    expectedText: 'Feedback'
  });
};

export default assertFeedbackLink;
