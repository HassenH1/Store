import React from "react";
import Hero from "../../modules/home/Hero";
import DiscoverCollections from "../../modules/home/DiscoverCollections";
import PopularProducts from "../../modules/home/PopularProducts";
import "../../App.css";

function Home() {
  return (
    <main>
      <Hero />
      <DiscoverCollections />
      <PopularProducts />
    </main>
  );
}

export default Home;
