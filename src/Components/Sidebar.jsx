import { React, useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import CartItem from './CartItem';
import { SidebarContext } from '../Contexts/SidebarContext';
import { CartContext } from '../Contexts/CartContext';


// Sidebar component to display cart
const Sidebar = () => {
      
      // State and functions from the SidebarContext
      const { isOpen, handleClose } = useContext(SidebarContext);
      
      // Cart items and cart-related functions from the CartContext
      const { cart, clearCart, total, itemAmount } = useContext(CartContext);
      
      return (

            <div
                  //Conditionally set the position of the sidebar based on whether it is open or not
                  className={`${isOpen ? 'right-0' : '-right-full'
                        }  w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
            >
                  {/* Render the header of the sidebar */}
                  <div className='flex items-center justify-between py-6 border-b'>
                        <div className='uppercase text-sm font-semibold'>
                              {/* Show the number of items in the cart */}
                              Shopping Bag ({itemAmount})
                        </div>

                        {/* Render a button to close the sidebar */}
                        <div
                              onClick={handleClose}
                              className='cursor-pointer w-8 h-8 flex justify-center items-center'
                        >
                              <IoMdArrowForward className='text-2xl' />
                        </div>
                  </div>

                  {/* Render the list of cart items */}
                  <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b'>
                        {cart.map((item) => {
                              return <CartItem item={item} key={item.id} />;
                        })}
                  </div>

                  {/* Render the cart total and buttons */}
                  <div className='flex flex-col gap-y-3 py-4 mt-4'>
                        <div className='flex w-full justify-between items-center'>
                              
                              <div className='uppercase font-semibold'>
                                    <span className='mr-2'>Total:</span>$ {parseFloat(total).toFixed(2)}
                              </div>
                              
                              {/* Render a button to clear the cart */}
                              <div
                                    onClick={clearCart}
                                    className='cursor-pointer border border-black/50 py-4 bg-coolSlate text-black w-12 h-12 flex justify-center items-center text-xl'
                              >
                                    <FiTrash2 />
                              </div>
                        </div>

                        {/* Render a button to view the cart */}
                        <Link
                              to='/'
                              className='bg-coolSlate flex p-4 justify-center items-center text-primary w-full font-medium border border-black/50'
                        >
                              View cart
                        </Link>

                        {/* Render a button to checkout */}
                        <Link
                              to='/'
                              className='bg-primary flex p-4 justify-center items-center text-white w-full font-medium'
                        >
                              Checkout
                        </Link>
                  </div>
            </div>
      );
};

export default Sidebar;