import { Trash } from "heroicons-react";
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import IconDecrease from "./Icons/IconDecrease";
import IconIncrease from "./Icons/IconIncrease";
const Table = () => {
  const { cart, increase, decrease, removeProduct } = useContext(CartContext);
  const classTw =
    "inline-flex items-center rounded-full border border-gray-600 bg-white p-1 text-sm font-medium text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700";
  return (
    <>
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr className="border-b-2">
              <th scope="col" className="px-6 py-3 ">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Producto
              </th>
              <th scope="col" className="px-6 py-3">
                Cantidad
              </th>
              <th scope="col" className="px-6 py-3">
                Precio Unitario
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((el) => (
              <tr
                key={el.id}
                className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                <td className="w-32 p-4">
                  <img src={el.url} alt="Apple Watch" />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {el.name}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => decrease(1, el)}
                      className={classTw}
                      type="button">
                      <span className="sr-only">Quantity button</span>
                      <IconDecrease />
                    </button>
                    <div>
                      <input
                        type="number"
                        id="first_product"
                        className="block w-16 rounded-lg border border-gray-800 bg-gray-100 px-2.5 py-1 text-center text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        placeholder={el.quantity}
                      />
                    </div>
                    <button
                      onClick={() => increase(1, el)}
                      className={classTw}
                      type="button">
                      <span className="sr-only">Quantity button</span>
                      <IconIncrease />
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  $ {el.price}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => removeProduct(el.id)}
                    className="font-medium text-red-600 hover:underline dark:text-red-500">
                    <Trash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
