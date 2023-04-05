import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'tailwindcss/tailwind.css';
import './index.css';
import ProductProvider from './Contexts/ProductContext';
import SidebarProvider from './Contexts/SidebarContext';
import CartProvider from './Contexts/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);

