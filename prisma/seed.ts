import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  await prisma.tenant.create({
    data: {
      name: "Karudo Lanches",
      description: "Lanches e Churros"
    }
  });

  await prisma.user.create({
    data: {
      name: "Tenant do Karudo",
      role: "TENANT"
    }
  });

  await prisma.user.create({
    data: {
      name: "Leonardo",
      role: "USER"
    }
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
