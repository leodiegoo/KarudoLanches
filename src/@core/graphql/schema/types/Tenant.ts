import { mutationType, objectType, queryType } from "@nexus/schema";

export const Tenant = objectType({
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

export const QueriesTenant = queryType({
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

export const MutationsTenant = mutationType({
  definition(t) {
    t.crud.createOneTenant();
    t.crud.deleteOneTenant();
    t.crud.deleteManyTenant();
    t.crud.updateOneTenant();
    t.crud.updateManyTenant();
  }
});
