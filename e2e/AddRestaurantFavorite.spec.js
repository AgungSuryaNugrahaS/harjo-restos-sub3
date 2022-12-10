const assert = require('assert');

Feature('Menambahkan restoran ke daftar favorit');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
  I.wait(4);
});

Scenario('menampilkan halaman daftar restoran favorit yang kosong', ({ I }) => {
  I.wait(0.5);
  I.seeElement('.restaurants');
  I.see('Anda belum memiliki restoran favorit.', '.restaurants');
});

Scenario('menambahkan satu restoran ke daftar favorit', async ({ I }) => {
  I.wait(0.5);
  I.see('Anda belum memiliki restoran favorit.', '.restaurants');

  I.amOnPage('/');
  I.wait(2);
  I.waitForElement('.restaurant-card-content h3');

  I.seeElement('.restaurant-card-content h3');
  const restaurant = locate('.restaurant-card-content h3').first();
  const restaurantTitle = await I.grabTextFrom(restaurant);

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
  const favoritedRestaurantTitle = await I.grabTextFrom('.restaurant-card-content h3');
  assert.strictEqual(restaurantTitle, favoritedRestaurantTitle);

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
