import {
  Container,
  Heading,
  Image,
  Box,
  Flex,
  useColorModeValue,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";

let idFilms = [
  "tt3525168",
  "tt0081505",
  "tt0050825",
  "tt0057012",
  "tt0241527",
  "tt5013056",
  "tt0361748",
  "tt0110912",
];

const FilmsPage = () => {
  const [filmsInfo, setFilmsInfo] = useState();

  useEffect(() => {
    let test = idFilms.map((item) => {
      return fetch(`http://www.omdbapi.com/?i=${item}&apikey=c38fb01d`)
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          return res;
        });
    });

    Promise.all(test).then((values) => {
      setFilmsInfo(values);
    });
  }, []);

  console.log(filmsInfo);
  if (!filmsInfo) {
    return <Box>...</Box>;
  }
  return (
    <Container mt={10} maxW="container.lg">
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
      {filmsInfo.map((item, index) => {
        return (
          <Box key={index} maxW="container.md" mb={45}>
            <Heading as="h3" variant="section-title" minWidth="100%">
              #{index + 1} {item.Title}
            </Heading>
            <Flex align="center" mx="auto" fontSize="3xl" fontWeight="700">
              <Image src={item.Poster} alt="lambs" maxWidth="300px" mb={5} />
              <Box minWidth="80%" ml={15} minHeight="430px" fontSize="18px">
                <Flex>
                  <Text width="100px" color="#adacac" mb={3}>
                    Year:
                  </Text>
                  {item.Year}
                </Flex>
                <Flex>
                  <Text width="100px" color="#adacac" mb={3}>
                    Runtime:
                  </Text>
                  {item.Runtime}
                </Flex>
                <Flex>
                  <Text width="100px" color="#adacac" mb={3}>
                    Genre:
                  </Text>
                  {item.Genre}
                </Flex>
                <Flex>
                  <Text width="100px" color="#adacac" mb={3}>
                    Director:
                  </Text>
                  {item.Director}
                </Flex>
                <Flex>
                  <Text width="100px" color="#adacac" mb={3}>
                    Actors:
                  </Text>
                  {item.Actors}
                </Flex>
                <Flex>
                  <Text width="100px" color="#adacac" mb={3}>
                    Plot:
                  </Text>
                  <Text ml={55}>{item.Plot}</Text>
                </Flex>
                <Flex mt={20} alignItems="center">
                  <Text mr={5}>Your rating: </Text>
                  <ReactStars
                    count={5}
                    onChange={() => {
                      return 1;
                    }}
                    size={35}
                    activeColor="#ffd700"
                  />
                </Flex>
              </Box>
            </Flex>
          </Box>
        );
      })}
    </Container>
  );
};

export default FilmsPage;
