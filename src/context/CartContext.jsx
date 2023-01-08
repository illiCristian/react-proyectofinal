import { useContext, useState, createContext, useEffect } from "react";

/* Creamos el contexto */
export const CartContext = createContext([]);

// export const useCartContext = () => useContext(CartContext);

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
  useEffect(() => {
    setCart(cart);
  }, [cart]);
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

/* 
const [cart, setCart] = useState([]);
   const clearCart = () => setCart([]);
  const isInCart = (id) => {
    return cart.find((el) => el.id === id) ? true : false;
  };
  const removeProduct = (id) => {
    return setCart(cart.filter((el) => el.id !== id));
  }; 
     const addProduct = () => {
     const newCart = cart.filter((el) => el.id !== item.id);
    newCart.push({ ...item, quantity: newQuantity });
    setCart(newCart); 
    console.log("Hola!!");
  }; 
  const saludar = () => {
    console.log("hola mundo2");
  }; */
