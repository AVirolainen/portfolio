import {
  Container,
  Heading,
  Image,
  Box,
  useColorModeValue,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { Chessboard } from 'react-chessboard';

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
      <Heading as="h5" fontSize="3xl" align="center" mt={10}>
        Interesting position from my last rapid game(you can also move pieces on the board)
      </Heading>
      <Box
        align="center"
        mx="auto"
        mt={10}
        fontSize="3xl"
        w="80%"
        fontWeight="700"
      >
        <Chessboard position={"r4rk1/2pq2pp/pp3p2/1nb5/R3R3/2P3P1/1P2QP1P/1NB3K1 b - - 1 21"} id="BasicBoard" />
      </Box>
    </Container>
  );
};

export default ChessPage;
