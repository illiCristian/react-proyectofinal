import React from "react";
import { useState } from "react";
import Carousel from "./Carousel";
import Galeria from "./Galeria";
import ItemListContainer from "./Items/ItemListContainer";
const Home = () => {
  const [estado, setEstado] = useState(true);
  const clases =
    "py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-slate-200 rounded-lg border border-gray-200 hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-400 dark:text-black dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 overflow-hidden ";
  return (
    <>
      <Carousel />
      <Galeria />
      <div className="mt-1 mb-1 h-auto p-4 text-center dark:bg-gray-800">
        {estado ? (
          <>
            <button className={clases} onClick={() => setEstado(!estado)}>
              {" "}
              Ocultar Productos
            </button>
            <ItemListContainer />
          </>
        ) : (
          <button className={clases} onClick={() => setEstado(!estado)}>
            Ver Productos{" "}
          </button>
        )}
      </div>
    </>
  );
};

export default Home;
