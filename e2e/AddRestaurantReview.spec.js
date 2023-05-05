// eslint-disable-next-line no-unused-vars
const assert = require('assert');

Feature('Menambahkan review');

Scenario('kirim review', async ({ I }) => {
  I.amOnPage('/');
  I.wait(2);
  I.waitForElement('.restaurant-card-content a');

  I.seeElement('.restaurant-card-content a');
  I.click(locate('.restaurant-card-content a').first());

  I.wait(2);
  I.waitForElement('form');
  const reviewText = 'Test End to End Testing';
  I.fillField('[name="name"]', 'Agung');
  I.fillField('[name="review"]', reviewText);
  I.click(locate('form button'));
});
