import React from "react";
import { ActionTypes, useCart } from "../../context/cart-context";

interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  total: string;
  quantity: number;
}

const ItemsInCart = ({ cart }: { cart: Array<any> }) => {
  const { dispatch } = useCart();

  const shortenTitleLength = (str: string) => {
    if (str.length > 22) {
      return str.slice(0, 19) + "...";
    }
    return str;
  };

  const updateQuantity = (prod: IProduct) => {
    dispatch({
      type: ActionTypes.INCQUANTITY,
      payload: {
        quantity: 1,
        id: prod.id,
      },
    });
  };

  return (
    <section className="section">
      <div className="block">
        <h1 className="title">Shopping Cart</h1>
        <div
          className="py-4 is-size-7-mobile columns is-mobile"
          style={{ backgroundColor: "whitesmoke" }}
        >
          <span className="column ">PRODUCT DETAILS</span>
          <span className="column">PRICE</span>
          <span className="column">QUANTITY</span>
          <span className="column">TOTAL</span>
          <span className="column">REMOVE</span>
        </div>
      </div>
      {cart.map((item) => (
        <div className="block" key={item.id}>
          <div
            className="py-4 is-size-7-mobile columns is-mobile  is-vcentered"
            style={{ borderBottom: "1px solid whitesmoke" }}
          >
            <div className="column is-clickable">
              <div className="image is-128x128 is-hidden-mobile">
                <img
                  src={item.image}
                  alt={`${item.id}`}
                  style={{
                    width: "auto",
                    height: "auto",
                    maxHeight: "100%",
                  }}
                />
              </div>
              <div className="is-flex is-flex-direction-column mt-4">
                <p className="has-text-black">
                  {shortenTitleLength(item.title)}
                </p>
              </div>
            </div>

            <span className="column has-text-weight-semibold">
              ${Number(item.price).toFixed(2)}
            </span>
            <div className="column">
              <span className="column">{item.quantity}</span>
            </div>
            <span className="column has-text-weight-semibold">
              ${Number(item.total).toFixed(2)}
            </span>
            <div className="column">
              <button className="delete is-large is-responsive"></button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ItemsInCart;
