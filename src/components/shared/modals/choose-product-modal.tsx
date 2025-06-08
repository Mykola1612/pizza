"use client";
import React, { useEffect } from "react";
import { Container } from "../container";
import { ImageProduct } from "../image-product";
import { ProductVariants } from "../product-variants";
import { useRouter } from "next/navigation";

interface Props {
  product: [];
  size: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, size }) => {
  const router = useRouter();
  const totalPrise = "350$";

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 w-screen h-screen  z-[1000] "
      onClick={() => {
        router.back();
      }}
    >
      <div
        className="absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]  bg-white rounded-[30px]"
        onClick={(e) => e.stopPropagation()}
      >
        <Container className="flex ">
          <div className="bg-[#FFF7EE] flex justify-center items-center py-[38px] rounded-s-[30px] w-[500px] min-h-[580px]">
            <ImageProduct size={size} product={product} />
          </div>

          <div className=" bg-[#F4F1EE] py-[38px] px-10 rounded-e-[30px] w-[500px] min-h-[580px]">
            <h2 className="font-extrabold text-[34px] text-[#373737] leading-[110%] tracking-[-0.5px]">
              {product.name}
            </h2>
            <p className="mt-[14px] text-[#373737] font-normal opacity-60">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              cum
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
            <button className="mt-[30px] w-[100%] bg-[#fe5f00] text-white font-semibold  border-[1px] border-solid rounded-[18px] border-[#fe5f00] py-[14px] px-[22px] transition duration-[300ms] hover:bg-[#CECECE] hover:border-[#CECECE] focus:border-[#CECECE] focus:bg-[#CECECE]">
              {`Добавить в корзину за ${totalPrise}`}
            </button>
          </div>
        </Container>
        <button
          type="button"
          className="absolute right-[-60px] top-0"
          onClick={() => {
            router.back();
          }}
        >
          <svg className="fill-white w-[30px] h-[30px]">
            <use href="/pizza/assets/sprite.svg#icon-close" />
          </svg>
        </button>
      </div>
    </div>
  );
};
