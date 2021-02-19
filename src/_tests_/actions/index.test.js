import * as actions from './../../actions';

describe('taproom actions', () => {
  it('deleteBeer should create DELETE_BEER action', () => {
    expect(actions.deleteBeer(1)).toEqual({
      type: 'DELETE BEER',
      id: 1
    });
  });

});