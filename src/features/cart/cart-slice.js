import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
	name: '@@cart',
	initialState: [],
	reducers: {
		addProductToCart: (state, action) => {
			const choiceUser = action.payload.choiceUser || [];

			if (!action.payload.hasOwnProperty('choiceUser')) {
				action.payload.attributes.forEach(el =>
					choiceUser.push(el.items[0].value + el.name)
				);
			}

			const itemIndex = state.findIndex(
				orderItem => orderItem.id === action.payload.id
			);
			if (itemIndex < 0) {
				const newItem = {
					...action.payload,
					quantity: 1,
					choiceUser: action.payload.choiceUser || choiceUser,
				};
				state.push(newItem);
			} else {
				return state.map((orderItem, index) => {
					if (index === itemIndex) {
						return {
							...orderItem,
							quantity: orderItem.quantity + 1,
							choiceUser: action.payload.choiceUser || choiceUser,
						};
					} else {
						return orderItem;
					}
				});
			}
		},
		increment: (state, action) => {
			const itemIndex = state.findIndex(item => item.name === action.payload);

			return state.map((el, index) => {
				if (index === itemIndex) {
					return {
						...el,
						quantity: el.quantity + 1,
					};
				} else {
					return el;
				}
			});
		},
		decrement: (state, action) => {
			const itemIndex = state.findIndex(item => item.name === action.payload);

			return state.map((el, index) => {
				if (index === itemIndex && el.quantity > 0) {
					return {
						...el,
						quantity: el.quantity - 1,
					};
				} else {
					return el;
				}
			});
		},
		clearCart: () => {
			return [];
		},
	},
});

export const { addProductToCart, increment, decrement, clearCart } =
	cartSlice.actions;
export const cartReducer = cartSlice.reducer;

export const selectCart = state => {
	return state.cart.filter(el => el.quantity > 0);
};
