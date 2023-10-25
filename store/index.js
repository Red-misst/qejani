// store/index.js
import { configureStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers'; // Create this file with your combined reducers
import thunk from 'redux-thunk';

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
