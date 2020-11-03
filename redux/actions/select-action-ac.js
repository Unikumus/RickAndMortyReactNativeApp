import {SELECT_ITEM} from './types';

export const selectItemAction = (DATA) => {
  return {
    type: SELECT_ITEM,
    payload: DATA
  }
};
