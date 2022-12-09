const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/fav');
  I.wait(4);
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.wait(0.5);
  I.seeElement('.restaurants');
  I.see("You don't have any favorite restaurant.", '.restaurants');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.wait(0.5);
  I.see("You don't have any favorite restaurant.", '.restaurants');

  I.amOnPage('/');
  I.wait(2);
  I.waitForElement('.restaurant-item__content h3');

  I.seeElement('.restaurant-item__content h3');
  const firstRestaurant = locate('.restaurant-item__content h3').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.seeElement('.restaurant-item__content a');
  I.click(locate('.restaurant-item__content a').first());

  I.wait(0.5);
  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/fav');
  I.wait(0.5);
  I.waitForElement('.restaurant-item');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item__content h3');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  // unlike
  I.seeElement('.restaurant-item__content a');
  I.click(locate('.restaurant-item__content a').first());

  I.wait(1);
  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/fav');
  I.wait(1);
  I.see("You don't have any favorite restaurant.", '.restaurants');
});
