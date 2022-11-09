import { createSlice } from '@reduxjs/toolkit';

// Pass an object for configuration
const uiSlice = createSlice({
    name: 'ui',
    initialState: { cartIsVisible: false },
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        }
    } 
});

export const uiActions = uiSlice.actions;

export default uiSlice;




