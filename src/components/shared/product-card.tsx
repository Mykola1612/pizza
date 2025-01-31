import Link from "next/link";
import React from "react";

interface Props {
  id: number;
  name: string;
  ingradients?: string;
  imageUrl: string;
  price: number;
}

export const ProductCard: React.FC<Props> = ({ id, name, imageUrl, price }) => {
  return (
    <Link href={`/product/${id}`} className="w-[285px]">
      <div className="flex justify-center items-center rounded-[15px] width-full h-[260px] bg-[#fff7ee]  ">
        <img src={imageUrl} alt={name} className="w-[212px] h-[212px]" />
      </div>
      <h2 className="text-[22px] font-bold mt-4">{name}</h2>
      <p className="text-[14px] text-[#b1b1b1] font-normal leading-[150%] mt-2">
        Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус
        альфредо, чеснок
      </p>
      <div className="flex justify-between items-center mt-3.5">
        <p className="text-[20px] font-normal">
          от <b className="font-bold">{price} ₴</b>
        </p>
        <button>+ Добавить</button>
      </div>
    </Link>
  );
};
