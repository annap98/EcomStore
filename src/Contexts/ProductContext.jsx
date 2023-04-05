import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
      
      // State to hold products data
      const [products, setProducts] = useState([]);
      
      // Fetching products data from external API using useEffect hook
      useEffect(() => {
            const fetchProducts = async () => {
                  const response = await fetch('https://fakestoreapi.com/products');
                  const data = await response.json();
                  setProducts(data);
            };
            fetchProducts();
      }, []);

      // Returning the Provider component that wraps the children with value prop containing products data to be passed down to consuming components
      return (
            <ProductContext.Provider value={{ products }}>
                  {children}
            </ProductContext.Provider>
      );
};

export default ProductProvider;