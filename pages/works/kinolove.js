import {Container, Badge, Link, List, ListItem} from "@chakra-ui/react"
import {ExternalLinkIcon} from "@chakra-ui/icons"
import {Title, WorkImage, Meta} from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = ()=>{
	return(
		<Layout title="Kinolove">
			<Container>
				<Title>
					Kinolove <Badge>2021</Badge>
				</Title>
				<P>
					An app for booking tickets for the films. Integrated with Django server and own API
					Interesting design decisions, very pleased of this project
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link href="https://github.com/AVirolainen/cinema-app">
							https://github.com/AVirolainen/cinema-app <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Browsers</Meta>
						<span>Any Chromium based browsers</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Node.Js, React, Django, Python</span>
					</ListItem>						
				</List>
				<WorkImage src="/works/kinolove.jpg"/>
			</Container>
		</Layout>
	)
}

export default Work