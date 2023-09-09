import React, { useState } from "react";
import SubTitles from "../../component/SubTitles";
import { useFetch } from "../../hooks/useFetch";
import "../../App.css";
import { Link } from "react-router-dom";
import Loading from "../../layout/Loading";

const menUrl =
  "https://fakestoreapi.com/products/category/men's clothing?limit=2";
const womenUrl =
  "https://fakestoreapi.com/products/category/women's clothing?limit=2";
const jeweleryUrl =
  "https://fakestoreapi.com/products/category/jewelery?limit=2";

interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

function PopularProducts() {
  const { data: menClothingData, error: menClothingError } =
    useFetch<IProduct[]>(menUrl);
  const { data: womenClothingData, error: womenClothingError } =
    useFetch<IProduct[]>(womenUrl);
  const { data: jeweleryData, error: jeweleryError } =
    useFetch<IProduct[]>(jeweleryUrl);
  let listOfPopularProduct: [] | IProduct[] = [];

  if (menClothingError || womenClothingError || jeweleryError)
    return <p>There is an error.</p>;
  if (!menClothingData || !womenClothingData || !jeweleryData) {
    return <Loading size="medium" />;
  } else {
    listOfPopularProduct = [
      ...menClothingData,
      ...womenClothingData,
      ...jeweleryData,
    ];
  }

  return (
    <section className="section">
      <div className="container">
        <SubTitles aboveText="Popular Products" />
        <div
          className="is-flex is-flex-direction-row is-justify-content-center	is-align-items-center is-flex-wrap-wrap"
          style={{ gap: 50 }}
        >
          {listOfPopularProduct.map((product: IProduct) => (
            <Link
              className="is-flex-grow-1"
              style={{
                height: "350px",
                width: "350px",
              }}
              key={product.id}
              to={`/product/${product.id}`}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                }}
                className="is-flex is-flex-direction-column	is-align-items-center is-clickable"
              >
                <img
                  src={product.image}
                  alt={`${product.id}`}
                  style={{
                    width: "auto",
                    height: "auto",
                    maxHeight: "70%",
                  }}
                  className="image"
                />
                <div className="is-flex is-flex-direction-column is-justify-content-center	 is-align-items-center mt-4">
                  <p className="has-text-black">{product.title}</p>
                  <p className="has-text-black has-text-weight-bold">
                    ${Number(product.price).toFixed(2)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularProducts;
