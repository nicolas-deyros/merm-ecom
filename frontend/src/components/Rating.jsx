import PropTypes from 'prop-types'
import { Box, Icon } from '@chakra-ui/react'
import {
	TiStarFullOutline,
	TiStarHalfOutline,
	TiStarOutline,
} from 'react-icons/ti'
import { block } from 'million/react'

const Rating = block(({ rating, text }) => {
	const fullStars = Math.floor(rating)
	const halfStars = Math.round(rating - fullStars)
	const emptyStars = 5 - fullStars - halfStars
	const starColor = 'yellow.500'

	return (
		<Box>
			{Array(fullStars)
				.fill()
				.map((_, index) => (
					<Icon key={index} as={TiStarFullOutline} color={starColor} />
				))}
			{Array(halfStars)
				.fill()
				.map((_, index) => (
					<Icon key={index} as={TiStarHalfOutline} color={starColor} />
				))}
			{Array(emptyStars)
				.fill()
				.map((_, index) => (
					<Icon key={index} as={TiStarOutline} color={starColor} />
				))}
			<Box
				as='span'
				fontSize='sm'
				ml={3}
				color='gray.600'
				fontWeight='semibold'>
				{text && text}
			</Box>
		</Box>
	)
})

Rating.defaultProps = {
	rating: 0,
}

Rating.propTypes = {
	rating: PropTypes.number.isRequired,
	text: PropTypes.string,
}

export default Rating
