import React, {useContext} from "react";
import { ProductContext } from '../Contexts/ProductContext';
import Product from "../Components/Product";
import Hero from "../Components/Hero";



const Home = () => {
      const { products } = useContext(ProductContext);
      console.log(products)
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









/*function Home() {
      return (
            <div className="flex flex-col min-h-screen">
                  <div className="bg-magenta w-5/6 h-96 mx-auto mt-20 box-border shadow-2xl sm:h-80 md:h-96 lg:h-120 flex flex-col items-center sm:flex-row">

                        <div className="flex flex-col order-1 sm:ml-auto sm:mt-12 sm:mr-6">
                              <div className="flex">
                                    <p className="text-coolSlate text-2xl font-logo sm:text-xl lg:text-3xl">
                                          Our clothing is made from 100% recycled material
                                    </p>
                              </div>
                              <div className="flex sm:ml-auto">
                                    <p className="text-lg break-all text-yellow sm:text-sm lg:text-lg">
                                          Discover fashion with a conscience -
                                          <br />
                                          Vera Natural's sustainable designs are as stylish as they are eco-friendly.
                                    </p>
                              </div>
                        </div>



                        <div className="flex-grow"></div>
                        <div className="flex order-4">
                              <Footer className="bg-gray-200 mt-32" />
                        </div>
                  </div>

            </div>
      );
}

export default Home;*/















/*<div className="flex flex-col sm:-mt-12">
                              <div className="flex my-0 mx-auto">
                                    <img
                                          src={whiteShirt}
                                          alt="Cotton Shirt"
                                          className="shadow-lg rounded-lg sm:h-40 sm:w-full md:h-60 md:w-60 lg:h-96 lg:w-96"
                                    />
                              </div>

                              <div className="flex mt-2">
                                    <img
                                          src={shirt}
                                          alt="Cotton Shirt"
                                          className="shadow-lg rounded-lg sm:h-40 sm:w-full md:h-60 md:w-60 lg:h-96 lg:w-96"
                                    />
                              </div>
                        </div>*/



/*function Home() {
      return (
            <div className="flex flex-col min-h-screen">
                  <NavBar />
                  <div className="bg-magenta w-5/6 h-96 mx-auto mt-20 box-border shadow-2xl sm:h-80 md:h-96 lg:h-120 flex flex-row">

                        <div className="flex flex-row">
                              <div className="flex flex-col order-1 ml-auto mt-12 mr-6">
                                    <div className="flex">
                                          <p className="text-coolSlate text-2xl font-logo sm:text-xl lg:text-3xl">
                                                Our clothing is made from 100% recycled material
                                          </p>
                                    </div>
                                    <div className="flex ml-auto">
                                          <p className="text-lg  break-all text-yellow sm:text-sm lg:text-lg">
                                                Discover fashion with a conscience -
                                                <br />
                                                Vera Natural's sustainable designs are as stylish as they are eco-friendly.
                                          </p>
                                    </div>
                              </div>
                              <div className="flex flex-col -mt-12">
                                    <div className="flex ml-auto my-0 mx-auto">
                                          <img
                                                src={whiteShirt}
                                                alt="Cotton Shirt"
                                                className="shadow-lg rounded-lg sm:h-40 sm:w-40 md:h-60 md:w-60 lg:h-96 lg:w-96"
                                          />
                                    </div>

                                    <div className="flex ml-64 -mt-12">
                                          <img
                                                src={shirt}
                                                alt="Cotton Shirt"
                                                className="ml-40 shadow-lg rounded-lg sm:h-40 sm:w-40 md:h-60 md:w-60 lg:h-96 lg:w-96"
                                          />
                                    </div>
                              </div>
                        </div>

                  </div>
                  <div className="flex-grow"></div>
                  <div>
                        <Footer className="bg-gray-200 mt-32" />
                  </div>
            </div>
      );
}

export default Home;



/*function Home() {
      return (
            <div className="flex flex-col min-h-screen">
                  <NavBar />
                  <div className="bg-magenta w-5/6 h-96 mx-auto mt-20 box-border shadow-2xl sm:h-80 md:h-96 lg:h-120">
                        <p className="text-coolSlate float-right mt-20 mr-32 text-2xl font-logo bottom-0 sm:text-xl lg:text-3xl">
                              Our clothing is made from 100% recycled material
                        </p>
                        <p className="text-lg float-right mt-2 break-all text-yellow bottom-28 mr-8">
                              Discover fashion with a conscience - 
                              <br />
                              Vera Natural's sustainable designs are as stylish as they are eco-friendly.
                        </p>
                        <img 
                              src={shirt} alt="Cotton Shirt" className="shadow-lg absolute bottom-10 left-1/3 h-80 w-80 float-center rounded-lg"
                        />
                        <img 
                              src={whiteShirt} alt="Cotton Shirt" className="shadow-lg absolute bottom-72 h-80 w-80 float-left left-60 rounded-lg"
                        />
                  </div>
                  <div className="flex-grow"></div>
                  <Footer className="bg-gray-200 mt-32"/>
            </div>
            
      )
}*/