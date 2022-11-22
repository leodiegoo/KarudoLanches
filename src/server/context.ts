import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { unstable_getServerSession as getServerSession } from "next-auth";

import { authOptions as nextAuthOptions } from "../pages/api/auth/[...nextauth]";
import { prisma } from "./db/client";

export async function createContextInner(_opts?: trpcNext.CreateNextContextOptions) {
  const req = _opts?.req;
  const res = _opts?.res;

  const session = req && res && (await getServerSession(req, res, nextAuthOptions));

  return {
    req,
    res,
    session,
    prisma
  };
}
export type Context = trpc.inferAsyncReturnType<typeof createContextInner>;

export async function createContext(opts?: trpcNext.CreateNextContextOptions): Promise<Context> {
  return createContextInner(opts);
}
