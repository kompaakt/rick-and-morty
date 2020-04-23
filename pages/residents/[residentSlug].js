import React from "react";

import Resident from "containers/resident";

import client from "utils/client";

const ResidentPage = ({ resident }) => {
  return <Resident {...resident} />;
};

export async function getStaticProps({ params: { residentSlug } }) {
  const GET_RESIDENT_QUERY = `
    query getCharacter($id: ID) {
      character(id: $id) {
        id
        name
        image
        species
        status
        origin {
          name
        }
        location {
          id
          name
        }
      }
    }
  `;

  const { character } = await client.request(GET_RESIDENT_QUERY, {
    id: residentSlug,
  });

  return { props: { resident: character } };
}

export async function getStaticPaths() {
  const GET_RESIDENTS_QUERY = (page) => `{
    characters(page: ${page}) {
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

  function getResidents(page, residentsId) {
    return new Promise((resolve, reject) =>
      client
        .request(GET_RESIDENTS_QUERY(page))
        .then(({ characters }) => {
          residentsId = residentsId.concat(characters.results);
          if (characters.info.next) {
            getResidents(characters.info.next, residentsId)
              .then(resolve)
              .catch(reject);
          } else {
            resolve(residentsId);
          }
        })
        .catch(reject)
    );
  }

  const residentsId = await getResidents(1, []);

  return {
    paths: residentsId.map(({ id }) => ({
      params: { residentSlug: id },
    })),
    fallback: false,
  };
}

export default ResidentPage;
