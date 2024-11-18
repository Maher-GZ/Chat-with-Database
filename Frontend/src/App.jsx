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
import AppNavbar from "./AppNavbar";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return <AppNavbar />;
}

export default App;
