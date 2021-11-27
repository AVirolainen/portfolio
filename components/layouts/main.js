import Head from "next/head"
import Logo from "../logo"
import NavBar from "../navbar"
import NoSsr from "../no-ssr"
import {Box, Container} from "@chakra-ui/react"
import Planet from "../planet"


const Main = ({children, router}) => {
 return(
 	<Box as="main" pb={8}>
 		<Head>
 			<meta name="viewport" content="width=device-width, initial-scale=1" />
 			<title>Stanislav Rudenko</title>
 		</Head>

 		<NavBar path={router.asPath} />

 		<Container maxV="container.md">
            <NoSsr>
                <Planet></Planet>
            </NoSsr>
 			{children}
 		</Container>	
 	</Box>
 	)
}

export default Main