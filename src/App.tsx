import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./views/Home/Home";
import "./App.css";
import Footer from "./layout/Footer";
import Shop from "./views/Shop/Shop";
import Product from "./views/Product/Product";
import NoMatch from "./views/NoMatch/NoMatch";
import Navbar from "./layout/Navbar";
import Cart from "./views/Cart/Cart";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default App;

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
