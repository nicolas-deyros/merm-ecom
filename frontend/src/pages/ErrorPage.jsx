import { useRouteError } from 'react-router-dom'
import PageTemplate from '../template/PageTemplate'

export default function ErrorPage() {
	const error = useRouteError()

	return (
		<PageTemplate>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</PageTemplate>
	)
}
