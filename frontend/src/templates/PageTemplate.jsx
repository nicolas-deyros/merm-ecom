import PropTypes from 'prop-types'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Wrapper from '../components/Wrapper'

const PageTemplate = ({ children }) => {
	return (
		<>
			<Header />
			<main style={{ minHeight: '85dvh', margin: '.5rem 0' }}>
				<Wrapper style={{ Height: '100dvh' }}>{children}</Wrapper>
			</main>
			<Footer />
		</>
	)
}

PageTemplate.propTypes = {
	children: PropTypes.node.isRequired,
}

export default PageTemplate
