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
  useColorModeValue
} from '@chakra-ui/react'

const Skills = () => {
  return (
    <Container mt={10}>
      <Heading as="h1">My Skills</Heading>
      <Box flexGrow={1} align="center" fontWeight="700" mt={10}>
        Languages
      </Box>
    </Container>
  )
}

export default Skills
