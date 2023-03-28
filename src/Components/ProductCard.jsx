import React from "react";

function ProductCard({ product, addToCart }) {
      return (
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                  <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{product.name}</div>
                        <p className="text-gray-700 text-base mb-4">{product.description}</p>
                        <div className="flex justify-between items-center">
                              <div className="font-bold text-xl">${product.price}</div>
                              <button onClick={() => addToCart(product)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                    Add to cart
                              </button>
                        </div>
                  </div>
            </div>
      );
}

export default ProductCard;


