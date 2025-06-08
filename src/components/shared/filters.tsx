"use client";
import React, { useState } from "react";
import { CheckboxFiltersGroup, RangeSlider, FilterCheckbox } from "./index";
import { useFiltersIngredients } from "../../../hooks/useFiltersIngredients";

export const Filtration = () => {
  const { ingredients } = useFiltersIngredients();
  const [minRangeValue, setMinRangeValue] = useState(0);
  const [maxRangeValue, setMaxRangeValue] = useState(1000);
  const [checkStatus, setCheckStatus] = useState<string[]>([]);

  const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) > 1000) {
      setMinRangeValue(999);
      return;
    }
    let value = e.target.value.replace(/^0+/, "");
    value = value === "" ? "0" : value;
    setMinRangeValue(Number(value));
  };

  const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) > 1000) {
      setMaxRangeValue(1000);
      return;
    }

    let value = e.target.value.replace(/^0+/, "");
    value = value === "" ? "0" : value;
    setMaxRangeValue(Number(value));
  };

  const handleRangeChange = (values: number[]) => {
    if (values[1] < 100) {
      values[1] = 100;
    }
    setMinRangeValue(values[0]);
    setMaxRangeValue(values[1]);
  };

  return (
    <section className="w-[244px]">
      <h2 className="text-[22px] font-bold ">Фильтрация</h2>
      <div className="mt-[30px] flex flex-col gap-y-4">
        <FilterCheckbox
          text="Можно собирать"
          value="1"
          id="collectable"
          checkStatusInput={checkStatus}
          setCheckStatusInput={setCheckStatus}
        />
        <FilterCheckbox
          text="Новинки"
          value="2"
          id="new"
          checkStatusInput={checkStatus}
          setCheckStatusInput={setCheckStatus}
        />
      </div>
      <div className="mt-[42px]">
        <h3 className="text-[16px] font-bold">Цена от и до:</h3>
        <div className="mt-4 flex items-center gap-x-4 ">
          <label className="w-full relative">
            <input
              type="number"
              value={minRangeValue}
              onChange={handleMinInputChange}
              min={0}
              max={1000}
              className="rouded-[10px] w-full h-[40px] py-[10px] px-[14px] border border-solid border-[#f0f0f0] rounded-[10px] transition  duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus:border-primary focus:outline-none hover:border-primary"
            />
            <p className="absolute  mr-5 top-[50%] right-0 translate-x-[50%] translate-y-[-50%] ">
              ₴
            </p>
          </label>

          <label className="w-full relative">
            <input
              type="number"
              value={maxRangeValue}
              onChange={handleMaxInputChange}
              min={100}
              max={1000}
              className="rouded-[10px] w-full h-[40px] py-[10px] px-[14px] border border-solid border-[#f0f0f0] rounded-[10px] transition  duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus:border-primary focus:outline-none hover:border-primary"
            />
            <p className="absolute  mr-5 top-[50%] right-0 translate-x-[50%] translate-y-[-50%] ">
              ₴
            </p>
          </label>
        </div>
        <RangeSlider
          min={0}
          max={1000}
          value={[minRangeValue, maxRangeValue]}
          onChange={handleRangeChange}
        />
      </div>
      <CheckboxFiltersGroup
        title="Ингредиенты:"
        items={ingredients}
        checkStatusInput={checkStatus}
        setCheckStatusInput={setCheckStatus}
      />

      <div className="mt-[42px]">
        <h3 className="text-[16px] font-bold">Тип теста:</h3>
        <div className="flex flex-col gap-y-4 mt-4">
          <label className="text-[16px] font-normal flex gap-x-[12px] transition duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)]  hover:text-primary focus-within:text-primary">
            <div className="relative ">
              <input type="radio" name="dough" className="peer sr-only" />
              <div className="bg-[#f1f1f1] w-[24px] h-[24px] rounded-[50%] peer-checked:bg-primary"></div>
              <div className="bg-white w-[10px] h-[10px] rounded-[50%] absolute top-[50%] left-[50%] -translate-x-[50%] translate-y-[-50%] opacity-0 peer-checked:opacity-100"></div>
            </div>
            Традиционное
          </label>
          <label className="text-[16px] font-normal flex gap-x-[12px] transition duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)]  hover:text-primary focus-within:text-primary">
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
        className="py-4 bg-primary text-white w-[100%] rounded-[18px] mt-[34px] transition duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)]   hover:bg-[#fec300] focus:bg-[#fec300] "
      >
        Применить
      </button>
    </section>
  );
};
