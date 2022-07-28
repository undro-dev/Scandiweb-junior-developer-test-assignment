import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
	name: '@@modal',
	initialState: {
		openModaL: false,
	},
	reducers: {
		toggleModal: (state, action) => {
			if (action.payload === undefined) {
				state.openModaL = !state.openModaL;
			} else {
				state.openModaL = action.payload;
			}

			state.openModaL === true
				? (document.body.style.overflow = 'hidden')
				: (document.body.style.overflow = 'auto');
		},
	},
});

export const { toggleModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;

export const selectModal = state => state.modal;
