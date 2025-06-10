import { notFound } from "next/navigation";
import { prisma } from "../../../../../prisma/prisma-client";
import { Container, ImageProduct, ProductVariants } from "@/components/shared";

export default async function ProductPage({ params: { id } }) {
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  if (!product) {
    return notFound();
  }

  const size = 40;

  console.log(product);

  return (
    <Container className="flex gap-x-10 pt-10">
      <div className=" rounded-[20px] bg-[#FFF7EE] w-[570px] h-[570px] flex justify-center items-center">
        <ImageProduct
          size={size}
          imageURL={product.imageURL}
          name={product.name}
        />
      </div>

      <div className="w-[630px]">
        <h2 className="font-extrabold text-[34px] text-[#373737] leading-[110%] tracking-[-0.5px]">
          {product.name}
        </h2>
        <p className=" mt-[14px] text-[#373737] font-normal opacity-60">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta cum
        </p>
        <div className="mt-[25px]">
          <ProductVariants
            items={[
              { name: "Маленькая", value: "20", activ: true },
              { name: "Средняя", value: "30" },
              { name: "Большая", value: "40" },
            ]}
          />
        </div>
      </div>
    </Container>
  );
}
