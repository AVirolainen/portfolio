import {
    Container,
    Heading,
    Image,
    Box,
    Flex,
    useColorModeValue,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from "@chakra-ui/react";
  
  const FilmsPage = () => {
    return (
      <Container mt={10} maxW="container.md">
        <Box
          borderRadius="lg"
          border="1px"
          maxW="container.sm"
          bg={useColorModeValue("whiteAlpha.800", "whiteAlpha.200")}
          p={8}
          fontSize="xl"
          mx="auto"
          mb={6}
          mt={20}
          align="center"
        >
          I am not such a big fan of films but I want to share my top
        </Box>
        <Heading as="h3" variant="section-title" minWidth="100%">
          #1 Silence of the Lambs
        </Heading>
        <Flex align="center" mx="auto" fontSize="3xl" fontWeight="700">
          <Image src="/films/lambs.jpg" alt="lambs" maxWidth="300px" mb={5} />
        </Flex>
      </Container>
    );
  };
  
  export default FilmsPage;
  