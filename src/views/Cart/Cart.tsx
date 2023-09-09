import React from "react";
import { useCart } from "../../context/cart-context";
import EmptyCart from "../../modules/cart/EmptyCart";
import ItemsInCart from "../../modules/cart/ItemsInCart";

function Cart() {
  const { state } = useCart();

  return (
    <main>
      {state.cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <ItemsInCart cart={state.cart} />
      )}
    </main>
  );
}

export default Cart;
