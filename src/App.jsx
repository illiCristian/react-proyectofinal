import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartProvider from "./context/CartContext";
import Cart from "./components/Cart";
import Error404 from "./components/Error404";
import Footer from "./components/Footer";
import ItemDetail from "./components/Items/ItemDetail";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import ItemListContainer from "./components/Items/ItemListContainer";
import NavBar2 from "./components/NavBar";
import Productos from "./components/Productos";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import { Flowbite } from "flowbite-react";
import GeneratedOrder from "./components/GeneratedOrder";
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar2 cantidad={2} />
        <Home />
        <Routes>
          {/* Para esta ruta le vamos a definir "productos por ejemplo" */}
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"*"} element={<Error404 />} />
          <Route path={"/productos"} element={<Productos />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"/ordengenerada"} element={<GeneratedOrder />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
