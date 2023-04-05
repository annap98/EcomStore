import React, {useContext} from "react";
import { ProductContext } from '../Contexts/ProductContext';
import Product from "../Components/Product";
import Hero from "../Components/Hero";

// Home page component
const Home = () => {

      // Using the useContext hook to consume data from the ProductContext
      const { products } = useContext(ProductContext);
      console.log(products)

      // Filtering the products to only display those in the women's clothing category
      const filteredProducts = products.filter(item => {
            return (
                  item.category === "women's clothing" 
            );
      });

      return <div>
            <Hero />
                  <section className='py-16 bg-coolSlate'>
                        <div className="container mx-auto bg-coolSlate">
                              <h1 className="font-fontTwo text-center text-lg mb-2 underline text-purple">Explore</h1>
                              <div className='font=semibold bg-coolSlate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 font-logo'>
                                    
                                    {/* Mapping through the filtered products and rendering them as Product components */}
                                    {filteredProducts.map((product) => {
                                          return (
                                                <Product product={product} key={product.id}/>
                                          );
                                          
                                    })}
                              </div>
                        </div>
                  </section>
            </div>;
};

export default Home;









