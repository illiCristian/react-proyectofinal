import { IoIosTrash } from "react-icons/io";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Form from "./Form";
import Table from "./Table";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart } = useContext(CartContext);
  const { removeProduct } = useContext(CartContext);
  const { sumTotal } = useContext(CartContext);
  const { clearCart } = useContext(CartContext);
  const { vaciarCarrito } = useContext(CartContext);
  /*  const order = {
    buyer: {
      name: "Cristian",
      email: "slasd@gmail.com",
      phone: "1122334455",
      addres: "siempre viva 1234",
    },
    items: cart.map((el) => ({
      id: el.id,
      name: el.name,
      price: el.price,
      quantity: el.quantity,
    })),
    totalPrice: sumTotal(),
  }; */
  // const handleClick = () => {
  //   const db = getFirestore(); //traemos el firestore
  //   const ordersCollection = collection(db, "orders"); // le pasamos la referencia y la coleccion
  //   /* con addDoc le estamos diciendo que guarde el objeto order en la coleccion "ordersCollection" */
  //   addDoc(ordersCollection, order) //addDoc es una promesa, hacemos un post con addoc, agregamos el objeto "order"
  //     .then(({ id }) => console.log(id));
  // };
  /*  if (cart.length === 0) {
    return (
      <div className="text-danger border-red-800 text-center text-4xl font-bold text-red-700">
        EL carrito esta vacio
      </div>
    );
  } */
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
