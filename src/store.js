import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './features/cart/cart-slice';
import { currentCurrenciesReducer } from './features/current-currency/current-curency-slice';
import { modalReducer } from './features/modal/modal-slice';

export const store = configureStore({
	reducer: {
		currentCurrency: currentCurrenciesReducer,
		cart: cartReducer,
		modal: modalReducer,
	},
	devTools: true,
});
