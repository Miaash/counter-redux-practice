import { legacy_createStore as createStore } from 'redux';
import { counterReducer } from '../Reducers';

const store = createStore(counterReducer);

export default store;
