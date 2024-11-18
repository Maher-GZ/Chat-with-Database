import React from "react";
import PropTypes from "prop-types";
import {
  VStack,
  HStack,
  Box,
  Text,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

const ChatBubble = ({ message, dateSent, from }) => {
  const isMe = from === "me";
  const bottomRightRadius = isMe ? 0 : 32;
  const bottomLeftRadius = isMe ? 32 : 0;
  const alignment = isMe ? "flex-end" : "flex-start";
  const avatarSrc = isMe
    ? "/path-to-my-avatar.png"
    : "/path-to-others-avatar.png"; // Replace with actual image paths

  return (
    <VStack
      mt={6}
      alignItems={alignment}
      alignSelf={alignment}
      width={"100%"}
      maxW={"70%"}
      height={"80%"}
    >
      <HStack spacing={4} alignItems="flex-end" alignSelf={alignment} ml={2} maxW={"70%"}>
        {!isMe && <Avatar src={"download.png"} size="sm" />}{" "}
        {/* Avatar for others */}
        <Box
          bg={
            isMe
              ? useColorModeValue("blue.100", "blue.900")
              : useColorModeValue("green.100", "green.900")
          }
          px={6}
          mr={2}
          py={4}
          maxW={80}
          borderTopLeftRadius={32}
          borderTopRightRadius={32}
          borderBottomLeftRadius={bottomLeftRadius}
          borderBottomRightRadius={bottomRightRadius}
          wordBreak="break-word"
        >
          {message}
        </Box>
      </HStack>
      <Text fontSize="xs" color="gray" paddingInline={isMe ? 4 : 14}>
        {dateSent}
      </Text>
    </VStack>
  );
};

// PropTypes should be defined after the component definition
ChatBubble.propTypes = {
  message: PropTypes.string.isRequired,
  dateSent: PropTypes.string.isRequired,
  from: PropTypes.oneOf(["me", "others"]).isRequired,
};

export default ChatBubble;
