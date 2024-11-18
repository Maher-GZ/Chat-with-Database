import {
  Container,
  Box,
  Flex,
  Center,
  Text,
  useColorMode,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { LuSun } from "react-icons/lu";
import { IoMoon } from "react-icons/io5";

const Navbar = ({ setUsers }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"800px"} ml="125">
      <Box
        py={3}
        my={3}
        borderRadius={5}
        bg={useColorModeValue("gray.200", "gray.700")}
      >
        <Flex h="12" alignItems={"center"} justifyContent={"space-between"}>
          {/* left side */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            gap={3}
            display={{ base: "none", sm: "flex" }}
            px={3}
          >
            <img src="/SQL.png" alt="python" width={45} height={45} />
            <Text fontSize="34px">+</Text>
            <img src="/AI.png" alt="react" width={45} height={45} />
            <Text fontSize="34px">=</Text>
            <img src="/explode.png" alt="explode" width={36} height={36} />
          </Flex>
          {/* right side */}
          <Flex gap={3} alignItems={"center"} px={3}>
            <Text
              display={{ base: "none", md: "flex" }}
              color={useColorModeValue("blue.900", "blue.100")}
              fontSize={{ base: "xl", md: "25" }}
              fontWeight={"bold"}
              letterSpacing={"1px"}
              textTransform={"uppercase"}
              textAlign={"center"}
              bgGradient="linear(to-r, cyan.400, blue.500)"
              bgClip="text"
            >
              Chat With SQLDB
            </Text>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Navbar;