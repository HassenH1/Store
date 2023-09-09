import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LOGO from "../assets/images/THE.png";
import "../App.css";
import { useCart } from "../context/cart-context";

function Navbar() {
  const { state } = useCart();
  const [isActive, setisActive] = useState(false);

  const activeStlye = (isActive: boolean) => {
    return {
      display: "block",
      margin: "1rem 0",
      borderBottom: isActive ? "3px solid pink" : "",
    };
  };

  return (
    <header
      className="navbar container is-max-desktop"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={LOGO} alt="logo" className="" />
        </a>

        <div
          onClick={() => {
            setisActive(!isActive);
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <nav
        id="navbarBasicExample"
        className={`navbar-menu ${isActive && "is-active"}`}
      >
        <div className="navbar-end">
          <NavLink
            to="/"
            className="navbar-item"
            style={({ isActive }) => activeStlye(isActive)}
          >
            <strong>Home</strong>
          </NavLink>
          <NavLink
            to="/shop"
            className="navbar-item"
            style={({ isActive }) => activeStlye(isActive)}
          >
            <strong>Shop</strong>
          </NavLink>
          <NavLink
            to="/cart"
            className="navbar-item"
            style={({ isActive }) => activeStlye(isActive)}
          >
            <strong>
              Cart
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              <span className="has-text-success	">
                {" "}
                {state.cart.length > 0 && state.cart.length}
              </span>
            </strong>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
