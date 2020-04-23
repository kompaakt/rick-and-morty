import React from "react";
import { Box, Image, Flex, Text } from "rebass";
import Link from "next/link";

import arrowLeftIcon from "public/icons/arrowLeft.svg";

const Resident = ({
  name,
  image,
  species,
  origin: { name: originName },
  location: { name: locationName, id: locationId },
  status,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Image
        src={image}
        width="100%"
        minHeight="320px"
        sx={{
          objectFit: "contain",
        }}
        alt={name}
      />
      <Link href="/locations/[locationSlug]" as={`/locations/${locationId}`}>
        <Image
          src={arrowLeftIcon}
          width="57.01px"
          height="52.88px"
          sx={{
            position: "absolute",
            top: "9px",
            left: "13px",
            cursor: "pointer",
          }}
        />
      </Link>
      <Box p="13px 9px 29px 9px">
        <Text mb="7px" variant="title" color="white">
          {name}
        </Text>
        <Text mb="7px" variant="subtitle">
          {originName}
        </Text>
        <Text mb="7px" variant="subtitle">
          {species}
        </Text>
        <Text variant="title" color="white">
          Status:
        </Text>
        <Text mb="9px" variant="title" color="DCDCDC">
          >{status}
        </Text>
        <Text variant="title" color="white">
          Home planet:
        </Text>
        <Text variant="title" color="#DCDCDC">
          {locationName}
        </Text>
      </Box>
    </Box>
  );
};

export default Resident;
