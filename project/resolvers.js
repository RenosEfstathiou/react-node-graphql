import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    jobs: () => {
      return prisma.job.findMany();
    },
    job: (_, { id }) => {
      return prisma.job.findUnique({
        where: { id },
      });
    },
  },
};
