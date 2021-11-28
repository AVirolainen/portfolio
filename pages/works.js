import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react"
import Section from "../components/section"
import { WorkGridItem } from "../components/grid-item"
import Layout from "../components/layouts/article"

import kinolove from "../public/works/kinolove.jpg"
import footballFantasy from "../public/works/football-fantasy.jpg"
import pokedex from "../public/works/pokedex.jpg"

const Works = () => {
    return (
        <Layout>
		<Container mt={10}>
			<Heading as="h3" fontSize={20} mb={4}>
				Works
			</Heading>

			<SimpleGrid columns={[1, 1, 2]} gap={6}>
				<Section>
					<WorkGridItem id="kinolove" title="Kinolove" thumbnail={kinolove}>
						System for booking tickets to the cinema
					</WorkGridItem>
				</Section>
				<Section>
					<WorkGridItem id="football-fantasy" title="Football Fantasy" thumbnail={footballFantasy}>
						System for playing football fantasy (English Premier League only)
					</WorkGridItem>
				</Section>
				<Section>
					<WorkGridItem id="pokedex" title="Pokedex" thumbnail={pokedex}>
						Pokedex - system for searching info about Pokemons
					</WorkGridItem>
				</Section>
			</SimpleGrid>
		</Container>
		</Layout>
    )
}

export default Works