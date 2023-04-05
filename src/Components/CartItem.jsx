// This component represents a single item in the shopping cart
import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';

import { CartContext } from '../Contexts/CartContext';

const CartItem = ({ item }) => {
      
      //Destructure the necessary functions from CartContext to manipulate cart items
      const { removeFromCart, increaseAmount, decreaseAmount } =
            useContext(CartContext);

      //Destructure the item object into individual variables
            const { id, title, image, price, amount } = item;
      return (
            //Render the cart item element
            <div className='flex gap-x-4 py-2 lg:px-6 border-b border-coolSlate w-full font-light text-gray-500 bg-coolSlate'>
                  <div className='w-full min-h-[150px] flex items-center gap-x-4'>
                        <div>
                              {/* Render the image and link to the corresponding product page */}
                              <Link to={`/product/${id}`}>
                                    <img className='max-w-[80px]' src={image} alt='' />
                              </Link>
                        </div>
                        <div className='w-full flex flex-col bg-coolSlate'>

                              <div className='flex justify-between mb-2 '>
                                    {/* Render the product title and a button to remove the item from the cart */}
                                    <Link
                                          to={`/product/${id}`}
                                          className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'
                                    >
                                          {title}
                                    </Link>

                                    <div
                                          onClick={() => removeFromCart(id)}
                                          className='text-xl cursor-pointer'
                                    >
                                          <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
                                    </div>
                              </div>
                              <div className='flex gap-x-2 h-[36px] text-sm bg-coolSlate'>

                                    <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>

                                          <div
                                                onClick={() => decreaseAmount(id)}
                                                className='flex-1 flex justify-center items-center cursor-pointer h-full'
                                          >
                                                <IoMdRemove />
                                          </div>

                                          <div className='h-full flex justify-center items-center px-2'>
                                                {amount}
                                          </div>

                                          <div
                                                onClick={() => increaseAmount(id)}
                                                className='flex-1 h-full flex justify-center items-center cursor-pointer'
                                          >
                                                <IoMdAdd />
                                          </div>
                                    </div>
                                    {/* Render the price and total price for the item */}
                                    <div className='flex-1 flex items-center justify-around'>
                                          $ {price}
                                    </div>

                                    <div className='flex-1 flex justify-end items-center text-primary font-medium'>{`$ ${parseFloat(
                                          price * amount
                                    ).toFixed(2)}`}</div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default CartItem;