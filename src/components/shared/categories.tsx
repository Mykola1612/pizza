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
    <div className="inline-flex gap-[5px] ">
      {categoriesArray.map((categorie, index) => (
        <a
          key={index}
          className={`rounded-[30px] py-[10px] px-[16px] font-bold  ${
            activeIndex === index && "bg-white  text-primary"
          }`}
          style={
            activeIndex === index
              ? { boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.05)" }
              : {}
          }
        >
          <button>{categorie}</button>
        </a>
      ))}
    </div>
  );
};
