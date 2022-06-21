import { asNexusMethod, makeSchema } from "@nexus/schema";
import { nexusPrisma } from "nexus-plugin-prisma";
import path from "path";
import { applyMiddleware } from "graphql-middleware";
import { DateTimeResolver } from "graphql-scalars";
import { permissions } from "../permissions";
import { QueriesTenant, MutationsTenant, Tenant } from "./types/Tenant";
import { User } from "./types/User";

export const GQLDate = asNexusMethod(DateTimeResolver, "date");

export const baseSchema = makeSchema({
  types: [User, Tenant, QueriesTenant, MutationsTenant, GQLDate],
  shouldGenerateArtifacts: process.env.NODE_ENV === "development",
  // @ts-ignore
  plugins: [
    // @ts-ignore
    nexusPrisma({
      experimentalCRUD: true,
      outputs: {
        typegen: path.join(process.cwd(), "generated", "typegen-nexus-plugin-prisma.d.ts")
      }
    })
  ],
  outputs: {
    typegen: path.join(process.cwd(), "generated", "nexus-typegen.ts"),
    schema: path.join(process.cwd(), "generated", "schema.graphql")
  },
  typegenAutoConfig: {
    contextType: "Context.Context",
    sources: [
      {
        source: "@prisma/client",
        alias: "prisma"
      },
      {
        source: path.join(process.cwd(), "src", "@core", "graphql", "context.ts"),
        alias: "Context"
      }
    ]
  }
});

export const schema = applyMiddleware(baseSchema, permissions);
