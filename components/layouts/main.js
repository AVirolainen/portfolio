import Head from "next/head"
import Logo from "../logo"
import NavBar from "../navbar"
import {Box, Container} from "@chakra-ui/react"


const Main = ({children, router}) => {
 return(
 	<Box as="main" pb={8}>
 		<Head>
 			<meta name="viewport" content="width=device-width, initial-scale=1" />
 			<title>Stanislav Rudenko</title>
 		</Head>

 		<NavBar path={router.asPath} />

 		<Container maxV="container.md" pt={14}>
 			{children}
 		</Container>	
 	</Box>
 	)
}

export default Main