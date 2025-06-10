"use client";
import React from "react";

type Variant = {
  name: string;
  value: string;
  activ?: boolean;
};

interface Props {
  items: readonly Variant[];
  className?: string;
  value?: string;
}

export const ProductVariants: React.FC<Props> = ({
  items,
  value,
  onClick,
  className,
}) => {
  console.log(items);

  return (
    <div
      className={`flex justify-between w-[420px] bg-[#ECECEC] rounded-[30px]  p-0.5 ${className} `}
    >
      {items.map((item) => (
        <button
          key={item.value}
          type="button"
          onClick={() => onClick(item.value)}
          className={` flex justify-center items-center h-[35px]  text-black rounded-[30px] py-[10px]  flex-1 text-sm ${
            item.activ ? "bg-white" : "bg-[#ECECEC]"
          } ${item.value === value ? "bg-white" : "bg-[#ECECEC]"}`}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
