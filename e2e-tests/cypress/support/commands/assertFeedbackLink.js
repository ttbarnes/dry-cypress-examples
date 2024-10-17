import { feedbackLink } from '../../../partials';

/**
 * assertFeedbackLink
 * Check that a "feedback" link exists with the correct HREF and text
 */
const assertFeedbackLink = () => {
  cy.assertLink({
    selector: feedbackLink(),
    expectedHref: '/feedback',
    expectedText: 'Feedback'
  });
};

export default assertFeedbackLink;
