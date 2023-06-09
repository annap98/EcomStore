import React, { useContext } from "react";
import { ProductContext } from '../Contexts/ProductContext';
import Product from "../Components/Product";

// All Clothing page component
const AllClothing = () => {
      
      // Using the useContext hook to get products data from the ProductContext
      const { products } = useContext(ProductContext);
      console.log(products)

      // Filtering out products based on category
      const filteredProducts = products.filter(item => {
            return (
                  item.category === "women's clothing"
            );
      });

      return <div className='py-24 bg-coolSlate border-coolSlate mx-auto pl-24 pr-24'>
            <h1 className='font-fontTwo text-center text-lg mb-2 underline text-purple bg-coolSlate'>All Clothing</h1>
            <div className='mx-auto pt-4 font-fontThree border-coolSlate bg-coolSlate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[10px] max-w-sm md:max-w-none md:mx-0'>
                  {/* Mapping through the filtered products and rendering them as Product components */}
                  {filteredProducts.map((product) => {
                        return (
                              <Product product={product} key={product.id} className='bg-coolSlate' />
                        );

                  })}
            </div>
      </div>

}

export default AllClothing;