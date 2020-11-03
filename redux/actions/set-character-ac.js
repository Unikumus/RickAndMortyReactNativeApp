import {SET_CHARACTER} from './types';

export const setCharacter = (character) => {
  return {
    type: SET_CHARACTER,
    character: character
  }
};

