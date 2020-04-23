import React, { useState, useEffect, useRef } from "react";
import { Box, Image, Flex } from "rebass";
import Link from "next/link";
import throttle from "lodash/throttle";

import LocationCard from "components/cards/location";

import client from "utils/client";

import spinner from "public/images/spinner2.gif";

const GET_LOCATIONS_QUERY = `
  query getLocations($page: Int) {
    locations(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        type
        residents {
          id
          image
        }
      }
    }
  }
  `;

const Index = ({ locations: _locations }) => {
  const [items, setItems] = useState(_locations);
  const [isLoading, setIsLoading] = useState(false);
  const page = useRef(2);

  const loadLocations = () => {
    setIsLoading(true);

    Promise.all([
      client.request(GET_LOCATIONS_QUERY, { page: page.current }),
      new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
      }),
    ]).then((res) => {
      const newLocations = res[0].locations;
      setItems((items) => [
        ...items,
        ...newLocations.results.filter(({ id }) => {
          return !items.find(({ id: itemId }) => id === itemId);
        }),
      ]);
      page.current = newLocations.info.next;
      setIsLoading(false);
    });

    return;
  };

  useEffect(() => {
    handleScroll();
  }, []);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      if (page.current === null || isLoading === true) return;

      loadLocations();
    }
  };

  const throttleScroll = throttle(handleScroll, 500);

  useEffect(() => {
    window.addEventListener("scroll", throttleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", throttleScroll);
  }, []);

  return (
    <>
      <Box
        p="10px 8px"
        pb="36px"
        sx={{
          "@media screen and (min-width: 416px)": {
            display: "grid",
            gridGap: "8px",
            gridTemplateColumns: "repeat(auto-fit, minmax(398px, 1fr))",
          },
        }}
      >
        {items.map((location) => {
          return (
            <Link
              href={`/locations/[locationSlug]`}
              as={`/locations/${location.id}`}
              key={location.id}
            >
              <Box
                mb="8px"
                sx={{
                  cursor: "pointer",
                }}
                width="100%"
                mx="auto"
              >
                <LocationCard {...location} />
              </Box>
            </Link>
          );
        })}
      </Box>

      {page.current !== null && (
        <Flex width="100%" justifyContent="center">
          <Image
            src={spinner}
            sx={
              isLoading
                ? {
                    opacity: "1",
                    transition: "opacity ease-in 0.5s",
                    objectFit: "contain",
                    height: "300px",
                  }
                : {
                    opacity: 0,
                    transition: "opacity  ease-in 0.5s",
                    height: 0,
                    overflow: "hidden",
                  }
            }
            maxWidth="600px"
            minWidth="300px"
          />
        </Flex>
      )}
    </>
  );
};

export default Index;
