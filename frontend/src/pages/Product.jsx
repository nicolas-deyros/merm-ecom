import PageTemplate from '../templates/PageTemplate'
import { useParams, Link as RouteLink, useNavigate } from 'react-router-dom'
import { useGetProductDetailsQuery } from '../slices/productsApiSlice'
import {
	Box,
	Spinner,
	Alert,
	AlertIcon,
	AlertDescription,
	Container,
	Stack,
	Text,
	Image,
	Flex,
	VStack,
	Button,
	Heading,
	SimpleGrid,
	StackDivider,
	List,
	ListItem,
	Badge,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
} from '@chakra-ui/react'
import { MdLocalShipping } from 'react-icons/md'
import Rating from '../components/Rating'

export const Product = () => {
	const { id: productid } = useParams()
	const {
		data: product,
		isLoading,
		isError,
	} = useGetProductDetailsQuery(productid)

	const {
		name,
		rating,
		description,
		numReviews,
		countInStock,
		price,
		image,
		features,
	} = product || {}

	const { src, alt } = image || {}

	const history = useNavigate()

	const addToCartHandler = () => {
		history(`/cart/${productid}?qty=${qty}`)
	}

	return (
		<PageTemplate>
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
					<AlertDescription>{isError}</AlertDescription>
				</Alert>
			) : (
				<Container maxW={'7xl'}>
					<RouteLink to={`/`}>
						<Button
							rounded={'none'}
							size={'sm'}
							bg={('gray.900', 'gray.50')}
							color={('white', 'gray.900')}
							textTransform={'uppercase'}
							_hover={{
								transform: 'translateY(2px)',
								boxShadow: 'lg',
							}}>
							Go Back
						</Button>
					</RouteLink>
					<SimpleGrid
						columns={{ base: 1, lg: 2 }}
						spacing={{ base: 8, md: 10 }}
						py={{ base: 3, md: 5 }}>
						<Flex>
							<Image
								rounded={'md'}
								src={src}
								alt={alt}
								fit={'cover'}
								align={'center'}
								w={'100%'}
								h={{ base: '100%', sm: '400px', lg: '500px' }}
							/>
						</Flex>
						<Stack spacing={{ base: 6, md: 10 }}>
							<Box as={'header'}>
								<Heading
									lineHeight={1.1}
									fontWeight={600}
									fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
									{name}
								</Heading>
								<Box
									display='flex'
									alignItems='center'
									justifyContent='space-between'>
									<Text
										color={('gray.900', 'gray.400')}
										fontWeight={300}
										fontSize={'2xl'}>
										${price} USD
									</Text>
									<Badge
										borderRadius='full'
										px='2'
										my={3}
										colorScheme={countInStock > 0 ? 'teal' : 'red'}>
										{countInStock > 0 ? 'In Stock' : 'Out of Stock'}
									</Badge>
									{numReviews > 0 ? (
										<Rating rating={rating} text={`${numReviews} reviews`} />
									) : (
										<Rating rating={rating} />
									)}
								</Box>
							</Box>

							<Stack
								spacing={{ base: 4, sm: 6 }}
								direction={'column'}
								divider={
									<StackDivider borderColor={('gray.200', 'gray.600')} />
								}>
								<VStack spacing={{ base: 4, sm: 6 }}>
									<Text fontSize={'lg'}>{description}</Text>
								</VStack>
								{features && features.length > 0 && (
									<Box>
										<Text
											fontSize={{ base: '16px', lg: '18px' }}
											color={('yellow.500', 'yellow.300')}
											fontWeight={'500'}
											textTransform={'uppercase'}
											mb={'4'}>
											Features
										</Text>

										<SimpleGrid columns={1} spacing={10}>
											<List spacing={3}>
												{features.map(feature => (
													<ListItem
														key={feature.name}
														display='flex'
														alignItems='center'
														gap={3}>
														<Text as='span' fontWeight='semibold'>
															{feature.name}:
														</Text>
														<Text as='span'>{feature.value}</Text>
													</ListItem>
												))}
											</List>
										</SimpleGrid>
									</Box>
								)}
							</Stack>

							{countInStock > 0 && (
								<NumberInput
									defaultValue={1}
									min={1}
									max={countInStock}
									clampValueOnBlur={false}
									rounded={'lg'}
									onChange={value => setQty(value)}>
									<NumberInputField
										bg={('gray.900', 'gray.50')}
										color={('white', 'gray.900')}
										textTransform={'uppercase'}
										_hover={{
											transform: 'translateY(1px)',
											boxShadow: 'lg',
										}}
									/>
									<NumberInputStepper>
										<NumberIncrementStepper
											rounded={'none'}
											color={('white', 'gray.900')}
											textTransform={'uppercase'}
											_hover={{
												transform: 'translateY(2px)',
											}}
											bg='green.200'
											_active={{ bg: 'green.300' }}>
											+
										</NumberIncrementStepper>
										<NumberDecrementStepper
											rounded={'none'}
											color={('white', 'gray.900')}
											textTransform={'uppercase'}
											_hover={{
												transform: 'translateY(2px)',
											}}
											bg='pink.200'
											_active={{ bg: 'pink.300' }}>
											-
										</NumberDecrementStepper>
									</NumberInputStepper>
								</NumberInput>
							)}
							<Button
								onClick={addToCartHandler}
								rounded={'none'}
								w={'full'}
								mt={3}
								size={'lg'}
								py={'3'}
								bg={('gray.900', 'gray.50')}
								color={('white', 'gray.900')}
								textTransform={'uppercase'}
								_hover={{
									transform: 'translateY(2px)',
									boxShadow: 'lg',
								}}
								isDisabled={countInStock === 0}>
								{countInStock === 0 ? 'Out of stock' : 'Add to cart'}
							</Button>

							<Stack
								direction='row'
								alignItems='center'
								justifyContent={'center'}>
								<MdLocalShipping />
								<Text>2-3 business days delivery</Text>
							</Stack>
						</Stack>
					</SimpleGrid>
				</Container>
			)}
		</PageTemplate>
	)
}
