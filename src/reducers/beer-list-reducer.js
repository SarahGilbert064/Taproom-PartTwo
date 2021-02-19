export default (state = {}, action) => {
  const { name, brand, price, alcoholContent, pints, id } = action;
  switch (action.type) {
  case 'ADD_BEER':
    return Object.assign({}, state, {
      [id]: {
        name,
        brand,
        price,
        alcoholContent,
        pints,
        id
      }
    });
  case 'DELETE_BEER':
    let newState = { ...state };
    delete newState[id];
    return newState;  
  default:
    return state;
  }
};