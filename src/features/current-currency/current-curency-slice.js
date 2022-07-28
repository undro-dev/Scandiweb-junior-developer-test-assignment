import { createSlice } from '@reduxjs/toolkit';

const currentCurrenciesSlice = createSlice({
	name: '@@currencies/current',
	initialState: '$',
	reducers: {
		setCurrentCurrency: (_, action) => action.payload,
	},
});

export const { setCurrentCurrency } = currentCurrenciesSlice.actions;
export const currentCurrenciesReducer = currentCurrenciesSlice.reducer;

export const selectCurrentCurrency = state => state.currentCurrency;
