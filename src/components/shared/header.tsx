import Image from "next/image";
import { Container } from "./container";
import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-color-[#f6f6f6] border-b-[1px] ">
      <Container className="py-[42px]">
        <div className="flex gap-[15px] items-center">
          <Link href="/">
            <Image
              src="/assets/logo.png"
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
      </Container>
    </header>
  );
};
