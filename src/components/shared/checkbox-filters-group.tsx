"use client";
import React, { useState } from "react";
import { FilterCheckbox } from "./filter-checkbox";

interface Item {
  id: string;
  name: string;
  value: string;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
}

interface Props {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  checkStatusInput,
  setCheckStatusInput,
  limit = 6,
  searchInputPlaceholder = "Пошук...",
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSerachValue] = useState("");

  const itemsList = showAll
    ? items.filter((item) => item.name.toLowerCase().includes(searchValue))
    : items.slice(0, limit);

  const handelShowButton = () => {
    setShowAll(!showAll);
  };

  const handelSearchChengeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const LowerCaseSearch = e.target.value.toLowerCase();
    setSerachValue(LowerCaseSearch);
    console.log(LowerCaseSearch);
  };

  return (
    <div className="mt-[42px]">
      <h3 className="text-[16px] font-bold">{title}</h3>
      {showAll && (
        <div className="mt-4">
          <input
            type="text"
            placeholder={searchInputPlaceholder}
            onChange={handelSearchChengeInput}
            className="rouded-[10px] w-full h-[40px] py-[10px] px-[14px] border border-solid border-[#f0f0f0] rounded-[10px] transition  duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus:border-primary focus:outline-none hover:border-primary"
          />
        </div>
      )}
      <ul className="flex flex-col gap-y-4 mt-4 max-h-96 scrollbar pr-2 overflow-auto">
        {itemsList.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.name}
            value={item.value}
            id={item.id}
            checkStatusInput={checkStatusInput}
            setCheckStatusInput={setCheckStatusInput}
          />
        ))}
      </ul>
      {itemsList.length === 0 ? (
        ""
      ) : (
        <button
          onClick={handelShowButton}
          className="text-primary font-normal text-[16px] mt-5"
        >
          {showAll ? "Сховати" : "+ Показати все"}
        </button>
      )}
    </div>
  );
};
