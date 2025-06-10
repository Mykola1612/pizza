"use client";
import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Props {
  className: string;
  children?: ReactNode;
}

export const Modal: React.FC<Props> = ({ className, children }) => {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 w-screen h-screen  z-[1000] "
      onClick={() => {
        router.back();
      }}
    >
      <div
        className={` absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]  bg-white rounded-[30px]  ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button
          type="button"
          className="absolute right-[-60px] top-0"
          onClick={() => {
            router.back();
          }}
        >
          <svg className="fill-white w-[30px] h-[30px]">
            <use href="/pizza/assets/sprite.svg#icon-close" />
          </svg>
        </button>
      </div>
    </div>
  );
};
