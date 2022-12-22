import React from "react";
import Item from "./Item";

const ItemList = ({ listaProductos }) => {
  return (
    <div className="mt-2 flex min-h-screen justify-center bg-orange-300 py-20 transition-all duration-500 dark:bg-gray-800">
      <div className="gap-5 space-y-4 transition-all duration-500 dark:bg-slate-800 md:grid md:grid-cols-2 md:space-y-0 md:px-4 lg:grid-cols-3">
        {listaProductos.map((el) => (
          <Item
            key={el.id}
            name={el.name}
            id={el.id}
            description={el.description}
            price={el.price}
            url={el.url}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
