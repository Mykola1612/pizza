import { notFound } from "next/navigation";
import { prisma } from "../../../../../../prisma/prisma-client";
import {
  ChooseProductModal,
  Container,
  ImageProduct,
  ProductVariants,
} from "@/components/shared";

export default async function ProductPage({ params: { id } }) {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      productVariations: true,
      ingredients: true,
    },
  });
  console.log(product);

  if (!product) {
    return notFound();
  }

  const size = 20;

  return <ChooseProductModal product={product} size={size} />;
}
