import React from "react";
import ProductCard from "./ProductCard";


function ProductList({ products, addToCart }) {
      return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {products.map((product) => (
                        <ProductCard key={product.id} product={product} addToCart={addToCart} />
                  ))}
            </div>
      );
}

export default ProductList;