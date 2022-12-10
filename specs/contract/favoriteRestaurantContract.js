// eslint-disable-next-line import/prefer-default-export
export const favoriteRestaurantModel = (restaurant) => {
  it('harus menampilkan restoran yang sudah ditambahkan', async () => {
    restaurant.putRestaurant({ id: 1 });
    restaurant.putRestaurant({ id: 2 });

    expect(await restaurant.getRestaurant(1))
      .toEqual({ id: 1 });
    expect(await restaurant.getRestaurant(2))
      .toEqual({ id: 2 });
    expect(await restaurant.getRestaurant(3))
      .toEqual(undefined);
  });

  it('harus menolak penambahan restoran apabila restoran tidak memiliki properti yang benar ', async () => {
    restaurant.putRestaurant({ aProperty: 'property' });

    expect(await restaurant.getAllRestaurants())
      .toEqual([]);
  });

  it('harus dapat mengembalikan semua restoran yang telah ditambahkan', async () => {
    restaurant.putRestaurant({ id: 1 });
    restaurant.putRestaurant({ id: 2 });

    expect(await restaurant.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  it('harus dapat menghapus restoran favorit', async () => {
    restaurant.putRestaurant({ id: 1 });
    restaurant.putRestaurant({ id: 2 });
    restaurant.putRestaurant({ id: 3 });

    await restaurant.deleteRestaurant(1);

    expect(await restaurant.getAllRestaurants())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('harus menghandle permintaan untuk menghapus restoran walaupun restoran belum ditambahkan', async () => {
    restaurant.putRestaurant({ id: 1 });
    restaurant.putRestaurant({ id: 2 });
    restaurant.putRestaurant({ id: 3 });

    await restaurant.deleteRestaurant(4);

    expect(await restaurant.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });
};
