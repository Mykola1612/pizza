"use client";
import React from "react";
import { Modal } from "../modal";
import { ChooseProductForm, ChoosePizzaForm } from "../index";
import { ProductWithRelation } from "../../../../@types/prisma";

interface Props {
  product: ProductWithRelation;
  size: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, size }) => {
  const isPizzaForm = Boolean(product.productVariations[0].pizzaDoughType);

  console.log(product.ingredients);

  return (
    <Modal className={"min-w-[1000px] min-h-[580px]"}>
      {isPizzaForm ? (
        <ChoosePizzaForm
          imageURL={product.imageURL}
          size={40}
          name={product.name}
          productVariations={product.productVariations[0]}
          ingredients={product.ingredients}
        />
      ) : (
        <>
          {" "}
          <ChooseProductForm
            imageURL={product.imageURL}
            size={20}
            name={product.name}
          />
        </>
      )}
    </Modal>
  );
};
