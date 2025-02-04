"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Api } from "../../../services/api-client";

export const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setProducts([]);
      return;
    }
    Api.products.search(searchQuery).then((items) => {
      setProducts(items);
    });
  }, [searchQuery]);

  return (
    <>
      {focused && (
        <div
          onClick={() => setFocused(false)}
          className="fixed z-30 top-0 left-0 bottom-0 right-0 bg-black/50"
        ></div>
      )}
      <div className="flex flex-1 justify-center items-center  relative z-30">
        <input
          type="text"
          className="bg-[#f9f9f9] rounded-[15px] w-full h-[50px] outline-none pl-[48px]"
          placeholder="Поиск пиццы..."
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <svg className="w-4 h-4 absolute top-[50%] left-3 translate-y-[-50%] ">
          <use href="/pizza/assets/sprite.svg#icon-Search" />
        </svg>

        <div
          className={`w-full absolute bg-white rounded-[15px] py-2  shadow-md transition-all duration-200  z-30 ${
            focused
              ? "visible opacity-100 top-14"
              : " invisible opacity-0 top-16"
          }`}
        >
          {products.length === 0 ? (
            <div className="px-3 py-2">You need write text</div>
          ) : (
            <ul>
              {products.length > 0 &&
                products.map((product) => (
                  <li key={product.id}>
                    <Link
                      href={`/product/${product.id}`}
                      className="px-3 py-2 hover:bg-primary/10 cursor-pointer items-center gap-3 flex "
                    >
                      <img
                        src={product.imageURL}
                        alt={product.name}
                        width={32}
                        height={32}
                      />
                      <div>{product.name}</div>
                    </Link>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
