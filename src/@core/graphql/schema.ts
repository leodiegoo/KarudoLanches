import { makeSchema, objectType, queryType } from "@nexus/schema";
import { nexusPrisma } from "nexus-plugin-prisma";
import path from "path";

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

export const schema = makeSchema({
  types: [User, Tenant, Query],
  // @ts-ignore
  plugins: [nexusPrisma({ experimentalCRUD: true })],
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
// import { makeSchema, connectionPlugin, queryType } from "nexus";
// import { join } from "path";

// export const schema = makeSchema({
//   types: [Query],
//   plugins: [connectionPlugin()],
//   outputs: {
//     typegen: join(process.cwd(), "node_modules", "@types", "nexus-typegen", "index.d.ts"),
//     schema: join(process.cwd(), "src", "@core", "graphql", "schema.graphql")
//   },
//   contextType: {
//     export: "Context",
//     module: join(process.cwd(), "src", "@core", "graphql", "context.ts")
//   }
// });
