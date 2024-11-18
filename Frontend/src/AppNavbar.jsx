import { Button, Container, Box, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Description from "./Components/Description/Description";
import Developer from "./Components/Developer/Developer";
import Home from "./Components/Home/Home";
import React, { useState } from "react";

const AppNavbar = () => {
  const [selectedPage, setSelectedPage] = useState("Home");
  const handleNavigation = (event) => {
    const target = event.target.id;
    setSelectedPage(target);
  };
  const randerSelectedPage = () => {
    switch (selectedPage) {
      case "Home":
        return <Home />;
      case "Developer":
        return <Developer />;
      case "Description":
        return <Description />;
    }
  };

  return (
    <Box>
      {/* Content here */}

      <Flex
        paddingRight={5}
        display="flex" // Ensures flex properties work
        position="fixed"
        h="12"
        alignItems="center"
        justifyContent="space-between"
        top="7"
        right="0"
      >
        <Button id="Home" borderRadius="10px" px={5} onClick={handleNavigation}>
          💬
        </Button>
        <Button
          id="Description"
          borderRadius="10px"
          px={5}
          onClick={handleNavigation}
        >
          🗒️
        </Button>
        <Button
          id="Developer"
          borderRadius="10px"
          px={5}
          onClick={handleNavigation}
        >
          🧑‍💻
        </Button>
      </Flex>
      {randerSelectedPage()}
    </Box>
  );
};

export default AppNavbar;
