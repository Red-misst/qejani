// store/reducers.js
import { combineReducers } from 'redux';
import cartReducer from '@/slices/cart';

const rootReducer = combineReducers({
  cart: cartReducer,
  // Add other reducers here if needed
});

export default rootReducer;
