import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
};

// FOR PRODUCTION WHAT WE DO IS 
// export const db = new PrismaClient();
//But in development we use the trick to prevent hotreload 

export const db = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== "production") globalThis.prisma = db