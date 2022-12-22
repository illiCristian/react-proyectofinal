import { useState } from "react";

const Card = ({ stock, initial, id }) => {
  const [count, setCount] = useState(initial);
  const increase = () => count < stock && setCount(count + 1);
  const decrease = () => count > initial && setCount(count - 1);
  return (
    <div
      key={id}
      className="max-w-sm transform rounded-xl bg-white px-6 pt-6 pb-2 shadow-lg transition duration-500 hover:scale-105 dark:bg-slate-400">
      <h3 className="mb-3 text-xl font-bold text-indigo-600">Articulo 1</h3>
      <img
        src="https://placeimg.com/200/200/animals"
        className="w-full rounded-xl"
      />
      <h1 className="text-center font-bold">Item 1</h1>
      <p className="mt-4 cursor-pointer text-2xl font-bold text-gray-800">
        {" "}
        Compra este hermoso item{" "}
      </p>
      <button className="mt-4 w-full rounded-xl bg-indigo-600 py-2 text-xl text-white shadow-lg hover:bg-orange-200">
        Agregar al carrito{" "}
      </button>
      <div className="flex text-center">
        <button onClick={increase} className="mt-4 hover:bg-white">
          +
        </button>
        <span className="mt-4 pl-4">Cantidad : {count} unidades</span>
        <button
          onClick={decrease}
          className="mt-4 items-center pl-4 hover:bg-white">
          -
        </button>
      </div>
    </div>
  );
};

export default Card;
