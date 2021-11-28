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
					Football Fantasy <Badge>2021</Badge>
				</Title>
				<P>
					An app for playing football fantasy. Every user choose their own squad, and according to the
					results in Englsish Premier League and performances of each player, they recieve some rank.
					The squad with the best rank wins. Also there are live table of EPL
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link href="https://github.com/AVirolainen/node-project">
							https://github.com/AVirolainen/node-project <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Browsers</Meta>
						<span>Any Chromium based browsers</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Node.Js, React, Express, MongoDB</span>
					</ListItem>						
				</List>
				<WorkImage src="/works/football-fantasy.jpg"/>
			</Container>
		</Layout>
	)
}

export default Work