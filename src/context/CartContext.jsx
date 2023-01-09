import { useState, createContext, useEffect } from "react";

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
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
