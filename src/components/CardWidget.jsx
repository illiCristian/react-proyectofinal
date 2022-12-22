import React from "react";
import { useContext } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CardWidget = ({ cantidad }) => {
  const { cartTotal } = useContext(CartContext);
  return (
    <div className="m-4 flex">
      <button className="mx-2 mt-1 text-2xl transition-all duration-500 dark:text-white dark:hover:text-orange-800">
        <Link to={"/cart"}>
          {" "}
          <HiShoppingCart />{" "}
        </Link>
      </button>
      <p className="text-2xl font-bold text-black transition-all duration-500 dark:text-gray-300">
        <strong>{cartTotal()}</strong>{" "}
      </p>
    </div>
  );
};

export default CardWidget;
