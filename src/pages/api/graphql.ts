import { createContext } from "@/@core/graphql/context";
import { ApolloServer } from "apollo-server-micro";
import { NextApiHandler, PageConfig } from "next";
import cors from "micro-cors";
import { schema } from "@/@core/graphql/schema";

const apolloServer = new ApolloServer({
  context: createContext,
  // @ts-ignore schema always will exist
  schema
});

export const config: PageConfig = {
  api: {
    bodyParser: false
  }
};

let apolloServerHandler: NextApiHandler;
async function getApolloServerHandler() {
  if (!apolloServerHandler) {
    await apolloServer.start();

    apolloServerHandler = apolloServer.createHandler({
      path: "/api/graphql"
    });
  }

  return apolloServerHandler;
}

const handler: NextApiHandler = async (req, res) => {
  // @ts-ignore
  const apolloHandler = await getApolloServerHandler();

  if (req.method === "OPTIONS") {
    res.end();
    return;
  }

  return apolloHandler(req, res);
};

const corsConfig =
  process.env.NODE_ENV === "development"
    ? {
        origin: "https://studio.apollographql.com",
        allowCredentials: true
      }
    : {};

export default cors(corsConfig)(handler as any);
