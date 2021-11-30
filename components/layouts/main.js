import Head from "next/head"
import NavBar from "../navbar"
import NoSsr from "../no-ssr"
import {Box, Container} from "@chakra-ui/react"
import Planet from "../planet"


const Main = ({children, router}) => {
 return(
 	<Box as="main">
 		<Head>
 			<meta name="viewport" content="width=device-width, initial-scale=1" />
 			<title>Stanislav Rudenko - Portfolio</title>
 		</Head>

 		<NavBar path={router.asPath} />

 		<Container maxW="container.xl">
            <NoSsr>
                <Planet></Planet>
            </NoSsr>
 			{children}
 		</Container>	
 	</Box>
 	)
}

export default Main