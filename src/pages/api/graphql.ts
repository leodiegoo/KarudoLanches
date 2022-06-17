import { createContext } from "@/@core/graphql/context";
import { schema } from "@/@core/graphql/schema";
import { ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse, PageConfig } from "next";

const apolloServer = new ApolloServer({
  context: createContext,
  // @ts-ignore schema always will exist
  schema
});

const startServer = apolloServer.start();

export const config: PageConfig = {
  api: {
    bodyParser: false
  }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "https://studio.apollographql.com");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: "/api/graphql"
  })(req, res);
};

// export default apolloServer.createHandler({
//   path: "/api/graphql"
// });
