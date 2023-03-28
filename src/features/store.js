import { configureStore } from '@reduxjs/toolkit'
import chooseSlice from './slice/chooseSlice'
import modalSlice from './slice/modalSlice'

export const store = configureStore({
	reducer: {
		game: chooseSlice,
		modal: modalSlice,
	},
})
