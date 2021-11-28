import {Container, Badge, Link, List, ListItem} from "@chakra-ui/react"
import {ExternalLinkIcon} from "@chakra-ui/icons"
import {Title, WorkImage, Meta} from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = ()=>{
	return(
		<Layout title="Pokedex">
			<Container>
				<Title>
					Pokedex <Badge>2021</Badge>
				</Title>
				<P>
					An app for looking information about Pokemons, their types, picture and bio. 
					There are ability to look after random Pokemon, or to find by the name or id
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link href="https://github.com/AVirolainen/PokeDex">
							https://github.com/AVirolainen/PokeDex <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Browsers</Meta>
						<span>Any Chromium based browsers</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Node.Js, React</span>
					</ListItem>						
				</List>
				<WorkImage src="/works/pokedex.jpg"/>
			</Container>
		</Layout>
	)
}

export default Work