import React from "react";

const categoriesArray = [
  "Все",
  "Мясные",
  "Острые",
  "Сладкие",
  "Вегетарианские",
  "С курицей",
];

const activeIndex = 0;

export const Categories = () => {
  return (
    <div className="inline-flex gap-[5px] bg-[#fafafa] rounded-[15px] py-[6px] px-[5px]">
      {categoriesArray.map((categorie, index) => (
        <button
          key={index}
          className={`rounded-[30px] py-[10px] px-[16px] font-bold min-w-[78px] text-center  transition duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)]  hover:text-primary focus:text-primary ${
            activeIndex === index && "bg-white  text-primary"
          }`}
          style={
            activeIndex === index
              ? { boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.05)" }
              : {}
          }
        >
          {categorie}
        </button>
      ))}
    </div>
  );
};
