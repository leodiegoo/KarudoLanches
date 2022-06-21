import { asNexusMethod, makeSchema, mutationType, objectType, queryType } from "@nexus/schema";
import { nexusPrisma } from "nexus-plugin-prisma";
import path from "path";
import { applyMiddleware } from "graphql-middleware";
import { DateTimeResolver } from "graphql-scalars";
import { permissions } from "../permissions";

export const GQLDate = asNexusMethod(DateTimeResolver, "date");

const Query = queryType({
  definition(t) {
    t.list.field("allTenants", {
      type: "Tenant",
      resolve(_parent, _args, ctx) {
        return ctx.prisma.tenant.findMany();
      }
    });
    t.crud.tenant();
    t.crud.tenants();
  }
});

const Mutation = mutationType({
  definition(t) {
    t.crud.createOneTenant();
    t.crud.deleteOneTenant();
    t.crud.deleteManyTenant();
    t.crud.updateOneTenant();
    t.crud.updateManyTenant();
  }
});

const User = objectType({
  name: "User",
  definition(t) {
    t.model.id();
    t.model.email();
    t.model.image();
    t.model.name();
    t.model.role();
    t.model.tenantId();
    t.model.tenant();

    t.model.updatedAt();
    t.model.createdAt();
  }
});

const Tenant = objectType({
  name: "Tenant",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.description();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.User();
  }
});

export const baseSchema = makeSchema({
  types: [User, Tenant, Query, Mutation, GQLDate],
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
