/* eslint-disable no-undef */
import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices/apiSlice'

const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: process.env.NODE_ENV === 'development' ? true : false,
})

export default store
