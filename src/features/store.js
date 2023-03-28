import { configureStore } from '@reduxjs/toolkit'
import chooseSlice from './slice/chooseSlice'

export const store = configureStore({
	reducer: {
		game: chooseSlice,
	},
})
