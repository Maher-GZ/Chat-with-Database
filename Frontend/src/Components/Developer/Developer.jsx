// ProfileCard.js
import React from "react";
import { HStack, Image, VStack } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";

const Developer = () => {
  return (
    <div
      style={{
        textAlign: "center",
        
        padding: "30px",
        borderRadius: "10px",
        maxWidth: "100%",
        height: "100%",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "15px",
        }}
      >
        <Image
        mt={30}
          src="Mahmoud.jpg"
          style={{
            width: "20%",
            aspectRatio: 1, // keeps the image square
            borderRadius: "50%",
            border: "5px solid #e0e0e0",
            objectFit: "cover",
            objectPosition: "center 15%",
          }}
        />
      </div>
      <h2
        style={{
          fontSize: "35px",
          color: "#00a19a",
          margin: "10px  0",
        }}
      >
        Mahmoud Maher
      </h2>
      <h4
        style={{
          fontSize: "22px",
          color: "#00bbaa",
          margin: "5px 0",
        }}
      >
        ML Engineer
      </h4>
      <VStack mt={7}>
        <p
          style={{
            color: "#a0b0b0",
            fontSize: "15px",
            lineHeight: "1",
          }}
        >
          Machine Learning
        </p>
        <p
          style={{
            color: "#a0b0b0",
            fontSize: "15px",
            lineHeight: "1",
          }}
        >
          Large Language Models
        </p>
        <p
          style={{
            color: "#a0b0b0",
            fontSize: "15px",
            lineHeight: "1",
          }}
        >
          Chatbots
        </p>
      </VStack>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginTop: "15px",
        }}
      >
        <a
          href="https://www.linkedin.com/in/mahmoud-maher-089bb5268/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#00a19a",
            fontSize: "40px",
            textDecoration: "none",
            transition: "color 0.3s",
          }}
        >
          <CiLinkedin />
        </a>
        <a
          href="https://github.com/Maher-GZ"
          target="_blank"
          style={{
            color: "#00a19a",
            fontSize: "35px",
            textDecoration: "none",
            transition: "color 0.3s",
          }}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.upwork.com/freelancers/mahmoud1"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#00a19a",
            fontSize: "40px",
            textDecoration: "none",
            transition: "color 0.3s",
          }}
        >
          <SiUpwork />
        </a>
      </div>
    </div>
  );
};

export default Developer;
