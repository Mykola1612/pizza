import React from "react";

interface TitleProps {
  text: string;
}

export const Title = ({ text }: TitleProps) => {
  return <h1 className="font-extrabold text-[36px] text-black">{text}</h1>;
};
