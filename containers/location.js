import React from "react";
import { Box, Image, Flex, Text } from "rebass";
import Link from "next/link";

import ResidentCard from "components/cards/resident";

import chooseImage from "utils/chooseImage";

import arrowLeftIcon from "public/icons/arrowLeft.svg";

const Location = ({ name, type, residents }) => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Image
        src={chooseImage(type?.toLowerCase(), "large")}
        width="100%"
        minHeight="320px"
        sx={{
          objectFit: "contain",
        }}
        alt={type}
      />
      <Link href="/">
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
        <Text variant="subtitle">{type}</Text>
        {residents[0]?.id !== null && (
          <>
            <Text
              mt="50px"
              mb="13px"
              variant="title"
              textAlign="center"
              color="white"
            >
              Residents
            </Text>
            <Box>
              {residents.map((resident) => (
                <Link
                  href="/residents/[residentSlug]"
                  as={`/residents/${resident.id}`}
                  key={resident.id}
                >
                  <Box
                    key={resident.id}
                    mb="8px"
                    sx={{
                      cursor: "pointer",
                    }}
                  >
                    <ResidentCard {...resident} />
                  </Box>
                </Link>
              ))}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Location;
