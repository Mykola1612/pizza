import { Ingredient } from "@prisma/client";
import React from "react";

interface Props {
  items: Ingredient[];
}

export const Ingradients: React.FC<Props> = ({ items }) => {
  return (
    <div className="">
      <ul className="flex flex-wrap gap-3 ">
        {items.map(({ id, name, imageURL, price }) => (
          <li
            key={id}
            className="flex flex-col justify-center items-center max-w-[130px] bg-white rounded-2xl px-[10px] py-[10] max-h-[210px]"
          >
            <img className="w-[110px] h-[110px]" src={imageURL} alt={name} />
            <h4 className=" text-center mt-1.5">{name}</h4>
            <p className="mt-auto">{price}$</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
