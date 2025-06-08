import React from "react";
import { Categories, Container, SortPopup } from "./index";

export const TopBar = ({ categories }) => {
  return (
    <div className="sticky top-0 bg-white py-5 shadow-black/5 shadow-lg z-10 ">
      <Container className="flex justify-between items-center">
        <Categories categoriesItems={categories} />
        <SortPopup />
      </Container>
    </div>
  );
};
