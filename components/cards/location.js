import React from "react";
import { Flex, Box, Image, Text } from "rebass";
import Link from "next/link";

import chooseImage from "utils/chooseImage";

const LocationCard = ({ name, type, residents }) => {
  return (
    <Flex
      sx={{
        backgroundColor: "#312A2A",
        color: "white",
      }}
      maxHeight="145px"
      alignItems="center"
    >
      <Image
        src={chooseImage(type?.toLowerCase(), "small")}
        width="145px"
        height="145px"
        minWidth="145px"
        alt={type}
      />
      <Box p="16px 16px 11px 16px" width="100%" height="100%">
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
        <Text mb="12px" variant="subtitle">
          {type}
        </Text>

        <Flex
          sx={{
            overflowX: "auto",
          }}
          minHeight="50px"
        >
          {residents.length > 0 &&
            residents[0].id !== null &&
            residents.slice(0, 20).map(({ image, id, name: residentName }) => (
              <Link
                href={`/residents/[residentSlug]`}
                as={`/residents/${id}`}
                key={id}
              >
                <Image
                  src={image}
                  mr="20px"
                  width="50px"
                  minWidth="50px"
                  height="50px"
                  alt={residentName}
                />
              </Link>
            ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default LocationCard;
