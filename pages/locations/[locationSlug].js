import React from "react";

import Location from "containers/location";

import client from "utils/client";

const LocationPage = ({ location }) => {
  return <Location {...location} />;
};

export async function getStaticProps({ params: { locationSlug } }) {
  const GET_LOCATION_QUERY = `
    query getLocation($id: ID) {
      location(id: $id) {
        id
        name
        type
        residents {
          id
          image
          name
          species
          origin {
            name
          }
        }
      }
    }
  `;

  let location = {};

  try {
    const { location: _location } = await client.request(GET_LOCATION_QUERY, {
      id: locationSlug,
    });

    location = _location;
  } catch (err) {
    const { location: _location } = err.response.data;
    location = _location;
  }

  return { props: { location } };
}

export async function getStaticPaths() {
  const GET_LOCATIONS_QUERY = (page) => `{
    locations(page: ${page}) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
      }
    }
  }`;

  function getLocations(page, locationsId) {
    return new Promise((resolve, reject) =>
      client
        .request(GET_LOCATIONS_QUERY(page))
        .then(({ locations }) => {
          locationsId = locationsId.concat(locations.results);
          if (locations.info.next) {
            getLocations(locations.info.next, locationsId)
              .then(resolve)
              .catch(reject);
          } else {
            resolve(locationsId);
          }
        })
        .catch(reject)
    );
  }

  const locationsId = await getLocations(1, []);

  return {
    paths: locationsId.map(({ id }) => ({
      params: { locationSlug: id },
    })),
    fallback: false,
  };
}

export default LocationPage;
