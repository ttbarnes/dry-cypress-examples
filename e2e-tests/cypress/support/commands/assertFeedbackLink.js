import { feedbackLink } from '../../../partials';

const assertFeedbackLink = () => {
  cy.assertLink({
    selector: feedbackLink(),
    expectedHref: '/feedback',
    expectedText: 'Feedback'
  });
};

export default assertFeedbackLink;
