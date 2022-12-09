const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
  I.wait(4);
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.wait(0.5);
  I.seeElement('.restaurants');
  I.see('Anda belum memiliki restoran favorit.', '.restaurants');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.wait(0.5);
  I.see('Anda belum memiliki restoran favorit.', '.restaurants');

  I.amOnPage('/');
  I.wait(2);
  I.waitForElement('.restaurant-card-content h3');

  I.seeElement('.restaurant-card-content h3');
  const firstRestaurant = locate('.restaurant-card-content h3').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.seeElement('.restaurant-card-content a');
  I.click(locate('.restaurant-card-content a').first());

  I.wait(0.5);
  I.waitForElement('#favoriteButton');
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorites');
  I.wait(0.5);
  I.waitForElement('.restaurant-card');
  I.seeElement('.restaurant-card');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-card-content h3');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  // unlike
  I.seeElement('.restaurant-card-content a');
  I.click(locate('.restaurant-card-content a').first());

  I.wait(1);
  I.waitForElement('#favoriteButton');
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorites');
  I.wait(1);
  I.see('Anda belum memiliki restoran favorit.', '.restaurants');
});
