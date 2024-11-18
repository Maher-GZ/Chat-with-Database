import React, { useState, useRef, useEffect } from "react";
import ChatBooble from "./ChatBooble";
import { Flex, Stack, IconButton, Input, VStack } from "@chakra-ui/react";
import { IoSend } from "react-icons/io5";

const Chat = () => {
  const myDate = () =>
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  const [inputMessage, setInputMessage] = useState("");
  const [combinedMessage, setCombinedMessage] = useState([
    {
      message: "Hello, How can I assist you today?",
      from: "Chatbot",
      dateSent: myDate(),
    },
  ]);

  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom when combinedMessage updates
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [combinedMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure message isn't empty before proceeding
    if (inputMessage.trim() === "") return;

    // Add the message from the user to the conversation
    setCombinedMessage((prevMessage) => [
      ...prevMessage,
      {
        message: inputMessage,
        from: "me",
        dateSent: myDate(),
      },
    ]);

    setInputMessage(""); // Clear the input field after sending

    try {
      const res = await fetch("http://127.0.0.1:5000/api/process-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputMessage }),
      });
      const data = await res.json();

      // Add the response from the chatbot
      setCombinedMessage((prevMessage) => [
        ...prevMessage,
        {
          message: data.result || "Sorry, I didn't get that.",
          from: "Chatbot",
          dateSent: myDate(),
        },
      ]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Flex
      border={"gray 2px double"}
      borderRadius={8}
      width="66vw"
      height="80vh"
      align="top"
      justify="left"
      mt={5}
      direction="column"
    >
      <VStack width={"100%"} height="100%">
        <Stack
          width={"100%"}
          height={"90%"}
          overflowY={"auto"}
          sx={{
            scrollbarWidth: "none", // Firefox
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
          p={4}
          ref={chatContainerRef}
        >
          <Flex flexDirection={"column"} mt={4}>
            {combinedMessage.map(({ message, from, dateSent }, index) => (
              <ChatBooble
                key={index}
                message={message}
                from={from}
                dateSent={dateSent}
              />
            ))}
          </Flex>
        </Stack>
        <Flex
          pl={3}
          pr={3}
          py={2}
          borderTopColor={"gray.100"}
          borderTopWidth={1}
          width={"100%"}
          align="center"
        >
          <Input
            variant="unstyled"
            placeholder="Type your message"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)} // Call handleSubmit on Enter key press
          />
          <IconButton
            colorScheme="blue"
            aria-label="Send message"
            icon={<IoSend />}
            onClick={handleSubmit} // Ensure handleSubmit is used on button click
          />
        </Flex>
      </VStack>
    </Flex>
  );
};

export default Chat;
