/* eslint-disable no-undef */
export const BASE_URL =
	process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : ''
// export const BASE_URL = ''
export const PRODUCTS_URL =
	process.env.NODE_ENV === 'development'
		? `${BASE_URL}/api/products`
		: '/api/products'
export const USERS_URL =
	process.env.NODE_ENV === 'development'
		? `${BASE_URL}/api/users`
		: '/api/users'
export const ORDERS_URL =
	process.env.NODE_ENV === 'development'
		? `${BASE_URL}/api/orders`
		: '/api/orders'
export const PAYPAL_URL =
	process.env.NODE_ENV === 'development'
		? `${BASE_URL}/api/config/paypal`
		: '/api/config/paypal'
