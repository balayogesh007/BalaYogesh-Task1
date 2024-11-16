import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { resolvers } from './resolvers';
import { typeDefs } from './schema';

async function bootStart() {
  const serverConfig = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(serverConfig, {
    listen: { port: 4000 },
  });

  console.log(`Sever started at -> ${url}`);
}

bootStart();
