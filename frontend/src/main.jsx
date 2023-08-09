import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import Home from './pages/Home'
import ErrorBoundary from './components/ErrorBoundary'
import { Product } from './pages/Product'
import { Cart } from './pages/Cart'
import { Checkout } from './pages/Checkout'
import { Login } from './pages/Login'
import { Profile } from './pages/Profile'
import { Register } from './pages/Register'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route path='/cart/:id' element={<Cart />} errorElement={ErrorBoundary} />
			<Route
				path='/checkout'
				element={<Checkout />}
				errorElement={ErrorBoundary}
			/>
			<Route path='/login' element={<Login />} errorElement={ErrorBoundary} />
			<Route
				path='/register'
				element={<Register />}
				errorElement={ErrorBoundary}
			/>
			<Route
				path='/profile/:id'
				element={<Profile />}
				errorElement={ErrorBoundary}
			/>
			<Route
				path='/product/:id'
				element={<Product />}
				errorElement={ErrorBoundary}
			/>
			<Route
				path='/product/:id'
				element={<Product />}
				errorElement={ErrorBoundary}
			/>
			<Route
				path='/product/:id'
				element={<Product />}
				errorElement={ErrorBoundary}
			/>
			<Route
				index={true}
				path='/'
				element={<Home />}
				errorElement={ErrorBoundary}
			/>
		</Route>,
	),
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<ChakraProvider>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</ChakraProvider>
	</React.StrictMode>,
)

reportWebVitals()
