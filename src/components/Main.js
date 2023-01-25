import React from "react";
import { Box, VStack, Heading, Text, Image } from "@chakra-ui/react";
import HeroImage from "../assets/img/HeroImg.png";
import CallToAction from "./CallToAction";

export default function Main() {
  return (
    <div>
      <VStack>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          paddingX={150}
          paddingY={50}
          backgroundColor="#495E57"
        >
          <div className="mainContent">
            <Heading
              color="#F4CE14"
              as="h1"
              fontSize={56}
              className="heroTitle"
            >
              Little Lemon <br />
              <Heading color="#EDEFEE" as="h2" marginBottom={10}>
                Chicago
              </Heading>
            </Heading>

            <Text className="mainText" maxWidth="60%">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </Text>
            <CallToAction />
          </div>
          <div className="mainImageContainer">
            <Image width="800px" src={HeroImage} alt="logo" />
          </div>
        </Box>
      </VStack>
    </div>
  );
}
