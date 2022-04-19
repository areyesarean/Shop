import { combineReducers, createStore } from 'redux';
import { ProductReducer } from './Reducer/ProductReducer';
import { Reducer } from './Reducer/Reducer';

const rootReducer = combineReducers({
  product: ProductReducer,
  login: Reducer,
});

export const store = createStore(rootReducer);
console.log(store.subscribe(() => console.log(store.getState())));
