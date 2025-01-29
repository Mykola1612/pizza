import React from "react";

// interface NameProps {}
// React.FC<NameProps>;
const ingradients = [
  "Моцарелла",
  "Чеснок",
  "Солённые огурчики",
  "Красный лук",
  "Томаты",
  "Сырный соус",
];

export const Filtration = () => {
  return (
    <div className="w-[244px]">
      <h2 className="text-[22px] font-bold ">Фильтрация</h2>
      <div className="mt-[30px] flex flex-col gap-y-[16px]">
        <label className="text-[16px] font-normal flex gap-[12px] transition duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)]  hover:text-primary focus:text-primary">
          <div className="relative w-[24px] h-[24px]">
            <input type="checkbox" className="peer sr-only" />
            <div className="w-[24px] h-[24px] bg-[#f1f1f1] rounded-[8px] peer-checked:bg-primary "></div>
            <svg className="w-[11px] h-[9px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] opacity-0 peer-checked:opacity-100">
              <use href="/pizza/assets/sprite.svg#icon-Check-mark" />
            </svg>
          </div>
          Можно собирать
        </label>
        <label className="text-[16px] font-normal flex gap-x-[12px] transition duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)]  hover:text-primary focus:text-primary ">
          <div className="relative w-[24px] h-[24px]">
            <input type="checkbox" className=" peer sr-only" />
            <div className="w-[24px] h-[24px] bg-[#f1f1f1] rounded-[8px]   peer-checked:bg-primary"></div>
            <svg className="w-[11px] h-[9px] absolute top-[50%] left-[50%] -translate-x-[50%] translate-y-[-50%] opacity-0 peer-checked:opacity-100">
              <use href="/pizza/assets/sprite.svg#icon-Check-mark" />
            </svg>
          </div>
          Новинки
        </label>
      </div>
      <div className="mt-[42px]">
        <h3 className="text-[16px] font-bold">Цена от и до:</h3>
      </div>
      <div className="mt-[42px]">
        <h3 className="text-[16px] font-bold">Ингредиенты:</h3>
        <ul className="flex flex-col gap-y-[15px] mt-[15px]">
          {ingradients.map((ingradient, index) => (
            <li key={index}>
              <label className="text-[16px] font-normal flex gap-[12px] transition duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)]  hover:text-primary focus:text-primary">
                <div className="relative w-[24px] h-[24px]">
                  <input type="checkbox" className="peer sr-only" />
                  <div className="w-[24px] h-[24px] bg-[#f1f1f1] rounded-[8px] peer-checked:bg-primary"></div>
                  <svg className="w-[11px] h-[9px] absolute top-[50%] left-[50%] -translate-x-[50%] translate-y-[-50%] opacity-0 peer-checked:opacity-100">
                    <use href="/pizza/assets/sprite.svg#icon-Check-mark" />
                  </svg>
                </div>
                {ingradient}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-[42px]">
        <h3 className="text-[16px] font-bold">Тип теста:</h3>
        <div className="flex flex-col gap-y-[15px] mt-[15px]">
          <label className="text-[16px] font-normal flex gap-x-[12px] transition duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)]  hover:text-primary focus:text-primary">
            <div className="relative ">
              <input type="radio" name="dough" className="peer sr-only" />
              <div className="bg-[#f1f1f1] w-[24px] h-[24px] rounded-[50%] peer-checked:bg-primary"></div>
              <div className="bg-white w-[10px] h-[10px] rounded-[50%] absolute top-[50%] left-[50%] -translate-x-[50%] translate-y-[-50%] opacity-0 peer-checked:opacity-100"></div>
            </div>
            Традиционное
          </label>
          <label className="text-[16px] font-normal flex gap-x-[12px] transition duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)]  hover:text-primary focus:text-primary">
            <div className="relative">
              <input type="radio" name="dough" className="peer sr-only" />
              <div className="w-[24px] h-[24px] rounded-[50%] bg-[#f1f1f1] peer-checked:bg-primary"></div>
              <div className="w-[10px] h-[10px] bg-[#f1f1f1] rounded-[50%] absolute top-[50%] left-[50%] -translate-x-[50%] translate-y-[-50%] opacity-0 peer-checked:opacity-100"></div>
            </div>
            Тонкое
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="py-[15px] bg-primary text-white w-[100%] rounded-[18px] mt-[34px] transition duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)]   hover:bg-[#fec300] focus:bg-[#fec300] "
      >
        Применить
      </button>
    </div>
  );
};
