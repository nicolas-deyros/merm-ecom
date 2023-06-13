import React from 'react'
import { Route } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'

const routes = [
	{
		path: '/',
		element: (
			<React.Suspense fallback={<div>Loading...</div>}>
				<App />
			</React.Suspense>
		),
		children: [
			<Route
				key='home'
				path='/'
				element={
					<React.Suspense fallback={<div>Loading...</div>}>
						<Home />
					</React.Suspense>
				}
			/>,
		],
	},
]

export default routes
