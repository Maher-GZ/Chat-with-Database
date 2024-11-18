import React, { useState } from "react";
import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  useColorModeValue,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

const InputForm = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [formData, setFormData] = useState({
    apiKey: "",
    host: "",
    port: "",
    username: "",
    password: "",
    database: "",
  });

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/api/user", {
        ...formData,
        port: parseInt(formData.port, 10),
      });

      toast({
        title: "Connection Successful",
        description: "The connection was established successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      toast({
        title: "Connection Failed",
        description: "unconnected: Please recheck your data",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack
        width="300px"
        p={3}
        mt={3}
        borderRadius={5}
        bg={useColorModeValue("gray.100", "gray.700")}
      >
        <FormControl pt={3}>
          <FormLabel pl={3}>OpenAI API Key</FormLabel>
          <Input
            name="apiKey"
            type="text"
            placeholder="Enter your API key"
            value={formData.apiKey}
            onChange={handleChange}
            border="1px double"
            borderColor="gray.300"
          />
        </FormControl>

        <FormControl pt={3}>
          <FormLabel pl={3}>Host</FormLabel>
          <Input
            name="host"
            type="text"
            placeholder="e.g., localhost"
            value={formData.host}
            onChange={handleChange}
            border="1px double"
            borderColor="gray.300"
          />
        </FormControl>

        <FormControl pt={3}>
          <FormLabel pl={3}>Port</FormLabel>
          <Input
            name="port"
            type="number"
            placeholder="e.g., 5432"
            value={formData.port}
            onChange={handleChange}
            border="1px double"
            borderColor="gray.300"
          />
        </FormControl>

        <FormControl pt={3}>
          <FormLabel pl={3}>Username</FormLabel>
          <Input
            name="username"
            type="text"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleChange}
            border="1px double"
            borderColor="gray.300"
          />
        </FormControl>

        <FormControl pt={3}>
          <FormLabel pl={3}>Password</FormLabel>
          <Input
            name="password"
            type="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            border="1px double"
            borderColor="gray.300"
          />
        </FormControl>

        <FormControl pt={3} pb={3}>
          <FormLabel pl={3}>Database</FormLabel>
          <Input
            name="database"
            type="text"
            placeholder="Enter database name"
            value={formData.database}
            onChange={handleChange}
            border="1px double"
            borderColor="gray.300"
          />
        </FormControl>

        <Button type="submit" mt={5} w="100px" h="40px" mx="auto">
          Connect
        </Button>
      </Stack>
    </form>
  );
};

export default InputForm;
