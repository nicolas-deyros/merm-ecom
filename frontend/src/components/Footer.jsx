import { Box, Flex, Link, Text } from '@chakra-ui/react'
import Wrapper from './Wrapper'

function Footer() {
	return (
		<footer>
			<Wrapper>
				<Box as='footer' py='4'>
					<Flex
						justify='center'
						align='center'
						direction={{ base: 'column', md: 'row' }}>
						<Text fontSize='sm'>
							© {new Date().getFullYear()} My Website. All rights reserved.
						</Text>
						<Box mx='2' />
						<Link href='/privacy' fontSize='sm'>
							Privacy Policy
						</Link>
						<Box mx='2' />
						<Link href='/terms' fontSize='sm'>
							Terms of Use
						</Link>
					</Flex>
				</Box>
			</Wrapper>
		</footer>
	)
}

export default Footer
