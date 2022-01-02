import { Container, Image, Box, useColorModeValue } from "@chakra-ui/react";

const Hobby = () => {
  return (
    <Container mt={10} maxW="container.md">
      <Box
        align="center"
        mx="auto"
        mt={20}
        fontSize="3xl"
        w="50%"
        fontWeight="700"
      >
        <Image src="/hobby/liverpool.png" alt="scala" maxWidth="250px" mb={5} />
      </Box>
      <Box
        borderRadius="lg"
        border="1px"
        maxW="container.sm"
        bg={useColorModeValue("whiteAlpha.800", "whiteAlpha.200")}
        p={8}
        fontSize='xl'
        mx="auto"
        mb={6}
        align="center"
      >
        From 2016 I am a big fan of one of the greatest football teams in the
        world - Liverpool
      </Box>
    </Container>
  );
};

export default Hobby;
