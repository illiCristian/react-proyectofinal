import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Table from "./Table";
import { Link } from "react-router-dom";
const Cart = () => {
  const { vaciarCarrito, sumTotal } = useContext(CartContext);
  return (
    <div>
      <div className="bg-slate-200 p-5 shadow-sm dark:bg-gray-800">
        <Table />
      </div>
      <div className="mt-1 flex justify-around dark:bg-gray-800">
        <button
          onClick={vaciarCarrito}
          type="button"
          className=" mt-1 mr-2 mb-2 rounded-lg border border-gray-200 bg-gray-400 py-2.5 px-5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
          Vaciar Carrito
        </button>
        <h2 className="mt-1 justify-end text-2xl dark:text-gray-200">
          Total productos (IVA incl.) :$ {sumTotal()}
        </h2>
      </div>
      <div className="mt-1 flex justify-center text-2xl dark:bg-slate-800">
        <Link to="/checkout">
          <button className="mt-1 mr-2 mb-2 rounded-lg border border-gray-200 bg-gray-400 py-2.5 px-5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
            COMPRAR
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
