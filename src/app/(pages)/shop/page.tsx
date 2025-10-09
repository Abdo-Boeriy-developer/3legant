import NewsLetter from "@/components/newsLetter/NewsLetter";
import Filter_products from "@/pageSection/Shop/filter_products/Filter_products";
import HeroShop from "@/pageSection/Shop/heroShop/HeroShop";
import React from "react";

const Shop = () => {
  return (
    <div className="container">
      <HeroShop />
      <Filter_products />
      <NewsLetter />
    </div>
  );
};

export default Shop;
