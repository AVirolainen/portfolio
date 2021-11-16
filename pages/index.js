import {Container, Box, Heading} from '@chakra-ui/react'

const Page = ()=>{
	return (
		<Container>
			<Box borderRadius="lg" border="1px" borderColor="grey" p={3} mb={6} align="center">
				Hello, my name is Stanislav, and i am front-end developer
			</Box>
			<Box display={{md: 'flex'}}>
				<Box flexGrow={1}>
					<Heading as="h2" variant="page-title" align="center">
						Rudenko Stanislav
					</Heading>
				</Box>
			</Box>
		</Container>
	)
}

export default Page