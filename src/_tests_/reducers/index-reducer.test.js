import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import beerListReducer from '../../reducers/beer-list-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterBeerList: {},
      formVisibleOnPage: false
    });
  });

  test('Check that initial state of beerListReducer matches root reducer', () => {
    expect(store.getState().masterBeerList).toEqual(beerListReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that ADD_BEER action works for beerListReducer and rootReducer', () => {
    const action = {
      type: 'ADD_BEER',
      name: 'Dumpster Fire IPA',
      brand: 'End Of The World Brewing',
      price: ' $5.00',
      alcoholContent: '6%',
      pints: 124,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterBeerList).toEqual(beerListReducer(undefined, action));
  });

  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });


});