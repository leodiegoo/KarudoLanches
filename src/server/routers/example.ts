import { prisma } from "../db/client";
import { publicProcedure, router } from "../trpc";

export const exampleRouter = router({
  allTentans: publicProcedure.query(() => prisma.tenant.findMany())
});
