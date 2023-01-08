// Aca va el boton con el contador
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [itemStock, setItemStock] = useState(stock);
  const [vendido, setVendido] = useState(false);

  const increase = () => count < itemStock && setCount(count + 1);
  const decrease = () => count > initial && setCount(count - 1);

  const addToCart = (quantity) => {
    if (count <= itemStock) {
      setCount(1);
      setItemStock(itemStock - quantity);
      setVendido(true);
      onAdd(quantity);
    }
  };
  useEffect(() => {
    setItemStock(stock);
  }, [stock]);
  return (
    <div>
      {vendido ? (
        <Link to={"/cart"}>
          <button className="mt-4 w-full rounded-xl bg-indigo-600 py-2 text-xl text-white shadow-lg hover:bg-orange-200">
            Terminar mi compra{" "}
          </button>{" "}
          Terminar mi compra
        </Link>
      ) : (
        <button
          onClick={() => {
            addToCart(count);
          }}
          className="mt-4 w-auto rounded-xl bg-indigo-600 p-4 py-2 text-xl text-white shadow-lg hover:bg-slate-500 dark:bg-green-700 dark:hover:bg-slate-300">
          Agregar al carrito{" "}
        </button>
      )}
      <div className="container mt-4 flex flex-row rounded border-slate-700  ">
        <div className="flex h-10 w-10 items-center justify-center border-2 border-gray-800 text-center">
          <button onClick={decrease}>-</button>
        </div>
        <div className="flex h-10 w-10 items-center justify-center  border-2 border-slate-700 text-center ">
          <span>{count}</span>
        </div>
        <div className="flex h-10 w-10 items-center justify-center border-2 border-slate-700 text-center">
          <button onClick={increase}>+</button>
        </div>
        <div className="ml-4 flex items-center justify-center ">
          <h2 className="font-medium text-black">
            Stock Disponible <span>{stock}</span>{" "}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
