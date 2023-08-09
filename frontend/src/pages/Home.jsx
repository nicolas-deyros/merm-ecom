import { useGetProductsQuery } from '../slices/productsApiSlice'
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
import PageTemplate from '../templates/PageTemplate'

const Home = () => {
	const { data: products, isLoading, isError } = useGetProductsQuery()
	const numRows = Math.ceil(products?.length / 5)
	const rowTemplate = `repeat(${numRows}, 1fr)`
	const sortedProducts =
		products
			?.slice()
			.sort((a, b) => (a.countInStock ? -1 : 1) - (b.countInStock ? -1 : 1)) ||
		[]

	return (
		<PageTemplate>
			<Box>
				<Heading as='h2' size='xl' my={3}>
					Latest Products
				</Heading>
				{isLoading ? (
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
				) : isError ? (
					<Alert status='error'>
						<AlertIcon />
						<AlertDescription>
							{isError?.message || isError.error}
						</AlertDescription>
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
						justifyItems='center'
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
