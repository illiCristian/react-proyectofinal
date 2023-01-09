import { useState, createContext, useEffect } from "react";
import Swal from "sweetalert2";
export const CartContext = createContext([]);
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const isInCart = (id) => cart.find((el) => el.id === id);
  const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
      let pos = cart.findIndex((x) => x.id === item.id);
      cart[pos].quantity += quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, quantity: quantity }]);
    }
  };
  /* Local storage del carrito */
  useEffect(() => {
    const dataLs = JSON.parse(localStorage.getItem("cart")) ?? [];
    setCart(dataLs);
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeProduct = (id) => setCart(cart.filter((el) => el.id !== id));
  const clearCart = () => setCart([]);
  const vaciarCarrito = () => {
    if (cart.length > 0) {
      Swal.fire({
        title: "¿Desea borrar todo el carrito?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Borrar todo",
      }).then((result) => {
        if (result.isConfirmed) {
          clearCart();
          Swal.fire(
            "Borrado",
            "Los items en el carrito fueron borrados",
            "success"
          );
        }
      });
    }
  };
  const cartTotal = () => {
    return cart.reduce((total, item) => (total += item.quantity), 0);
  };
  const increase = (quantity, item) => {
    if (item.stock > 0) {
      if (isInCart(item.id)) {
        let pos = cart.findIndex((x) => x.id === item.id);
        cart[pos].quantity += quantity;
        setCart([...cart]);
      }
    }
  };
  const decrease = (quantity, item) => {
    if (item.quantity > 1) {
      if (isInCart(item.id)) {
        let pos = cart.findIndex((x) => x.id === item.id);
        cart[pos].quantity -= quantity;
        setCart([...cart]);
      }
    }
  };
  const sumTotal = () => {
    return cart.reduce(
      (total, item) => (total += item.quantity * item.price),
      0
    );
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        clearCart,
        cartTotal,
        sumTotal,
        increase,
        decrease,
        vaciarCarrito,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
