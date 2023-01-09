import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartProvider from "./context/CartContext";
import Cart from "./components/Cart";
import Error404 from "./components/Error404";
import Footer from "./components/Footer";
import ItemDetail from "./components/Items/ItemDetail";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import ItemListContainer from "./components/Items/ItemListContainer";
import NavBar from "./components/NavBar";
import Productos from "./components/Productos";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import { Flowbite } from "flowbite-react";
import GeneratedOrder from "./components/GeneratedOrder";
import Contactanos from "./components/Contactanos";
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        {/* <Home /> */}
        <Routes>
          {/* Para esta ruta le vamos a definir "productos por ejemplo" */}
          <Route path={"/"} element={<Home />} />
          <Route path={"/listaproductos"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          {/* Ruta para poder usar el Location / aria current */}
          <Route path={"/category/:id"} element={<NavBar />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"*"} element={<Error404 />} />
          <Route path={"/productos"} element={<Productos />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/contactanos"} element={<Contactanos />} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"/ordengenerada"} element={<GeneratedOrder />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
