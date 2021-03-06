import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);

  return (
    <>
      <h2 className="title">¬°GIFExpert!</h2>
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category) => (
          <GifGrid 
            key={category}
            category={category}
            />
        ))}
      </ol>
    </>
  );
};
