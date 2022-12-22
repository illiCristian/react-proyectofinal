import { IoIosTrash } from "react-icons/io";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const Cart = () => {
  const { cart } = useContext(CartContext);
  const { removeProduct } = useContext(CartContext);
  const { sumTotal } = useContext(CartContext);
  const { clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="text-danger border-red-800 text-center text-4xl font-bold text-red-700">
        EL carrito esta vacio
      </div>
    );
  }
  return (
    <div>
      <header className="bg-white py-4 shadow-sm">
        <div className="container flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="hover:text-primary relative text-center text-gray-700 transition">
              <div className="text-2xl">
                <i className="fa-regular fa-heart"></i>
              </div>
              <div className="text-xs leading-3">Wishlist</div>
              <div className="bg-primary absolute right-0 -top-1 flex h-5 w-5 items-center justify-center rounded-full text-xs text-white">
                8
              </div>
            </a>
            <a
              href="#"
              className="hover:text-primary relative text-center text-gray-700 transition">
              <div className="text-2xl">
                <i className="fa-solid fa-bag-shopping"></i>
              </div>
              <div className="text-xs leading-3">Cart</div>
              <div className="bg-primary absolute -right-3 -top-1 flex h-5 w-5 items-center justify-center rounded-full text-xs text-white">
                2
              </div>
            </a>
            <a
              href="#"
              className="hover:text-primary relative text-center text-gray-700 transition">
              <div className="text-2xl">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text-xs leading-3">Account</div>
            </a>
          </div>
        </div>
      </header>

      <div className="container flex items-center gap-3 py-4">
        <a href="../index.html" className="text-primary text-base">
          <i className="fa-solid fa-house"></i>
        </a>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="font-medium text-gray-600">Checkout</p>
      </div>

      <div className="container grid grid-cols-12 items-start gap-6 pb-16 pt-4">
        <div className="col-span-8 rounded border border-gray-200 p-4">
          <h3 className="mb-4 text-lg font-medium capitalize">Checkout</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="first-name" className="text-gray-600">
                  First Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="input-box"></input>
              </div>
              <div>
                <label htmlFor="last-name" className="text-gray-600">
                  Last Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  className="input-box"></input>
              </div>
            </div>
            <div>
              <label htmlFor="company" className="text-gray-600">
                Company
              </label>
              <input
                type="text"
                name="company"
                id="company"
                className="input-box"></input>
            </div>
            <div>
              <label htmlFor="region" className="text-gray-600">
                Country/Region
              </label>
              <input
                type="text"
                name="region"
                id="region"
                className="input-box"></input>
            </div>
            <div>
              <label htmlFor="address" className="text-gray-600">
                Street address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="input-box"></input>
            </div>
            <div>
              <label htmlFor="city" className="text-gray-600">
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                className="input-box"></input>
            </div>
            <div>
              <label htmlFor="phone" className="text-gray-600">
                Phone number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="input-box"></input>
            </div>
            <div>
              <label htmlFor="email" className="text-gray-600">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="input-box"></input>
            </div>
            <div>
              <label htmlFor="company" className="text-gray-600">
                Company
              </label>
              <input
                type="text"
                name="company"
                id="company"
                className="input-box"></input>
            </div>
          </div>
        </div>

        <div className="col-span-4 rounded border border-gray-200 p-4">
          <h4 className="mb-4 text-lg font-medium uppercase text-gray-800">
            order summary
          </h4>
          <div className="space-y-2">
            {cart.map((el) => (
              <div key={el.id} className="flex justify-between">
                <div key={el.id} className="border-b-8">
                  <h5 className="font-medium text-gray-800">{el.name}</h5>
                  <p className="text-sm text-gray-600">
                    Descripcion: {el.description}
                  </p>

                  <p className="text-gray-600">Cantidad: {el.quantity}</p>
                  <p className="font-medium text-gray-800">
                    Precio Unidad ${el.price}
                  </p>
                  <p className="font-medium text-gray-800">
                    SubTotal ${el.price * el.quantity}
                  </p>
                  <button onClick={() => removeProduct(el.id)}>
                    <IoIosTrash /> Remover Producto
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="uppercas mt-1 flex justify-between border-b border-gray-200 py-3 font-medium text-gray-800">
            <p>subtotal</p>
            <p>$1280</p>
          </div>

          <div className="uppercas mt-1 flex justify-between border-b border-gray-200 py-3 font-medium text-gray-800">
            <p>shipping</p>
            <p>Free</p>
          </div>

          <div className="uppercas flex justify-between py-3 font-medium text-gray-800">
            <p className="font-semibold">Total</p>
            <p>${sumTotal()}</p>
          </div>
          <button
            onClick={clearCart}
            className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800">
            <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
              Vaciar Carrito
            </span>
          </button>
          <div className="mb-4 mt-2 flex items-center">
            <input
              type="checkbox"
              name="aggrement"
              id="aggrement"
              className="text-primary h-3 w-3 cursor-pointer rounded-sm focus:ring-0"></input>
            <label
              htmlFor="aggrement"
              className="ml-3 cursor-pointer text-sm text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-primary">
                terms & conditions
              </a>
            </label>
          </div>

          <a
            href="#"
            className="bg-primary border-primary hover:text-primary block w-full rounded-md border py-3 px-4 text-center font-medium text-white transition hover:bg-transparent">
            Place order
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
