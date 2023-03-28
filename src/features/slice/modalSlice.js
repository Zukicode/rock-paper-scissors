import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isVisible: false,
}

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		showModal: state => {
			state.isVisible = true
		},

		closeModal: state => {
			state.isVisible = false
		},
	},
})

export const { showModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
