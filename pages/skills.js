import {
  Container,
  Box,
  Heading,
  Flex,
  Button,
  Image,
  Link,
  Text,
  Icon,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

//test

const Skills = () => {
  return (
    <Container mt={10} maxW="container.md">
      <Heading as="h1">My Skills</Heading>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Languages
        </Heading>
        <Paragraph>
          <Flex mt={10}>
            <Box align="center" fontSize="3xl" w="33%">
              <Image
                src="/languages/python.png"
                alt="python"
                maxWidth="180px"
                mb={5}
              />
              Python
            </Box>
            <Box align="center" fontSize="3xl" w="33%">
              <Image
                src="/languages/js.png"
                alt="javascript"
                maxWidth="180px"
                mb={5}
              />
              JavaScript
            </Box>
            <Box align="center" fontSize="3xl" w="33%">
              <Image
                src="/languages/scala.png"
                alt="scala"
                maxWidth="180px"
                mb={5}
              />
              Scala
            </Box>
          </Flex>
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Skills
