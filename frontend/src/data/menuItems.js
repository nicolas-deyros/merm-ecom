import { MdHome, MdShoppingCart, MdAccountCircle } from 'react-icons/md'

const menuItems = [
	{
		id: 1,
		label: 'Home',
		path: '/',
		icon: MdHome,
	},
	{
		id: 2,
		label: 'Cart',
		path: '/cart',
		icon: MdShoppingCart,
	},
	{
		id: 3,
		label: 'Sign In',
		path: '/login',
		icon: MdAccountCircle,
	},
]

export default menuItems
