import * as actions from './../../actions';

describe('taproom actions', () => {
  it('deleteBeer should create DELETE_BEER action', () => {
    expect(actions.deleteBeer(1)).toEqual({
      type: 'DELETE_BEER',
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });
  
});