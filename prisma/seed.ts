import { PrismaClient } from "@prisma/client";

const categories = [
  {
    description: "Promoção: lanches"
  },
  {
    description: "Lanches",
    categoryAddition: [
      {
        name: "normal",
        description: null,
        position: 0,
        additionOptionalLimit: 2,
        categoryAdditionOptional: [
          {
            description: "Catupiry",
            price: 5.6
          },
          {
            description: "Cheddar",
            price: 5.6
          },
          {
            description: "Ovo",
            price: 3.36
          },
          {
            description: "Hambúrguer",
            price: 6.72
          },
          {
            description: "Bacon",
            price: 5.6
          },
          {
            description: "Milho",
            price: 2.8
          }
        ]
      }
    ]
  },
  {
    description: "Lanches especiais",
    categoryAddition: [
      {
        name: "normal",
        description: null,
        position: 0,
        additionOptionalLimit: 2,
        categoryAdditionOptional: [
          {
            description: "Catupiry",
            price: 5.6
          },
          {
            description: "Cheddar",
            price: 5.6
          },
          {
            description: "Ovo",
            price: 3.36
          },
          {
            description: "Hambúrguer",
            price: 6.72
          },
          {
            description: "Bacon",
            price: 5.6
          },
          {
            description: "Milho",
            price: 2.8
          }
        ]
      }
    ]
  },
  {
    description: "Churros tradicionais",
    categoryAddition: [
      {
        name: "Tradicional",
        description: "Coberturas 💕",
        position: 0,
        categoryAdditionRequired: [
          {
            description: "Sem cobertura",
            price: 0
          },
          {
            description: "Granulado",
            price: 0
          },
          {
            description: "Granulado colorido",
            price: 0
          },
          {
            description: "Amendoim",
            price: 0
          },
          {
            description: "Leite ninho",
            price: 0
          },
          {
            description: "Confete",
            price: 3
          },
          {
            description: "Coco ralado",
            price: 2
          },
          {
            description: "Chocoball",
            price: 2
          },
          {
            description: "Ovomaltine em pó",
            price: 2
          }
        ]
      }
    ]
  },
  {
    description: "Churros gourmet chocolate",
    categoryAddition: [
      {
        name: "Gourmet",
        description: "Coberturas 💕",
        position: 0,
        categoryAdditionRequired: [
          {
            description: "Sem cobertura",
            price: 0
          },
          {
            description: "Granulado",
            price: 0
          },
          {
            description: "Granulado colorido",
            price: 0
          },
          {
            description: "Amendoim",
            price: 0
          },
          {
            description: "Leite ninho",
            price: 0
          },
          {
            description: "Confete",
            price: 3
          },
          {
            description: "Coco ralado",
            price: 2
          },
          {
            description: "Chocoball",
            price: 2
          },
          {
            description: "Ovomaltine em pó",
            price: 2
          }
        ]
      }
    ]
  },
  {
    description: "Churros leitinho cremoso",
    categoryAddition: [
      {
        name: "Gourmet",
        description: "Coberturas 💕",
        position: 0,
        categoryAdditionRequired: [
          {
            description: "Sem cobertura",
            price: 0
          },
          {
            description: "Granulado",
            price: 0
          },
          {
            description: "Granulado colorido",
            price: 0
          },
          {
            description: "Amendoim",
            price: 0
          },
          {
            description: "Leite ninho",
            price: 0
          },
          {
            description: "Confete",
            price: 3
          },
          {
            description: "Coco ralado",
            price: 2
          },
          {
            description: "Chocoball",
            price: 2
          },
          {
            description: "Ovomaltine em pó",
            price: 2
          }
        ]
      }
    ]
  },
  {
    description: "Churros nutella",
    categoryAddition: [
      {
        name: "Gourmet",
        description: "Coberturas 💕",
        position: 0,
        categoryAdditionRequired: [
          {
            description: "Sem cobertura",
            price: 0
          },
          {
            description: "Granulado",
            price: 0
          },
          {
            description: "Granulado colorido",
            price: 0
          },
          {
            description: "Amendoim",
            price: 0
          },
          {
            description: "Leite ninho",
            price: 0
          },
          {
            description: "Confete",
            price: 3
          },
          {
            description: "Coco ralado",
            price: 2
          },
          {
            description: "Chocoball",
            price: 2
          },
          {
            description: "Ovomaltine em pó",
            price: 2
          }
        ]
      }
    ]
  },
  {
    description: "Churros moça morango nestlé",
    categoryAddition: [
      {
        name: "Gourmet",
        description: "Coberturas 💕",
        position: 0,
        categoryAdditionRequired: [
          {
            description: "Sem cobertura",
            price: 0
          },
          {
            description: "Granulado",
            price: 0
          },
          {
            description: "Granulado colorido",
            price: 0
          },
          {
            description: "Amendoim",
            price: 0
          },
          {
            description: "Leite ninho",
            price: 0
          },
          {
            description: "Confete",
            price: 3
          },
          {
            description: "Coco ralado",
            price: 2
          },
          {
            description: "Chocoball",
            price: 2
          },
          {
            description: "Ovomaltine em pó",
            price: 2
          }
        ]
      }
    ]
  },
  {
    description: "Churros especiais",
    categoryAddition: [
      {
        name: "Gourmet",
        description: "Coberturas 💕",
        position: 0,
        categoryAdditionRequired: [
          {
            description: "Sem cobertura",
            price: 0
          },
          {
            description: "Granulado",
            price: 0
          },
          {
            description: "Granulado colorido",
            price: 0
          },
          {
            description: "Amendoim",
            price: 0
          },
          {
            description: "Leite ninho",
            price: 0
          },
          {
            description: "Confete",
            price: 3
          },
          {
            description: "Coco ralado",
            price: 2
          },
          {
            description: "Chocoball",
            price: 2
          },
          {
            description: "Ovomaltine em pó",
            price: 2
          }
        ]
      }
    ]
  },
  {
    description: "Fondue de churros",
    categoryAddition: [
      {
        name: "12 mini churros (g)",
        description: "Turbine seu foundue 🧡",
        position: 0,
        categoryAdditionRequired: [
          {
            description: "Granulado",
            price: 0
          },
          {
            description: "Granulado colorido",
            price: 0
          },
          {
            description: "Amendoim",
            price: 0
          },
          {
            description: "Confete",
            price: 3
          }
        ]
      },
      {
        name: "9 mini churros (p)",
        description: "Turbine seu foundue 🧡",
        position: 0,
        categoryAdditionRequired: [
          {
            description: "Granulado",
            price: 0
          },
          {
            description: "Granulado colorido",
            price: 0
          },
          {
            description: "Amendoim",
            price: 0
          },
          {
            description: "Confete",
            price: 3
          }
        ]
      }
    ]
  },
  {
    description: "Porções"
  },
  {
    description: "Refrigerantes lata"
  },
  {
    description: "Refrigerantes 600ML"
  },
  {
    description: "Refrigerantes 1L"
  },
  {
    description: "Refrigerantes 2L"
  },
  {
    description: "Cervejas"
  }
];

