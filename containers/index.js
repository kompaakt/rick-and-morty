import React, { useState, useEffect, useRef } from "react";
import { Box, Image } from "rebass";
import Link from "next/link";
import throttle from "lodash/throttle";

import LocationCard from "components/cards/location";

import client from "utils/client";

import spinner from "public/images/spinner.gif";

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
    <Box as="ul" p="10px 8px" pb="36px">
      {items.map((location) => {
        return (
          <Link
            href={`/locations/[locationSlug]`}
            as={`/locations/${location.id}`}
            key={location.id}
          >
            <Box
              as="li"
              mb="8px"
              sx={{
                cursor: "pointer",
              }}
            >
              <LocationCard {...location} />
            </Box>
          </Link>
        );
      })}
      {page.current !== null && (
        <Image
          src={spinner}
          sx={
            isLoading
              ? {
                  opacity: "1",
                  height: "auto",
                  width: "100%",
                  transition: "opacity ease-in 0.5s",
                }
              : {
                  opacity: 0,
                  transition: "opacity  ease-in 0.5s",
                  height: 0,
                  overflow: "hidden",
                }
          }
        />
      )}
    </Box>
  );
};

export default Index;
