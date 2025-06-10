import { Value } from "@radix-ui/themes/components/data-list";

const mapPizzaSize = {
  20: "Маленькая",
  30: "Среднея",
  40: "Большая",
} as const;

const mapPizzaVariations = {
  1: "традиционное",
  2: "тонкое",
} as const;

export const pizzaSizes = Object.entries(mapPizzaSize).map(([value, name]) => ({
  name,
  value,
}));

export const pizzaVariations = Object.entries(mapPizzaVariations).map(
  ([value, name]) => ({
    name,
    value,
  })
);

export type PizzaSize = keyof typeof mapPizzaSize;
export type PizzaVariation = keyof typeof mapPizzaVariations;
