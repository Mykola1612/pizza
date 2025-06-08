import {
  Container,
  Filtration,
  ProducktsGroupList,
  Title,
  TopBar,
} from "@/components/shared";
import { prisma } from "../../../prisma/prisma-client";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          productVariations: true,

          ingredients: true,
        },
      },
    },
  });

  return (
    <>
      <section className="pt-[40px]">
        <Container>
          <Title text={"Всі продукти"} />
        </Container>
      </section>
      <TopBar categories={categories} />
      <section className="pt-[36px]">
        <Container className="flex justify-between">
          <Filtration />
          <div className="w-[960px]">
            {categories.length > 0 &&
              categories.map(
                (categorie) =>
                  categorie.products.length > 0 && (
                    <ProducktsGroupList
                      key={categorie.id}
                      title={categorie.name}
                      categoryId={categorie.id}
                      items={categorie.products}
                    />
                  )
              )}
          </div>
        </Container>
      </section>
    </>
  );
}
