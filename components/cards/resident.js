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
      alignItems="center"
    >
      <Image
        src={image}
        minWidth="144px"
        minHeight="144px"
        maxWidth="144px"
        minHeight="144px"
        sx={{
          objectFit: "contain",
        }}
        alt={name}
      />
      <Box p="29px 17px 28px 17px">
        <Text
          mb="7px"
          variant="title"
          sx={{
            whiteSpace: "nowrap",
            overflowY: "auto",
          }}
        >
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
