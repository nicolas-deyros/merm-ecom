import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	Heading,
	Grid,
	Spinner,
	Box,
	Alert,
	AlertIcon,
	AlertDescription,
} from '@chakra-ui/react'
import ProductCard from '../components/ProductCard.jsx'
// import { listProducts } from '../actions/productActions.js'
import PageTemplate from '../templates/PageTemplate'

const Home = () => {
	const dispatch = useDispatch()

	const productList = useSelector(state => state.productList)

	const { loading, error, products } = productList

	useEffect(() => {
		dispatch(listProducts())
	}, [dispatch])

	const numRows = products ? Math.ceil(products.length / 5) : 0
	const rowTemplate = `repeat(${numRows}, 1fr)`

	const sortedProducts = [...products].sort((a, b) => {
		if (a.countInStock === 0 && b.countInStock > 0) {
			return 1
		} else if (a.countInStock > 0 && b.countInStock === 0) {
			return -1
		} else {
			return 0
		}
	})
	return (
		<PageTemplate>
			<Box>
				<Heading as='h2' size='xl' my={3}>
					Latest Produts
				</Heading>
				{loading ? (
					<Box
						height='100vh'
						display='flex'
						flexDir='column'
						gap={3}
						alignItems='center'
						justifyContent='center'>
						<Spinner
							thickness='4px'
							speed='0.65s'
							emptyColor='gray.200'
							color='blue.500'
							size='xl'
						/>
						<span>Loading...</span>
					</Box>
				) : error ? (
					<Alert status='error'>
						<AlertIcon />
						<AlertDescription>{error}</AlertDescription>
					</Alert>
				) : (
					<Grid
						templateColumns={[
							'repeat(1, 1fr)',
							'repeat(2, 1fr)',
							'repeat(3, 1fr)',
							'repeat(4, 1fr)',
							'repeat(5, 1fr)',
						]}
						templateRows={rowTemplate}
						justifyItems={['center', 'center', 'center', 'center', 'stretch']}
						gap={3}>
						{sortedProducts.map(product => (
							<ProductCard key={product._id} product={product} />
						))}
					</Grid>
				)}
			</Box>
		</PageTemplate>
	)
}
export default Home
