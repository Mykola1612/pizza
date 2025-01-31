"use client";
import React, { useEffect, useRef } from "react";
import { ProductCard } from "./product-card";
import { useIntersection } from "react-use";

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
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.2,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      console.log(title, categoryId);
    }
  }, [intersectionRef, intersection, categoryId, title]);

  return (
    <div id={title} ref={intersectionRef}>
      <h2 className="font-semibold text-[36px] my-[32px]">{title}</h2>
      <ul className="grid grid-cols-3 gap-[50px]">
        {items.map((item) => (
          <li key={item.id}>
            <ProductCard
              id={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              price={item.items[0].price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
