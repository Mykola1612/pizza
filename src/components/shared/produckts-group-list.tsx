"use client";
import React, { useEffect, useRef } from "react";
import { ProductCard } from "./product-card";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/store/category";

interface Props {
  title: string;
  items: any[];
  categoryId: number;
}

export const ProducktsGroupList: React.FC<Props> = ({
  title,
  items,
  categoryId,
}) => {
  const setCateoryActiveId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = useRef<HTMLDivElement>(null);
  const intersection = useIntersection(
    intersectionRef as React.RefObject<HTMLElement>,
    {
      threshold: 0.2,
    }
  );

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setCateoryActiveId(categoryId);
    }
  }, [intersection, categoryId]);

  return (
    <div id={title} ref={intersectionRef}>
      <h2 className="font-semibold text-[36px] my-[32px]">{title}</h2>
      <ul className="grid grid-cols-3 gap-[50px]">
        {items.map((item) => (
          <li key={item.id}>
            <ProductCard
              id={item.id}
              name={item.name}
              imageUrl={item.imageURL}
              price={item.productVariations[0].price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
