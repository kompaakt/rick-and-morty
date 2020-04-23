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
        backgroundColor: "#073955",
        boxShadow: "2px 2px 10px rgba(29, 99, 234, 0.48)",
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
        <Text
          mb="7px"
          variant="subtitle"
          sx={{
            whiteSpace: "nowrap",
            overflowY: "auto",
          }}
        >
          {originName}
        </Text>
        <Text variant="subtitle">{species}</Text>
      </Box>
    </Flex>
  );
};

export default ResidentCard;
