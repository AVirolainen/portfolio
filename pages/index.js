import {
	Container, 
	Box, 
	Heading, 
	Button, 
	Image, 
	Link,
	Icon,
	List,
	ListItem,	 
	SimpleGrid, 
	useColorModeValue} from '@chakra-ui/react'
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import NextLink from "next/link"
import {ChevronRightIcon} from "@chakra-ui/icons"
import {BioSection, BioYear} from "../components/bio"
import Layout from "../components/layouts/article"
import {GridItem} from "../components/grid-item"
import {
	IoLogoTwitter,
	IoLogoInstagram,
	IoLogoGithub,
	IoLogoDiscord
} from "react-icons/io5"

const Page = ()=>{
	return (
		<Layout>
		<Container mt={20}>
			<Box borderRadius="lg" border="1px" bg={useColorModeValue("whiteAlpha.800", "whiteAlpha.200")} p={3} mb={6} align="center">
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
			<Section delay={0.1}>
				<Heading as="h3" variant="section-title">
					Work
				</Heading>
				<Paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
					voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
					officia deserunt mollit anim id est laborum.
				</Paragraph>
				<Box align="center" my={4}>
					<NextLink href="/works">
						<Button rightIcon={<ChevronRightIcon />} colorScheme="teal" fontSize="14">
							My Portfolio
						</Button>
					</NextLink>
				</Box>
			</Section>

			<Section delay={0.2}>
				<Heading as="h3" variant="section-title">
					Bio
				</Heading>
				<BioSection>
					<BioYear>
						2002
					</BioYear>
					Born in Cherkasy
				</BioSection>
				<BioSection>
					<BioYear>
						2019
					</BioYear>
					Finished school and had aplied to KPI on the Faculty of Information and Computer Technologies
				</BioSection>
				<BioSection>
					<BioYear>
						2020
					</BioYear>
					Start being addicted to programming
				</BioSection>
				<BioSection>
					<BioYear>
						2023
					</BioYear>
					Finished Kpi and applied to 5-th grade
				</BioSection>
				<BioSection>
					<BioYear>
						2025
					</BioYear>
					.......
				</BioSection>
			</Section>

			<Section delay={0.3}>
				<Heading as="h3" variant="section-title">
					Hobbies
				</Heading>
				<Paragraph>
					Art, Music, Programming, Video Games, Football, Chess
				</Paragraph>
			</Section>

			<Section delay={0.3}>
				<Heading as="h3" variant="section-title">
					On the Web
				</Heading>
				<List>
					<ListItem>
						<Link href="https://github.com/AVirolainen" target="_blank">
							<Button 
								variant="ghost" 
								colorScheme="teal"
								leftIcon={<Icon as={IoLogoGithub}/>}>AVirolainen</Button>
						</Link>
					</ListItem>
					<ListItem>
						<Link href="https://twitter.com/terpiloid" target="_blank">
							<Button 
								variant="ghost" 
								colorScheme="teal"
								leftIcon={<Icon as={IoLogoTwitter}/>}>@terpiloid</Button>
						</Link>
					</ListItem>
					<ListItem>
						<Link href="https://www.instagram.com/rude_k0/" target="_blank">
							<Button 
								variant="ghost" 
								colorScheme="teal"
								leftIcon={<Icon as={IoLogoInstagram}/>}>@rude_k0</Button>
						</Link>
					</ListItem>
					<ListItem>
						<Link href="https://discord.com/" target="_blank">
							<Button 
								variant="ghost" 
								colorScheme="teal"
								leftIcon={<Icon as={IoLogoDiscord}/>}>RudenkoStanislav#8179</Button>
						</Link>
					</ListItem>
				</List>
			</Section>
		</Container>
		</Layout>
	)
}

export default Page