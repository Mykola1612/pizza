import { Ingredient, Product, ProductVariations } from "@prisma/client";

export type ProductWithRelation = Product & {
  productVariations: ProductVariations[];
  ingredients: Ingredient[];
};
