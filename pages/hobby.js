import {
  Container,
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
import axios from "axios";
import React, { useEffect, useState } from "react";

const Hobby = () => {
  const [table, setTable] = useState([]);

  useEffect(() => {
    fetch(`https://apl-table.herokuapp.com/table`)
      .then((res) => res.json())
      .then((data) => setTable(Object.values(data)));
  }, []);

  console.log(table);

  if (!table.length) {
    return <Box>....</Box>;
  }
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
        fontSize="xl"
        mx="auto"
        mb={6}
        align="center"
      >
        From 2016 I am a big fan of one of the greatest football teams in the
        world - Liverpool
      </Box>
      <Table variant="simple">
        <TableCaption>Actual table of EPL</TableCaption>
        <Thead>
          <Tr>
            <Th>Pos</Th>
            <Th>Team</Th>
            <Th isNumeric>Points</Th>
          </Tr>
        </Thead>
        <Tbody>
          {table.map((item, index) => {
            let color = item.team == "Ливерпуль" ? "#4f4f4f" : " ";
            return (
              <Tr key={index} backgroundColor={color}>
                <Td>{index + 1}</Td>
                <Td>
                  <Flex>
                    <Image src={item.image} alt="logo" mr={5} /> {item.team}
                  </Flex>
                </Td>
                <Td isNumeric>{item.points}</Td>
              </Tr>
            );
          })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Pos</Th>
            <Th>Team</Th>
            <Th isNumeric>Points</Th>
          </Tr>
        </Tfoot>
      </Table>
    </Container>
  );
};

export default Hobby;
