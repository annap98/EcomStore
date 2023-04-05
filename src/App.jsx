import React from 'react';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from './Pages/ProductDetails';
import NavBar from './Components/NavBar';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import AllClothing from './Pages/AllClothing';
import AboutUs from './Pages/AboutUs';

// Sets up routes for the application
function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        {/* Renders the NavBar component */}
        <NavBar />
        <Routes>
          
          {/* Renders the Home component when the URL is "/" */}
          <Route path='/' element={<Home />} />
          
          {/* Renders the ProductDetails component when the URL is "/product/:id" */}
          <Route path='product/:id' element={<ProductDetails />} />
          
          {/* Renders the AllClothing component when the URL is "/allclothing" */}
          <Route path='allclothing' element={<AllClothing />} />
          
          {/* Renders the AboutUs component when the URL is "/aboutus" */}
          <Route path='aboutus' element={<AboutUs />} />
        
        </Routes>
        
        {/* Renders the Sidebar component */}
        <Sidebar />
        
        {/* Renders the Footer component */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
