import { Container, Box, Heading, Flex, Image } from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";

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
            <Box align="center" fontSize="3xl" w="33%" fontWeight="700">
              <Image
                src="/languages/python.png"
                alt="python"
                maxWidth="180px"
                mb={5}
              />
              Python
            </Box>
            <Box align="center" fontSize="3xl" w="33%" fontWeight="700">
              <Image
                src="/languages/js.png"
                alt="javascript"
                maxWidth="180px"
                mb={5}
              />
              JavaScript
            </Box>
            <Box align="center" fontSize="3xl" w="33%" fontWeight="700">
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
        <Heading as="h3" variant="section-title">
          Databases
        </Heading>
        <Paragraph>
          <Flex mt={10}>
            <Box align="center" fontSize="3xl" w="50%" fontWeight="700">
              <Image
                src="/languages/mdb.png"
                alt="scala"
                maxWidth="180px"
                mb={5}
              />
              MongoDB
            </Box>
            <Box align="center" fontSize="3xl" w="50%" fontWeight="700">
              <Image
                src="/languages/mysql.jpg"
                alt="scala"
                maxWidth="180px"
                mb={5}
              />
              MySQL
            </Box>
          </Flex>
        </Paragraph>
        <Heading as="h3" variant="section-title">
          Frameworks
        </Heading>
        <Paragraph>
          <Flex mt={10}>
            <Box align="center" fontSize="3xl" w="33%" fontWeight="700">
              <Image
                src="/languages/react.svg"
                alt="scala"
                maxWidth="180px"
                mb={5}
              />
              React
            </Box>
            <Box align="center" fontSize="3xl" w="33%" fontWeight="700">
              <Image
                src="/languages/react-native.jpg"
                alt="scala"
                maxWidth="138px"
                mb={5}
              />
              React Native
            </Box>
            <Box align="center" fontSize="3xl" w="33%" fontWeight="700">
              <Image
                src="/languages/kivy.png"
                alt="scala"
                maxWidth="157px"
                mb={5}
              />
              Kivy
            </Box>
          </Flex>
        </Paragraph>
        <Heading as="h3" variant="section-title">
          Instruments
        </Heading>
        <Paragraph>
          <Flex mt={10}>
            <Box align="center" fontSize="3xl" w="33%" fontWeight="700">
              <Image
                src="/languages/redux.png"
                alt="scala"
                maxWidth="180px"
                mb={5}
              />
              Redux
            </Box>
            <Box align="center" fontSize="3xl" w="33%" fontWeight="700">
              <Image
                src="/languages/github.png"
                alt="scala"
                maxWidth="180px"
                mb={5}
              />
              Github
            </Box>
            <Box align="center" fontSize="3xl" w="33%" fontWeight="700">
              <Image
                src="/languages/nodejs.png"
                alt="scala"
                maxWidth="180px"
                mb={5}
              />
              Node.js
            </Box>
          </Flex>
          <Flex mt={10}>
            <Box align="center" fontSize="3xl" w="50%" fontWeight="700">
              <Image
                src="/languages/sass.png"
                alt="scala"
                maxWidth="180px"
                mb={5}
              />
              Sass
            </Box>
            <Box align="center" fontSize="3xl" w="50%" fontWeight="700">
              <Image
                src="/languages/bootstrap.png"
                alt="scala"
                maxWidth="180px"
                mb={5}
              />
              Bootstrap
            </Box>
          </Flex>
        </Paragraph>
      </Section>
    </Container>
  );
};

export default Skills;
