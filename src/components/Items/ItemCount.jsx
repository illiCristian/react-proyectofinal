import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IconIncrease from "../Icons/IconIncrease";
import IconDecrease from "../Icons/IconDecrease";
import Swal from "sweetalert2";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [itemStock, setItemStock] = useState(stock);
  const [vendido, setVendido] = useState(false);

  const increase = () => count < itemStock && setCount(count + 1);
  const decrease = () => count > initial && setCount(count - 1);
  const clases =
    "flex h-8 w-8 cursor-pointer items-center justify-center border-[1.5px] border-gray-400 text-center hover:scale-105 hover:bg-slate-400 dark:text-gray-400";
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
    <div className="m-1 flex items-center justify-between gap-3 p-2 sm:justify-evenly">
      <div className="mt-4 flex rounded border-slate-700 ">
        <div className={clases}>
          <button onClick={decrease}>
            <IconDecrease />
          </button>
        </div>
        <div className={clases}>
          <span>{count}</span>
        </div>
        <div className={clases}>
          <button onClick={increase}>
            <IconIncrease />
          </button>
        </div>
        <div className="ml-3 flex items-center justify-center ">
          <h2 className=" font-semibold dark:text-gray-400">Stock: {stock} </h2>
        </div>
      </div>
      {vendido ? (
        <>
          <Link to={"/cart"}>
            <button className=" rounded-xl bg-black py-2 text-sm text-white shadow-lg hover:bg-slate-400 sm:w-32">
              Terminar Compra{" "}
            </button>{" "}
          </Link>

          <Link to={"/listaproductos"}>
            <button className=" rounded-xl bg-black py-2 text-sm text-white shadow-lg hover:bg-slate-400 sm:w-32">
              Seguir Comprando{" "}
            </button>{" "}
          </Link>
        </>
      ) : (
        <button
          onClick={() => {
            addToCart(count),
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Agregado al carrito!!",
                showConfirmButton: false,
                timer: 1500,
              });
          }}
          className="mt-4 w-32 rounded-xl bg-black p-4 py-2 text-sm text-white shadow-lg hover:bg-slate-500 dark:bg-slate-300 dark:text-black dark:hover:bg-slate-300 sm:w-48">
          Agregar al carrito{" "}
        </button>
      )}
    </div>
  );
};
export default ItemCount;
