import { Link as RouteLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Box, Image, Badge } from '@chakra-ui/react'
import Rating from './Rating'

const ProductCard = ({ product }) => {
	const {
		_id,
		name,
		badge,
		category,
		rating,
		numReviews,
		price,
		countInStock,
		image: { src, alt },
	} = product

	const badgeColors = {
		New: 'teal',
		Offer: 'blue',
		Oportunity: 'orange',
	}
	return (
		<RouteLink to={`/product/${_id}`}>
			<Box
				maxW='sm'
				borderWidth='1px'
				borderRadius='lg'
				overflow='hidden'
				height='100%'>
				<Image src={src} alt={alt} w='100%' />
				<Box p='6'>
					<Box d='flex' alignItems='baseline'>
						<Badge
							borderRadius='full'
							px='2'
							my={3}
							colorScheme={countInStock > 0 ? badgeColors[badge] : 'red'}>
							{countInStock > 0 ? badge : 'Out of Stock'}
						</Badge>
						<Box
							color='gray.500'
							fontWeight='semibold'
							letterSpacing='wide'
							fontSize='xs'
							textTransform='uppercase'>
							{category}
						</Box>
					</Box>
					<Box
						mt='1'
						fontWeight='semibold'
						as='h4'
						lineHeight='tight'
						isTruncated>
						{name}
					</Box>
					{numReviews > 0 ? (
						<Rating rating={rating} text={`${numReviews} reviews`} />
					) : (
						<Rating rating={rating} text={`${numReviews} reviews`} />
					)}
					<Box d='flex' mt='1' alignItems='center'>
						<Box as='span' color='gray.600' fontSize='lg' fontWeight={500}>
							${price}
						</Box>
					</Box>
				</Box>
			</Box>
		</RouteLink>
	)
}

ProductCard.propTypes = {
	product: PropTypes.shape({
		_id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		badge: PropTypes.string.isRequired,
		category: PropTypes.string.isRequired,
		rating: PropTypes.number.isRequired,
		numReviews: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
		countInStock: PropTypes.number.isRequired,
		image: PropTypes.shape({
			src: PropTypes.string.isRequired,
			alt: PropTypes.string.isRequired,
		}).isRequired,
	}).isRequired,
}

export default ProductCard
