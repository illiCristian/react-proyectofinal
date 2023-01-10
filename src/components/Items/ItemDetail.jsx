import ItemCount from "./ItemCount";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

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
    <div>
      <div className="relative flex min-h-screen min-w-full items-start overflow-hidden bg-slate-200 p-5 dark:bg-gray-800 lg:p-10 ">
        <div className="relative mx-auto h-full w-full max-w-6xl rounded bg-white p-10 text-gray-800 shadow-xl dark:bg-slate-500 md:text-left lg:p-20">
          <div className="-mx-10 items-center sm:flex">
            <div className="mb-4 w-48 px-10 sm:mb-10 sm:w-96 md:mb-0 md:w-1/2">
              <div className="relative">
                <img src={item.url} className="relative z-10 w-full " />
                <div className="absolute top-10 bottom-10 left-10 right-10 z-0 border-4 border-yellow-200"></div>
              </div>
            </div>
            <div className="w-full px-10 md:w-1/2">
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
    </div>
  );
};

export default ItemDetail;
