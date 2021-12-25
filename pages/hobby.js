import { Container, Image, Box } from '@chakra-ui/react'

const Hobby = () => {
  return (
    <Container mt={10} maxW="container.md">
      <Box
        align="center"
        mx="auto"
        mt={2}
        fontSize="3xl"
        w="50%"
        fontWeight="700"
      >
        <Image src="/hobby/liverpool.png" alt="scala" maxWidth="250px" mb={5} />
      </Box>
    </Container>
  )
}

export default Hobby
