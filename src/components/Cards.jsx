import React, { useEffect } from "react";
import { useState } from "react";

import Card from "./Card";
const products = [
  {
    id: 1,
    title: "Product 1",
    description: "Description for the product",
    price: "Free",
    stock: 10,
  },
  {
    id: 2,
    title: "Product 2",
    description: "Description for the product",
    price: "Free",
    stock: 10,
  },
  {
    id: 3,
    title: "Product 3",
    description: "Description for the product",
    price: "Free",
    stock: 10,
  },
  {
    id: 4,
    title: "Product 4",
    description: "Description for the product",
    price: "Free",
    stock: 10,
  },
];
export const Cards = () => {
  const initial = 1;
  const [nuevoStock, setNuevoStock] = useState(initial);

  return (
    <main className="mt-2 flex min-h-screen justify-center bg-orange-300 py-20 transition-all duration-500 dark:bg-gray-800">
      <div className="gap-5 space-y-4 transition-all duration-500 dark:bg-slate-800 md:grid md:grid-cols-2 md:space-y-0 md:px-4 lg:grid-cols-3">
        {products.map((el) => (
          <Card stock={el.stock} key={el.id} initial={initial} />
        ))}
      </div>
    </main>
  );
};
