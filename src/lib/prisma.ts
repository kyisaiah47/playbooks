import { PrismaClient } from '../generated/prisma';

// Global Prisma instance for Next.js development
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// Helper function to disconnect Prisma
export const disconnectPrisma = async () => {
  await prisma.$disconnect();
};