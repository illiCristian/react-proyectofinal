import {
  addDoc,
  doc,
  collection,
  getFirestore,
  updateDoc,
  writeBatch,
  getDocs,
} from "firebase/firestore";
import { Alert } from "flowbite-react";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import GeneratedOrder from "./GeneratedOrder";
const Checkout = () => {
  const { cart, sumTotal, clearCart } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [orderId, setOrderId] = useState("");

  const handleClick = () => {
    const fecha = new Date();
    const order = {
      buyer: {
        name: nombre,
        email: email,
        phone: telefono,
        addres: "siempre viva 12345",
      },
      items: cart.map((el) => ({
        id: el.id,
        name: el.name,
        price: el.price,
        quantity: el.quantity,
      })),
      totalPrice: sumTotal(),
      order_date: `${fecha.getFullYear()}-${
        fecha.getMonth() + 1
      }-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`,
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((orderId) => setOrderId(orderId.id));
    /* const batch = writeBatch(db);
    const updateOrder = doc(db, "orders", orderId.id);
    batch.update(updateOrder, { stock: stock - el.quantity });
    batch.commit(); */
    clearCart();
  };

  return (
    <>
      <form className="m-10 dark:bg-gray-800">
        <div className=" mb-6 grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Nombre completo
            </label>
            <input
              onInput={(e) => setNombre(e.target.value)}
              type="text"
              id="first_name"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="John"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Telefono
            </label>
            <input
              onInput={(e) => setTelefono(e.target.value)}
              type="tel"
              id="phone"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="11-1122-3344"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Email address
          </label>
          <input
            onInput={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="john.doe@company.com"
            required
          />
        </div>

        <button
          onClick={handleClick}
          type="button"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto">
          Generar orden de compra
        </button>
      </form>
      <div>
        {orderId !== "" ? (
          <Link to={"/ordengenerada"}>
            {" "}
            <GeneratedOrder orderId={orderId} />{" "}
          </Link>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Checkout;
