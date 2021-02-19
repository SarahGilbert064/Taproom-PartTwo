import * as c from './../actions/ActionTypes';

export const deleteBeer = id => ({
  type: c.DELETE_BEER,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addBeer = (beer) => {
  const { name, brand, price, alcoholContent, pints, id } = beer;
  return {
    type: c.ADD_BEER,
    name,
    brand,
    price,
    alcoholContent,
    pints,
    id
  }
};