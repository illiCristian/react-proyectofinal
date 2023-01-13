import ItemCount from "./ItemCount";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { Card } from "flowbite-react";
import { StarIcon } from "@heroicons/react/24/outline";
import StartIcon from "../Icons/StartIcon";

const ItemDetail = ({ item }) => {
  const [itemStock, setItemStock] = useState(0);
  const { addProduct, cart } = useContext(CartContext);
  const [goToCart, setGoToCart] = useState(false);
  const onAdd = (quantity) => {
    setItemStock(itemStock - quantity);
    addProduct(item, quantity);
  };
  useEffect(() => {
    setItemStock(item.stock);
  }, [item]);

  return (
    <div className="grid w-full justify-center shadow-xl dark:bg-slate-700">
      <div>
        <div className="m-4 max-w-sm rounded-lg bg-slate-300 p-2 shadow-md transition-all duration-500 dark:border-gray-700 dark:bg-gray-800 sm:grid sm:max-w-2xl sm:grid-cols-2">
          <h5 className="text-center text-2xl font-semibold tracking-tight text-gray-900 dark:text-white sm:col-span-2">
            {item.name}
          </h5>
          <img
            className="rounded-t-lg p-2 sm:p-8"
            src={item.url}
            alt="product image"
          />

          <div className="p-2 px-5 sm:relative sm:mt-10">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {item.description}
            </h5>
            <div className="mt-2.5 mb-5 flex items-center sm:absolute sm:bottom-16">
              <StartIcon />
              <StartIcon />
              <StartIcon />
              <StartIcon />
              <StartIcon />
              <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                5.0
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white sm:absolute sm:bottom-10">
                Precio: ${item.price}
              </span>
            </div>
          </div>
          <div className="sm:col-span-2">
            {goToCart ? (
              <Link to={"/cart"}> Terminar la compra</Link>
            ) : (
              <ItemCount stock={10} initial={1} onAdd={onAdd} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

/* 
<div>
      <div className="relative min-h-screen min-w-full items-start overflow-hidden bg-slate-200 p-1 dark:bg-gray-800 sm:p-5 lg:p-10 ">
        <div className="relative mx-auto h-full w-full max-w-6xl rounded bg-white p-2 text-gray-800 shadow-xl dark:bg-slate-500 sm:p-5 md:text-left lg:p-20">
          <div className="sm: relative m-1 flex w-full items-center ">
            <div className=" mb-1 w-48 sm:mb-10 sm:w-96 sm:px-10 md:mb-0 md:w-1/2">
              <div className="relative">
                <img src={item.url} className="relative z-10 w-full " />
      
                </div>
                </div>
                <div>
                  
                </div>
                <div className="w-6/12 px-10 sm:w-full md:w-1/2">
                  <div className="mb-10">
                    <h1 className="mb-5 text-2xl font-bold uppercase">
                      {item.name}
                    </h1>
                    <p className="text-sm">{item.description} </p>
                  </div>
                  <div>
                    <div className="mr-5 inline-block align-bottom">
                      <span className="align-baseline text-2xl leading-none">
                        $
                      </span>
                      <span className="align-baseline text-5xl font-bold leading-none">
                        {item.price}
                      </span>
                      <span className="align-baseline text-2xl leading-none">
                        .99
                      </span>
                    </div>
                    <div>
                      {goToCart ? (
                        <Link to={"/cart"}> Terminar la compra</Link>
                      ) : (
                        <ItemCount stock={10} initial={1} onAdd={onAdd} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */
