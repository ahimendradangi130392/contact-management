import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState: any) {
    console.log('initialState', initialState)
    return createStore(rootReducer, initialState);
}