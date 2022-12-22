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
          className="mt-4 w-full rounded-xl bg-indigo-600 py-2 text-xl text-white shadow-lg hover:bg-orange-200">
          Agregar al carrito{" "}
        </button>
      )}
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

export default ItemCount;
