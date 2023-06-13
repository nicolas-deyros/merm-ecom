import PropTypes from 'prop-types'
import Wrapper from './Wrapper'
import { Link as RouteLink } from 'react-router-dom'
import {
	Box,
	Flex,
	Spacer,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Icon,
	IconButton,
	useMediaQuery,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import menuItems from '../data/menuItems.js'

const Header = () => {
	const [isMobile] = useMediaQuery('(max-width: 768px)')

	const NavLink = ({ children }) => (
		<Box
			_hover={{ textDecoration: 'none' }}
			display='flex'
			alignItems='center'
			justifyContent='center'
			mr={{ base: 0, md: 4 }}
			color='gray.600'
			fontWeight='medium'>
			{children}
		</Box>
	)

	return (
		<Box bg='gray.50' boxShadow='sm' px={3}>
			<Wrapper>
				<Flex
					width='full'
					mx='auto'
					py={4}
					align='center'
					justify='space-between'
					wrap='wrap'>
					<Flex align='center'>
						<RouteLink to='/'>
							<NavLink>
								<Box fontSize='2xl' fontWeight='bold'>
									My Website
								</Box>
							</NavLink>
						</RouteLink>
					</Flex>
					<Spacer />
					{isMobile ? (
						<Menu>
							<MenuButton
								as={IconButton}
								aria-label='Options'
								icon={<HamburgerIcon />}
								variant='outline'
							/>
							<MenuList>
								{menuItems.map(item => (
									<MenuItem key={item.id}>
										<RouteLink to={item.path}>
											<NavLink>
												<Icon as={item.icon} />
												{item.label}
											</NavLink>
										</RouteLink>
									</MenuItem>
								))}
							</MenuList>
						</Menu>
					) : (
						<>
							{menuItems.map(item => (
								<div key={item.id}>
									<RouteLink key={item.id} to={item.path}>
										<NavLink
											color='gray.600'
											fontWeight='medium'
											textDecoration='none'
											display='flex'
											alignItems='center'
											justifyContent='center'
											gap={3}>
											<Icon mr={1} boxSize={5} as={item.icon} />
											{item.label}
										</NavLink>
									</RouteLink>
								</div>
							))}
						</>
					)}
				</Flex>
			</Wrapper>
		</Box>
	)
}

Header.propTypes = {
	children: PropTypes.node,
}

export default Header
