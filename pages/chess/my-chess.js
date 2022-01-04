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

const ChessPage = () => {
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
        <Image src="/chess/chesscom.png" alt="scala" maxWidth="250px" mb={5} />
      </Box>
      <Box
        borderRadius="lg"
        border="1px"
        maxW="container.sm"
        bg={useColorModeValue("whiteAlpha.800", "whiteAlpha.200")}
        p={8}
        fontSize="xl"
        mx="auto"
        mb={6}
        align="center"
      >
        For a year I have been playing at Chess.com and was looking after
        competitions (watched every game of World match Carlsen -
        Nepomnyachtchi)
      </Box>
      <Heading as="h2" variant="page-title" align="center">
        My Ratings
      </Heading>
      <Table variant="simple" maxWidth="300px" align="center" mt={10}>
        <Thead>
          <Tr>
            <Th>Type</Th>
            <Th isNumeric>Rating</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Puzzles</Td>
            <Td isNumeric>1277</Td>
          </Tr>
          <Tr>
            <Td>Bullet</Td>
            <Td isNumeric>733</Td>
          </Tr>
          <Tr>
            <Td>Rapid</Td>
            <Td isNumeric>1001</Td>
          </Tr>
          <Tr>
            <Td>Blitz</Td>
            <Td isNumeric>743</Td>
          </Tr>
        </Tbody>
      </Table>
    </Container>
  );
};

export default ChessPage;
