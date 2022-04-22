import { combineReducers, createStore } from 'redux';
import { ProductReducer } from './Reducer/ProductReducer';
import { Reducer } from './Reducer/Reducer';
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
  product: ProductReducer,
  login: Reducer,
});

export const store = createStore(rootReducer,composeWithDevTools());

