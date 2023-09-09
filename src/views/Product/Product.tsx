import React from "react";
import { Params, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import MainItem from "../../modules/product/MainItem";
import RecentlyViewedItems from "../../component/RecentlyViewedItems";

const url = "https://fakestoreapi.com/products/";

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

function Product() {
  const { id } = useParams() as Readonly<Params<string>>;
  const { data, error } = useFetch<IProduct>(url + id);

  if (error) return <p>There is an error.</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <main className="container">
      <MainItem data={data} />
      {/* This need to be fixed */}
      {/* <RecentlyViewedItems /> */}
    </main>
  );
}

export default Product;
