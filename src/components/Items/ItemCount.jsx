import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [itemStock, setItemStock] = useState(stock);
  const [vendido, setVendido] = useState(false);

  const increase = () => count < itemStock && setCount(count + 1);
  const decrease = () => count > initial && setCount(count - 1);
  const clases =
    "flex h-10 w-10 cursor-pointer items-center justify-center border-2 border-gray-800 text-center hover:scale-105 hover:bg-slate-400";
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
        <>
          <Link to={"/cart"}>
            <button className="mt-4 w-full rounded-xl bg-black py-2 text-xl text-white shadow-lg hover:bg-slate-400">
              Terminar Compra{" "}
            </button>{" "}
          </Link>

          <Link to={"/listaproductos"}>
            <button className="mt-4 w-full rounded-xl bg-black py-2 text-xl text-white shadow-lg hover:bg-slate-400">
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
          className="mt-4 w-auto rounded-xl bg-black p-4 py-2 text-xl text-white shadow-lg hover:bg-slate-500 dark:bg-slate-300 dark:text-black dark:hover:bg-slate-300">
          Agregar al carrito{" "}
        </button>
      )}
      <div className="container mt-4 flex flex-row rounded border-slate-700  ">
        <div className={clases}>
          <button onClick={decrease}>-</button>
        </div>
        <div className={clases}>
          <span>{count}</span>
        </div>
        <div className={clases}>
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
