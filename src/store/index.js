// This file is to setup redux store
import { configureStore } from '@reduxjs/toolkit';
// Slice for managing the Cart
import cartSlice from './cart-slice';

// Slice for user interface logic
import uiSlice from './ui-slice';

const store = configureStore({
// use the key 'ui' to drill into the part of the state
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer }
});

export default store;






