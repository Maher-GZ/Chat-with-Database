import React from "react";
import { Box, Text, Link, Image } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

function ContainerBox() {
  return (
    <Box
      padding="4"
      maxW="70%"
      mx="auto"
      bgGradient={useColorModeValue(
        "linear(to-t, white, gray.200, white)",
        "linear(to-t, gray.800, blue.800, gray.800)"
      )}
    >
      {/* System Title */}
      <Text fontSize="3xl" fontWeight="bold" mb="4">
        The System
      </Text>

      {/* Advantage Description */}
      <Text fontSize="lg" mb="8">
        This system enables users to ask SQL Database using natural language
        questions and translates The main advantage of this approach is its
        accessibility. It allows users to interact with databases using everyday
        language, simplifying data retrieval for non-technical staff.
      </Text>

      {/* Example Section Title */}
      <Text fontSize="3xl" fontWeight="bold" mb="4">
        Example
      </Text>

      {/* Example with AI */}
      <Text fontSize="xl" fontWeight="semibold" mb="2">
        With AI
      </Text>
      <Text fontSize="lg" mb="6">
        Tell me which artist has the most tracks and how many tracks they have.
      </Text>

      {/* Example without AI */}
      <Text fontSize="xl" fontWeight="semibold" mb="2">
        Without AI
      </Text>
      <Text fontSize="lg" mb="8" as="pre" whiteSpace="pre-wrap">
        {`SELECT a.name, COUNT(t.track_id) AS track_count
FROM artists a
JOIN tracks t ON a.artist_id = t.artist_id
GROUP BY a.artist_id, a.name
ORDER BY track_count DESC
LIMIT 1;`}
      </Text>

      {/* How it Works Section */}
      <Text fontSize="3xl" fontWeight="bold" mb="4">
        How It Works
      </Text>
      <Text fontSize="lg" mb="6">
        The system translates user questions into SQL queries. These queries are
        then executed in a database, with the results formatted into clear,
        user-friendly responses.
      </Text>
      <Image
        src="Description1.png"
        alt="Description 1"
        boxSize="100%"
        objectFit="cover"
        borderRadius={15}
      />
      <Text fontSize="3xl" fontWeight="bold" mb="4" mt={7}>
        References
      </Text>
      <Text fontSize="lg" mb="6" color={"blue"}>
        <Link
          href="https://codoid.com/ai-testing/mastering-llm-and-sql-expert-tips-for-database-chat/"
          isExternal
        >
          How to Chat with an SQL Database Using LLM{" "}
        </Link>
        <p></p>
        <Link
          href="https://alejandro-ao.com/chat-with-mysql-using-python-and-langchain/"
          isExternal
        >
          Chat With a MySQL Database Using Python and LangChain{" "}
        </Link>
      </Text>
    </Box>
  );
}

export default ContainerBox;
