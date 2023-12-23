import { MetadataRoute } from "next";
import { PrismaClient } from '../prisma/generated/client'
const prisma = new PrismaClient()

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const users = await prisma.user.findMany({
    select: {
      id: true,
    },
    take: 1,
  });

  return [
    {
      url: "https://precedent.dev",
      lastModified: new Date(),
    },
    ...users.map((user) => ({
      url: `https://precedent.dev/${user.id}`,
      lastModified: new Date(),
    })),
  ];
}
