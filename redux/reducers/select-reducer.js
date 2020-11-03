import {SELECT_ITEM} from '../actions/types';

const initialState = {
  currentElement: 0
};

export const selectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ITEM:
      return {...state, currentElement: action.payload};
    default: return state;
  }
};
