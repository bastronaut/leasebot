import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from '../Reducers'

let store = createStore();

store.subscribe(() => console.log(store.getState()))


// https://github.com/cloudmu/react-redux-starter-kit/blob/master/src/store/configureStore.js

//  https://github.com/tj/frontend-boilerplate/blob/master/client/store/index.js
