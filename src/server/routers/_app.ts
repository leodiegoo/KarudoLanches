import { publicProcedure, router } from "../trpc";
import { exampleRouter } from "./example";

export const appRouter = router({
  healthcheck: publicProcedure.query(() => "yay!"),
  tenant: exampleRouter
});

export type AppRouter = typeof appRouter;
