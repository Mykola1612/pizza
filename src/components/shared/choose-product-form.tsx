import React from "react";
import { Container } from "./container";
import { ImageProduct } from "./image-product";

interface Props {
  imageURL: string;
  name: string;
  size: string;
}

export const ChooseProductForm: React.FC<Props> = ({
  imageURL,
  name,
  size,
}) => {
  return (
    <>
      <Container className="flex ">
        <div className="bg-[#FFF7EE] flex justify-center items-center py-[38px] rounded-s-[30px] w-[500px] min-h-[580px]">
          <ImageProduct size={size} imageURL={imageURL} name={name} />
        </div>

        <div className=" bg-[#F4F1EE] py-[38px] px-10 rounded-e-[30px] w-[500px] min-h-[580px]">
          <h2 className="font-extrabold text-[34px] text-[#373737] leading-[110%] tracking-[-0.5px]">
            {name}
          </h2>
          <p className="mt-[14px] text-[#373737] font-normal opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta cum
          </p>

          <button className="mt-[30px] w-[100%] bg-[#fe5f00] text-white font-semibold  border-[1px] border-solid rounded-[18px] border-[#fe5f00] py-[14px] px-[22px] transition duration-[300ms] hover:bg-[#CECECE] hover:border-[#CECECE] focus:border-[#CECECE] focus:bg-[#CECECE]">
            {`Добавить в корзину за `}
          </button>
        </div>
      </Container>
    </>
  );
};

{
  /* <div className="mt-[25px]">
  <ProductVariants
    items={[
      { name: "Маленькая", value: "20", activ: true },
      { name: "Средняя", value: "30" },
      { name: "Большая", value: "40" },
    ]}
  />
</div>; */
}
