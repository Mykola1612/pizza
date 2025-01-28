import Image from "next/image";
import { Container } from "./container";
import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-[#f6f6f6] border-b-[1px] ">
      <Container className="py-[42px] flex ">
        <div className="flex gap-[15px] items-center">
          <Link href="/">
            <Image
              src="/pizza/assets/logo.png"
              alt="Logo pizza"
              width={35}
              height={35}
              className="h-[35px] w-[35px]"
            />
          </Link>
          <div>
            <h1 className="font-black text-[24px] tracking-[0.01em] uppercase">
              Pizza
            </h1>
            <p className="font-normal text-[16px] text-[#7b7b7b]">
              смачніше вже точно нікуди
            </p>
          </div>
        </div>
        <div className=" flex gap-x-[16px] content-end ml-auto">
          <button className="group flex gap-[8px] items-center text-[#fe5f00] font-semibold  border-[1px] border-solid rounded-[15px] border-[#fe5f00] py-[14px] px-[22px] transition duration-[300ms] hover:border-[#fec300] hover:text-[#fec300]">
            <svg className="w-[13px] h-[15px] stroke-[#fe5f00] transition duration-[300ms] group-hover:stroke-[#fec300]">
              <use href="/pizza/assets/sprite.svg#icon-Human" />
            </svg>
            Войти
          </button>
          <button className="relative group flex gap-x-[13px] bg-[#fe5f00] rounded-[15px] text-white items-center px-[23px] py-[12px] transition duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#fec300]">
            <b>400 ₴</b>
            <span className=" bg-[rgba(255,255,255,0.25)] w-[1px] h-[25px] block"></span>

            <div className="flex gap-x-2 items-center transition ease-[cubic-bezier(0.4,0,0.2,1)]  duration-[300ms] group-hover:opacity-0 ">
              <svg width="16" height="16" className="stroke-[#fff] ">
                <use href="/pizza/assets/sprite.svg#icon-Shopping-cart" />
              </svg>
              <b>3</b>
            </div>
            <div className="absolute transition ease-[cubic-bezier(0.4,0,0.2,1)] -translate-x-[20px]  right-0 mr-[20px] duration-[300ms]  opacity-0 group-hover:opacity-100  group-hover:translate-x-0   ">
              <svg className="fill-white w-8 h-4">
                <use href="/pizza/assets/sprite.svg#icon-arrow" />
              </svg>
            </div>
          </button>
        </div>
      </Container>
    </header>
  );
};
