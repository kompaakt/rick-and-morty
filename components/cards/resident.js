import React from "react";
import { Flex, Box, Image, Text } from "rebass";

const ResidentCard = ({
  name,
  species,
  origin: { name: originName },
  image,
}) => {
  return (
    <Flex
      sx={{
        backgroundColor: "#312A2A",
        color: "white",
      }}
    >
      <Image
        src={image}
        width="144px"
        height="144px"
        sx={{
          objectFit: "contain",
        }}
        alt={name}
      />
      <Box p="29px 17px 28px 17px">
        <Text mb="7px" variant="title">
          {name}
        </Text>
        <Text mb="7px" variant="subtitle">
          {originName}
        </Text>
        <Text variant="subtitle">{species}</Text>
      </Box>
    </Flex>
  );
};

export default ResidentCard;
