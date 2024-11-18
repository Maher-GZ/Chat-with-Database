import React from "react";
import Navbar from "./Navbar";
import { Container } from "@chakra-ui/react";
import ContainerBox from "./ContainerBox";
import { useColorModeValue } from "@chakra-ui/react";
const Description = () => {
  return (
    <div >
      <Navbar />
      <ContainerBox/>
    </div>
  );
};

export default Description;
