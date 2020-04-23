import { GraphQLClient } from "graphql-request";
const DOMAIN = process.env.DOMAIN;

const client = new GraphQLClient(DOMAIN + "/graphql", {});

export default client;
