import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import Express, { Request, Response } from "express";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";
import bodyParser from "body-parser";
import "dotenv/config";
import { DbConfig } from "./src/database/database-connection";
import { context } from "./src/middleware/auth.middleware";
import 'dotenv/config'

async function bootStart() {
  //Check DB connection
  try {
    await DbConfig.authenticate();
    await DbConfig.sync({alter: false})
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("DB connection ->", error);
    throw new Error("Unable to connect to the database:");
  }

  const serverConfig = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const expressApp = Express();

  expressApp.use(bodyParser.json());

  const port = process.env.PORT ?? 4020;

  const { url } = await startStandaloneServer(serverConfig, {
    listen: { port: port as number},
    context: context
  });

  console.log(`Sever started at -> ${url}`);
}

bootStart();
