import {Container, Box, Heading, Image} from '@chakra-ui/react'

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
				<Box 
					flexShrink={0} 
					mt={{base: 4, md: 0}} 
					ml={{md: 6}} 
					align="center">
					<Image 
						borderColor="whiteAlpha.800"
						borderWidth={2}
						borderStyle="solid"
						maxWidth="100px"
						display="inline-block"
						borderRadius="full"
						src="/logo.jpg"
						alt="profile image" />
				</Box>
			</Box>
		</Container>
	)
}

export default Page