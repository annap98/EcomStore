import React from "react";
import { useState } from "react";
import productsData from "../Data/products.json";
import ProductCard from "./ProductCard";

function ProductsContainer() {
      const [cart, setCart] = useState([]);

      const addToCart = (product) => {
            setCart([...cart, product]);
      };

      const products = productsData.products;
      
      console.log(products);
      
      return (
            <div className="container mx-auto px-4 py-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {products.map((product) => (
                              <ProductCard key={product.id} product={product} addToCart={addToCart} />
                        ))}
                  </div>
            </div>
      );
}

export default ProductsContainer;
