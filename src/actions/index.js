export const deleteBeer = id => ({
  type: 'DELETE_BEER',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addBeer = (beer) => {
  const { name, brand, price, alcoholContent, pints, id } = beer;
  return {
    type: 'ADD_BEER',
    name,
    brand,
    price,
    alcoholContent,
    pints,
    id
  }
};