import React from 'react';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from './Pages/ProductDetails'; 
import NavBar from './Components/NavBar';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import AllClothing from './Pages/AllClothing';
import AboutUs from './Pages/AboutUs';


function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='product/:id' element= {<ProductDetails />}/>
            <Route path='allclothing' element= {<AllClothing />}/>
            <Route path='aboutus' element= {<AboutUs />}/>
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
