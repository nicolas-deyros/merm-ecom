import { useRouteError } from 'react-router-dom'

export default function ErrorBoundary() {
	const error = useRouteError()
	return <div>{error.message}</div>
}
