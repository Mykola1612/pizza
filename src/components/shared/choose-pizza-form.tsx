import React from "react";
import { Container, ProductVariants, ImageProduct, Ingradients } from "./index";
import { Ingredient, ProductVariations } from "@prisma/client";
import {
  PizzaSize,
  pizzaSizes,
  PizzaVariation,
  pizzaVariations,
} from "@/constants/pizza";

interface Props {
  imageURL: string;
  name: string;
  productVariations: ProductVariations;
  ingredients: Ingredient[];
}

export const ChoosePizzaForm: React.FC<Props> = ({
  imageURL,
  name,
  ingredients,
}) => {
  const [size, setSize] = React.useState<PizzaSize>(20);
  const [pizzaVariation, setPizzaVariation] = React.useState<PizzaVariation>(1);

  return (
    <>
      <Container className="flex ">
        <div className="bg-[#FFF7EE] flex justify-center items-center py-[38px] rounded-s-[30px] w-[500px] min-h-[580px]">
          <ImageProduct size={size} imageURL={imageURL} name={name} />
        </div>

        <div className=" bg-[#F4F1EE] py-[38px] px-10 rounded-e-[30px] w-[500px] min-h-[580px]">
          <h2 className="font-bold text-[24px] text-[#000] leading-normal">
            {name}
          </h2>
          <p className="mt-[14px] text-[#373737] font-normal opacity-60">
            {`${size} см,`}
          </p>
          <div className="mt-[25px]">
            <ProductVariants
              items={pizzaSizes}
              value={String(size)}
              onClick={(value) => setSize(Number(value) as PizzaSize)}
            />
            <ProductVariants
              className={"mt-3"}
              items={pizzaVariations}
              value={String(pizzaVariation)}
              onClick={(value) =>
                setPizzaVariation(Number(value) as PizzaVariation)
              }
            />
          </div>
          <div className="mt-8">
            <h3 className="font-semibold text-[18px] text-[#000] leading-normal ">
              Добавить по вкусу
            </h3>
            <Ingradients items={ingredients} />
          </div>

          <button className="mt-[30px] w-[100%] bg-[#fe5f00] text-white font-semibold  border-[1px] border-solid rounded-[18px] border-[#fe5f00] py-[14px] px-[22px] transition duration-[300ms] hover:bg-[#CECECE] hover:border-[#CECECE] focus:border-[#CECECE] focus:bg-[#CECECE]">
            {`Добавить в корзину за `}
          </button>
        </div>
      </Container>
    </>
  );
};
