import React from "react";

// interface NameProps {}

export const SortPopup = () => {
  return (
    <button className="inline-flex items-center mr-auto gap-x-2 text-[#202020] font-normal text-[16px] py-4 px-[22px]">
      <svg className="w-[14px] h-[16px]">
        <use href="/pizza/assets/sprite.svg#icon-Change" />
      </svg>
      <p>
        Сортировка: <span className="text-primary ">рейтингу</span>
      </p>
    </button>
  );
};
