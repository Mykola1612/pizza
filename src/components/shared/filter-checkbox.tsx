import React from "react";

export interface FilterCheckboxProps {
  text: string;
  value: string;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  text,
  value,
}) => {
  const handleinputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const checked = e.target.checked;
    const checkboxStatus = [value, checked];
    console.log("checkboxStatus: ", checkboxStatus);
  };

  return (
    <label className="text-[16px] font-normal flex gap-x-[12px] transition duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)]  focus-within:text-primary  hover:text-primary">
      <div className="relative w-[24px] h-[24px]">
        <input
          type="checkbox"
          className=" peer sr-only"
          value={value}
          onChange={handleinputChange}
        />
        <div className="w-[24px] h-[24px] bg-[#f1f1f1] rounded-[8px]   peer-checked:bg-primary"></div>
        <svg className="w-[11px] h-[9px] absolute top-[50%] left-[50%] -translate-x-[50%] translate-y-[-50%] opacity-0 peer-checked:opacity-100">
          <use href="/pizza/assets/sprite.svg#icon-Check-mark" />
        </svg>
      </div>
      {text}
    </label>
  );
};
