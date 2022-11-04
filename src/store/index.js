// To store redux related file
// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

// Create a new store, then point at the reducer function
const store = configureStore({
  reducer: {
    // Will be merged into one main reducer to the store
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store; // only provide once, to the highest level of project - aka index.js

// // Create a counter reducer
// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     // MUST overwrite with a new object, DO NOT change the existing state
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter
//     }
//   }

//   return state;
// };





