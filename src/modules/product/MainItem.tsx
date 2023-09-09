import React, { useState } from "react";
import { ActionTypes, CartAction, useCart } from "../../context/cart-context";

interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  quantity: number;
  total: string;
}

const MainItem = ({ data }: { data: IProduct }) => {
  const [load, setLoad] = useState(false);
  const { dispatch, state } = useCart();

  //context here....
  if (data) {
    const { description, category, ...rest } = data;
    sessionStorage.setItem(data.id.toString(), JSON.stringify(rest));
  }

  const addToCart = () => {
    setLoad(true);
    data.quantity = 1;
    data.total = data.price;
    const addToCartAction: CartAction = {
      type: ActionTypes.ADD,
      payload: data,
    };
    dispatch(addToCartAction);
    setLoad(false);
  };

  const itemAlreadyInCart = state.cart.filter(
    (prod: IProduct) => prod.id === data.id
  );

  return (
    <section className="columns">
      <div
        className="column is-half"
        style={{ display: "grid", placeContent: "center" }}
      >
        <img
          src={data.image}
          alt={data.description}
          style={{
            width: "auto",
            height: "auto",
            maxHeight: "70%",
          }}
          className="image m-auto"
        />
      </div>
      <div className="column is-half is-flex is-flex-direction-column is-justify-content-center	is-align-items-center">
        <div
          className="p-6"
          style={{
            border: "1px solid whitesmoke",
            boxShadow: "10px 10px 25px whitesmoke",
          }}
        >
          <p className="has-text-weight-semibold">{data.title}</p>
          <br />
          <p className="has-text-weight-semibold">
            ${Number(data.price).toFixed(2)}
          </p>
          <br />
          <p className="has-text-weight-light">{data.description}</p>
          <br />
          <p>
            Category: <span className="is-capitalized">{data.category}</span>
          </p>
          <br />
          <button
            className={`button is-medium is-fullwidth is-primary is-outlined ${
              load ? "is-loading" : ""
            }`}
            onClick={addToCart}
            disabled={itemAlreadyInCart.length > 0 ? true : false}
          >
            {itemAlreadyInCart.length > 0 ? "Added to Cart!" : "Place in Cart"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainItem;
