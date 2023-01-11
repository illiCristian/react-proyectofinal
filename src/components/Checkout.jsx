import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import GeneratedOrder from "./GeneratedOrder";

const Checkout = () => {
  const { cart, sumTotal, clearCart } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [orderId, setOrderId] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const fecha = new Date();
    const order = {
      buyer: {
        name: nombre,
        email: email,
        phone: telefono,
        addres: direccion,
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
    clearCart();
  };
  const classTw =
    "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500";

  return (
    <div>
      <form
        onSubmit={handleClick}
        className="mt-1 mb-1 bg-slate-200 p-8 dark:bg-gray-800">
        <div className=" mb-6 grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Nombre completo
            </label>
            <input
              type="text"
              id="first_name"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className={classTw}
              placeholder="Juan"
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
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              type="tel"
              id="phone"
              className={classTw}
              placeholder="11-1122-3344"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="direccion"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Direccion
          </label>
          <input
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            type="text"
            id="direccion"
            className={classTw}
            placeholder="Av Siempre Viva 123"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Email address
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            className={classTw}
            placeholder="juan.doe@gmail.com"
            required
          />
        </div>
        <button type="submit" className={classTw}>
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
    </div>
  );
};

export default Checkout;
