import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { CartContext } from '../Contexts/CartContext';

const Product = ({ product }) => {
      const { addToCart } = useContext(CartContext);
      
      const { id, image, category, title, price } = product;
      return (
            <div>
                  <div className='border border-[#e4e4e4] h-[300px] mb-4-coolSlate relative overflow-hidden group transition bg-white'>
                        <div className='w-full h-full flex justify-center items-center'>
                              
                              <div className='w-[200px] mx-auto flex justify-center items-center bg-white'>
                                    <img
                                          className='max-h-[160px] group-hover:scale-110 transition duration-300'
                                          src={image}
                                          alt=''
                                    />
                              </div>
                        </div>
                        
                        <div className='absolute top-2 -right-11 group-hover:right-2 p-2 flex flex-col items-center justify-center gap-y-2 opacity-6 group-hover:opacity-100 transition-all duration-300'>
                              <button onClick={() => addToCart(product, id)}>
                                    <div className='border border-purple flex justify-center items-center text-white w-8 h-8 bg-orange/75'>
                                          <BsPlus className='text-3xl' />
                                    </div>
                              </button>
                              <Link
                                    to={`/product/${id}`}
                                    className='border border-purple w-8 h-8 bg-white flex justify-center items-center text-primary drop-shadow-xl text-orange/75'
                              >
                                    <BsEyeFill />
                              </Link>
                        </div>
                  </div>
                  
                  <div className='bg-coolSlate'>
                        <Link to={`/product/${id}`}>
                              <h2 className='font-semibold mb-1 font-fontThree bg-coolSlate'>{title}</h2>
                        </Link>
                        <div className='bg-coolSlate font-semibold font-fontThree'>$ {price}</div>
                  </div>
            </div>
      );
};

export default Product;
