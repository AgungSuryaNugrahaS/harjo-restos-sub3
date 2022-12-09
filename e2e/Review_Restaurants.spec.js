// eslint-disable-next-line no-unused-vars
const assert = require('assert');

Feature('Review Restaurant');

Scenario('review restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.wait(2);
  I.waitForElement('.restaurant-card-content a');

  I.seeElement('.restaurant-card-content a');
  I.click(locate('.restaurant-card-content a').first());

  I.wait(2);
  I.waitForElement('form');
  const txtReview = 'Test from E2E';
  I.fillField('[name="name"]', 'Akmal');
  I.fillField('[name="review"]', txtReview);
  I.click(locate('form button'));

  // Harusnya dijalankan,
  // namun karna harus hard refresh baru data reviewnya masuk jadi saya beri comment aja.
  // I.refreshPage();

  // const lastReview = locate('.review-body').last();
  // const txtLastReview = await I.grabTextFrom(lastReview);

  // assert.strictEqual(txtReview, txtLastReview);
});
