import beerListReducer from '../../reducers/beer-list-reducer';

describe('beerListReducer', () => {

  let action;
  const beerData = {
    name: 'Dumpster Fire IPA',
    brand: 'End Of The World Brewing',
    price: ' $5.00',
    alcoholContent: '6%',
    pints: 124,
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(beerListReducer({}, { type: null})).toEqual({});
  });

  test('Should successfully add new beer data to masterBeerList', () => {
    const { name, brand, price, alcoholContent, pints, id } = beerData;
    action = {
      type: 'ADD_BEER',
      name,
      brand,
      price,
      alcoholContent,
      pints,
      id
    };

    expect(beerListReducer({}, action)).toEqual({
      [id] : {
        name,
        brand,
        price,
        alcoholContent,
        pints,
        id
      }
    });
  });

});