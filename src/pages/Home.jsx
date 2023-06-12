import React, { useContext } from "react";
// import product context
import { ProductContext } from "../context/ProductContext";
// import component product
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  // get product from product context
  const { products } = useContext(ProductContext);
  // get only men's & woman's clothing products
  const filteredProducts = products.filter((item) => {
    return item.category === "men's clothing" || item.category === "women's clothing";
  });
  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product, index) => {
              return <Product key={index} product={product} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
