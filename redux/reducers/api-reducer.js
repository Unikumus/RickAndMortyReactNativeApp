import {SET_CHARACTER, TOGGLE_IS_FETCHING} from '../actions/types';
import {usersAPI} from '../../api/api';
import {setCharacter} from '../actions/set-character-ac';
import {toggleIsFetching} from '../actions/toggleIsFetching-ac';

const initialState = {
  allItems: ['1', '2'],
  isFetching: false
};

export const callApiReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_CHARACTER:{
      return {...state, allItems: action.character}
    }

    case TOGGLE_IS_FETCHING:{
      return {...state, isFetching: action.isFetching}
    }

    default: return state

  }

};

export const getDataFromApiThunkCreator = () => {
  return  (dispatch) => {
    usersAPI.getCharacter().then(data =>{
      dispatch(setCharacter(data));
      dispatch(toggleIsFetching(true))
    })
  }
};


