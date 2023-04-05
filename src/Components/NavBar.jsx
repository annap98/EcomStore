import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../Contexts/SidebarContext';
import { CartContext } from '../Contexts/CartContext';
import { BsFillBagFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
//import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
      const [isActive, setIsActive] = useState(false);
      const { isOpen, setIsOpen } = useContext(SidebarContext);
      const { itemAmount } = useContext(CartContext);
      //const [nav, setNav] = useState(false);

      useEffect(() => {
            window.addEventListener('scroll', () => {
                  window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
            });
      });
      return (
            <header
                  className={`${isActive ? 'bg-coolSlate py-4 shadow-md' : 'bg-coolSlate py-4'
                        } fixed w-full z-10 transition-all`}
            >
                  <div className='container mx-auto flex items-center justify-between h-full bg-coolSlate'>

                        <Link to={'/'}>
                              <div>
                                    <h1 className='font-logo text-2xl text-pink'>Vera Natural</h1>
                              </div>
                        </Link>
                        
                        {/* Hamburger Menu in Progress */}
                        {/*<div onClick={() => setNav(!nav)}
                              className="cursor-pointer pr-4 z-10 text-black md:hidden"
                        >
                              {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                  </div>*/}
                        {/*{nav && (
                              <ul className='flex items-center space-x-6'>
                                    <li>
                                          <Link to={'allclothing'} onClick={() => setNav(!nav)}>
                                                <h1 className='ml-auto hover:underline underline-purple text-purple'>All Clothing</h1>
                                          </Link>
                                    </li>
                                    <li>
                                          <Link to={'aboutus'} onClick={() => setNav(!nav)}>
                                                <h1 className=' ml-auto hover:underline underline-purple text-purple'>About Us</h1>
                                          </Link>
                                    </li>
                              </ul>
                        )}*/}

                        <div className='flex items-center space-x-6 ml-auto mr-6'>
                              <Link to={'allclothing'}>
                                    <h1 className='hover:underline underline-purple text-purple font-fontThree'>All Clothing</h1>
                              </Link>
                              <Link to={'aboutus'}>
                                    <h1 className='hover:underline underline-purple text-purple font-fontThree'>About Us</h1>
                              </Link>

                        </div>

                        <div
                              onClick={() => setIsOpen(!isOpen)}
                              className='cursor-pointer flex relative'
                        >
                              <BsFillBagFill className='text-2xl text-yellow' />
                              <div className='bg-orange absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex       justify-center items-center'>
                                    {itemAmount}
                              </div>
                        </div>




                  </div>
            </header>
      );
};

export default NavBar;