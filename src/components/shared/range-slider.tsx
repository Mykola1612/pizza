interface Props {
  min: number;
  max: number;
  value: number[];
  onChange: (value: number[]) => void;
}

import React from "react";
import * as Slider from "@radix-ui/react-slider";

export const RangeSlider: React.FC<Props> = ({ min, max, value, onChange }) => {
  return (
    <Slider.Root
      defaultValue={[0, 1000]}
      value={value}
      onValueChange={onChange}
      step={1}
      min={min}
      max={max}
      className="relative flex items-center w-full h-6 mt-4"
    >
      <Slider.Track className="relative w-full h-2 bg-primary/30 rounded-full">
        <Slider.Range className="absolute h-2 bg-primary  rounded-full" />
      </Slider.Track>

      <Slider.Thumb className="block w-4 h-4 bg-white border-primary border-2 rounded-full focus:outline-none" />
      <Slider.Thumb className="block w-4 h-4 bg-white border-primary border-2 rounded-full focus:outline-none" />
    </Slider.Root>
  );
};
