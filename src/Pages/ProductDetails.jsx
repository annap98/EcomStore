import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../Contexts/CartContext';
import { ProductContext } from '../Contexts/ProductContext';

// ProductDetails component - renders product details page
const ProductDetails = () => {
      
      // Retrieve  the "id" parameter from the URL
      const { id } = useParams();

      // Retrieve the "products" and "addToCart" functions from the ProductContext and CartContext respectively
      const { products } = useContext(ProductContext);
      const { addToCart } = useContext(CartContext);

      // Find the product with the matching "id"
      const product = products.find((item) => {
            return item.id === parseInt(id);
      });

      // If product is not found, return a loading message
      if (!product) {
            return (
                  <section className='h-screen flex justify-center items-center'>
                        Loading...
                  </section>
            );
      }

      // Extract required information from the product
      const { title, price, description, image } = product;

      // Render the ProductDetails component
      return (
            <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center bg-coolSlate'>
                  <div className='container mx-auto'>
                        
                        <div className='flex flex-col lg:flex-row items-center border border-black/50 bg-white pt-16 pb-16 pr-6'>
                              
                              <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
                                    <img className='max-w-[200px] lg:max-w-sm' src={image} alt='' />
                              </div>
                              
                              <div className='flex-1 text-center lg:text-left'>
                                    <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>
                                          {title}
                                    </h1>
                                    <div className='text-xl text-red-500 font-medium mb-6'>
                                          $ {price}
                                    </div>
                                    <p className='mb-8'>{description}</p>
                                    <button
                                          onClick={() => addToCart(product, product.id)}
                                          className='bg-purple py-4 px-8 text-white'
                                    >
                                          Add to cart
                                    </button>
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default ProductDetails;