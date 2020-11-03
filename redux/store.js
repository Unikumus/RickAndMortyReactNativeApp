import {createStore, combineReducers, applyMiddleware} from 'redux';
import {selectReducer} from './reducers/select-reducer'
import {callApiReducer} from './reducers/api-reducer';
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    select: selectReducer,
    fromeApi: callApiReducer
  }
);

export default createStore(rootReducer, applyMiddleware(thunkMiddleware));
