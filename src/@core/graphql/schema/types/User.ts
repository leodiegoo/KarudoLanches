import { objectType } from "@nexus/schema";

export const User = objectType({
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
