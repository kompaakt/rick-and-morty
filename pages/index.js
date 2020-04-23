import React from "react";

import Index from "containers/index";

import client from "utils/client";

const IndexPage = ({ locations }) => {
  return <Index locations={locations} />;
};

export async function getStaticProps() {
  const GET_LOCATIONS_QUERY = `{
    locations(page: 1) {
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
          name
          image
        }
      }
    }
  }`;

  const { locations } = await client.request(GET_LOCATIONS_QUERY);

  return {
    props: {
      locations: locations.results,
    },
  };
}

export default IndexPage;
