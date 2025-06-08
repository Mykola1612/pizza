"use client";

export interface FilterCheckboxProps {
  id?: string;
  text: string;
  value: string;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  checkStatusInput: string[];
  setCheckStatusInput: React.Dispatch<React.SetStateAction<string[]>>;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  text,
  value,
  id,
  checkStatusInput,
  setCheckStatusInput,
}) => {
  console.log(checkStatusInput);

  const handleinputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    const checked = e.target.checked;
    console.log([`${id} : ${checked}`]);

    setCheckStatusInput((prevState) =>
      checked ? [...prevState, id] : prevState.filter((item) => item !== id)
    );
  };
  console.log(checkStatusInput);

  return (
    <label className="text-[16px] font-normal flex gap-x-[12px] transition duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)]  focus-within:text-primary  hover:text-primary cursor-pointer">
      <div className="relative w-[24px] h-[24px]">
        <input
          type="checkbox"
          className=" peer sr-only "
          value={value}
          id={id}
          onChange={handleinputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              e.currentTarget.click();
            }
          }}
        />
        <div className="w-[24px] h-[24px] bg-[#f1f1f1] rounded-[8px] peer-checked:bg-primary"></div>
        <svg className="w-[11px] h-[9px] absolute top-[50%] left-[50%] -translate-x-[50%] translate-y-[-50%] opacity-0 peer-checked:opacity-100">
          <use href="/pizza/assets/sprite.svg#icon-Check-mark" />
        </svg>
      </div>
      {text}
    </label>
  );
};
