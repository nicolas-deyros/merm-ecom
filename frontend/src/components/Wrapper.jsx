import PropTypes from 'prop-types'
import { Container } from '@chakra-ui/react'

const Wrapper = ({ children }) => {
	return (
		<Container
			maxW={{
				base: '100%',
				sm: '720px',
				md: '960px',
				lg: '1200px',
				xl: '1440px',
			}}
			px={3}>
			{children}
		</Container>
	)
}

Wrapper.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Wrapper
