import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import Content from "../../modules/shop/Content";
import { useFilter } from "../../context/filter-context";

interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}
const prodURL = "https://fakestoreapi.com/products";

function Shop() {
  // const [url, setUrl] = useState(prodURL);
  const { url, onPressCategoryFilters } = useFilter();
  const { data: products, error } = useFetch<IProduct[]>(url);

  // const onPressCategoryFilters = (option?: string) => {
  //   switch (option) {
  //     case "isWomen":
  //       setUrl("https://fakestoreapi.com/products/category/women's clothing");
  //       break;
  //     case "isMen":
  //       setUrl("https://fakestoreapi.com/products/category/men's clothing");
  //       break;
  //     case "isJewelry":
  //       setUrl("https://fakestoreapi.com/products/category/jewelery");
  //       break;
  //     default:
  //       return setUrl("https://fakestoreapi.com/products");
  //   }
  // };

  if (error) return <p>There is an error.</p>;

  return (
    <main>
      <Content
        products={products}
        onPressCategoryFilters={onPressCategoryFilters}
      />
    </main>
  );
}

export default Shop;
