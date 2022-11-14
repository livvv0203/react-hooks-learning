import { createSlice } from '@reduxjs/toolkit';

// Pass an object for configuration
const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
        // Set nofitication to an object
        state.notification = {
            status: action.payload.status,
            title: action.payload.title,
            message: action.payload.message, 
        };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
