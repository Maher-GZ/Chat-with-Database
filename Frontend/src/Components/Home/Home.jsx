import React from "react";
import Navbar from "./Navbar";
import InputForm from "./InputForm.jsx";
import { Flex, VStack, Container } from "@chakra-ui/react";
import Chat from "./Chat.jsx";
const Home = () => {
  return (
    <Flex
      h="100vh"
      alignItems={"flex-start"}
      display={"flex"}
      justifyContent={"center"}
    >
      <InputForm />
      <Container ml={100} maxW="2xl">
        <Navbar />
        <Chat />
      </Container>
      
    </Flex>
  );
};

export default Home;
