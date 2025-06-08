"use client";
import { useCategoryStore } from "@/store/category";
import React from "react";

export const Categories = ({ categoriesItems }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    <div className="inline-flex gap-[5px] bg-[#fafafa] rounded-[15px] py-[6px] px-[5px]">
      {categoriesItems.map(({ name }, index) => (
        <a
          href={`#${name}`}
          key={index}
          className={`rounded-[30px] py-[10px] px-[16px] font-bold min-w-[78px] text-center  transition duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)]  hover:text-primary focus:text-primary ${
            categoryActiveId === index + 1 && "bg-white  text-primary"
          }`}
          style={
            categoryActiveId === index + 1
              ? { boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.05)" }
              : {}
          }
        >
          {name}
        </a>
      ))}
    </div>
  );
};
