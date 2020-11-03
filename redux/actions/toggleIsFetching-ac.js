import {TOGGLE_IS_FETCHING} from './types';

export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
  }
};

