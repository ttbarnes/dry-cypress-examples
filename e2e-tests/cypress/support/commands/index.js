import assertContinueButton from './assertContinueButton';
import assertFeedbackLink from './assertFeedbackLink';
import assertLink from './assertLink';
import assertText from './assertText';
import assertUrl from './assertUrl';

import clickFeedbackLink from './clickFeedbackLink';

Cypress.Commands.add('assertContinueButton', assertContinueButton);
Cypress.Commands.add('assertFeedbackLink', assertFeedbackLink);
Cypress.Commands.add('assertLink', assertLink);
Cypress.Commands.add('assertText', assertText);
Cypress.Commands.add('assertUrl', assertUrl);

Cypress.Commands.add('clickFeedbackLink', clickFeedbackLink);
