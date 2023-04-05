import React from 'react';
import Sweater from '../Assets/sweater.png';
import Clouds from '../Assets/clouds.png'

// Hero Component - Front Page
const Hero = () => {
      return (
            <section className='h-[800px] bg-cover bg-center py-24 bg-coolSlate backdrop backdrop-blur-xl w-full'
                  style={{ backgroundImage: `url(${Clouds})` }}>

                  <div className='container mx-auto flex justify-around h-full w-full'>

                        <div className='flex flex-col justify-center backdrop-filter backdrop-blur-xl'>

                              <div className='font-semibold flex items-center uppercase text-yellow'>
                                    <div className='w-10 h-[2px] bg-yellow mr-3 font-fontTwo'></div> Clothing Made from Recyled Material
                              </div>

                              <h1 className='text-[30px] leading-[1.1] font-logo mb-4 text-coolSlate'>
                                    Welcome to Vera Natural, your one-stop shop for eco-friendly, clothing. <br /> Our sustainable brand uses recycled materials to create high- <br /> quality garments that are both stylish and environmentally conscious.  <br />
                              </h1>

                        </div>

                        <div className='hidden lg:block '>
                              <img src={Sweater} alt='' className='h-150 w-200 rounded-3xl shadow-2xl object-cover backdrop-filter backdrop-blur-xl' />
                        </div>
                  </div>


            </section>
      );
};

export default Hero;