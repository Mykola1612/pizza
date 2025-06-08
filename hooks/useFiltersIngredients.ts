import { Ingredient } from "@prisma/client";
import { useEffect, useState } from "react";
import { Api } from "../services/api-client";

interface ReturnProps {
  ingredients: Ingredient[];
}

export const useFiltersIngredients = (): ReturnProps => {
  const [ingredients, setItemsIngradients] = useState<Ingredient[]>([]);
  useEffect(() => {
    async function feachIngredients() {
      try {
        const ingredients = await Api.ingredients.getAllIngredients();
        setItemsIngradients(ingredients);
      } catch (error) {
        console.log(error);
      }
    }

    feachIngredients();
  }, []);
  return { ingredients };
};
