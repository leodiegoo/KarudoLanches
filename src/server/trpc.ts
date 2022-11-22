import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import { Context } from "./context";

const t = initTRPC.context<Context>().create({
  transformer: superjson,

  errorFormatter({ shape }) {
    return shape;
  }
});

export const { router } = t;

export const publicProcedure = t.procedure;

export const { middleware } = t;

export const { mergeRouters } = t;
