import express from "express";
import { authMiddleware, handleLogin } from "./auth.js";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware as apolloMiddleware } from "@apollo/server/express4";
import { readFile } from "node:fs/promises";
import bodyParser from "body-parser";
import cors from "cors";
import { resolvers } from "./resolvers.js";

const port = 9000;

const app = express();
app.use(cors(), express.json(), authMiddleware);

app.use("/login", handleLogin);

const typeDefs = await readFile("./schema.graphql", "utf-8");

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});
await apolloServer.start();

app.use("/graphql", cors(), bodyParser.json(), apolloMiddleware(apolloServer));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(
    `GraphQL server listening on endpoint: http://localhost:${port}/graphql`
  );
});