const prisma = new PrismaClient();
async function main() {
  categories.forEach(async (mockCategory) => {
    const category = await prisma.category.create({
      data: {
        description: mockCategory.description
      }
    });

    if (mockCategory.categoryAddition) {
      mockCategory.categoryAddition.forEach(async (mockCategoryAddition) => {
        const categoryAddition = await prisma.categoryAddition.create({
          data: {
            name: mockCategoryAddition.name,
            description: mockCategoryAddition.description,
            position: mockCategoryAddition.position,
            category: {
              connect: {
                id: category.id
              }
            }
          }
        });

        // @ts-ignore
        if (mockCategoryAddition.categoryAdditionRequired) {
          // @ts-ignore
          mockCategoryAddition.categoryAdditionRequired?.forEach(
            async (mockCategoryAdditionRequired: any) => {
              await prisma.categoryAdditionRequired.create({
                data: {
                  description: mockCategoryAdditionRequired.description,
                  price: mockCategoryAdditionRequired.price,
                  categoryAddition: {
                    connect: {
                      id: categoryAddition.id
                    }
                  }
                }
              });
            }
          );
        }

        // @ts-ignore
        if (mockCategoryAddition.categoryAdditionOptional) {
          // @ts-ignore
          mockCategoryAddition.categoryAdditionOptional?.forEach(
            async (mockCategoryAdditionOptional: any) => {
              await prisma.categoryAdditionOptional.create({
                data: {
                  description: mockCategoryAdditionOptional.description,
                  price: mockCategoryAdditionOptional.price,
                  categoryAddition: {
                    connect: {
                      id: categoryAddition.id
                    }
                  }
                }
              });
            }
          );
        }
      });
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
