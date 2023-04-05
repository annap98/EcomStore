import React, { createContext, useState, useEffect } from 'react';

// CartContext is an object used to share data throughout the app, specifically, it provides access to the current state of the shopping cart, including the list of items, their quantities, and their total price of the items in the cart
export const CartContext = createContext();

// CartProvider wraps the entire app and passes the CartContext object as a value to all of its children components, allowing them to access the cart state and its functions through the  useContext hook
const CartProvider = ({ children }) => {
      
      // This initializes the cart state to an empty array
      const [cart, setCart] = useState([]);
      
      // This initializes the item amount state to 0
      const [itemAmount, setItemAmount] = useState(0);
      
      // This initializes the total state to 0
      const [total, setTotal] = useState(0);

      // This useEffect hook updates the total whenever the cart state changes
      useEffect(() => {
            const total = cart.reduce((accumulator, currentItem) => {
                  return accumulator + currentItem.price * currentItem.amount;
            }, 0);
            setTotal(total);
      }, [cart]);

      // This useEffect hook updates the item amount whenever the cart state changes
      useEffect(() => {
            if (cart) {
                  const amount = cart.reduce((accumulator, currentItem) => {
                        return accumulator + currentItem.amount;
                  }, 0);
                  setItemAmount(amount);
            }
      }, [cart]);

      // This function adds an item to the cart
      const addToCart = (product, id) => {
            const newItem = { ...product, amount: 1 };
            
            const cartItem = cart.find((item) => {
                  return item.id === id;
            });
            
            if (cartItem) {
                  const newCart = [...cart].map((item) => {
                        if (item.id === id) {
                              return { ...item, amount: cartItem.amount + 1 };
                        } else {
                              return item;
                        }
                  });
                  setCart(newCart);
            } else {
                  setCart([...cart, newItem]);
            }
      };

      // This function removes an item from the cart
      const removeFromCart = (id) => {
            const newCart = cart.filter((item) => {
                  return item.id !== id;
            });
            setCart(newCart);
      };

      // This function clears the cart
      const clearCart = () => {
            setCart([]);
      };

      // This function increases the amount of a specific item in the cart
      const increaseAmount = (id) => {
            const cartItem = cart.find((item) => item.id === id);
            addToCart(cartItem, id);
      };

      // This function decreases the amount of a specific item in the cart
      const decreaseAmount = (id) => {
            const cartItem = cart.find((item) => {
                  return item.id === id;
            });
            if (cartItem) {
                  const newCart = cart.map((item) => {
                        if (item.id === id) {
                              return { ...item, amount: cartItem.amount - 1 };
                        } else {
                              return item;
                        }
                  });
                  setCart(newCart);
            }

            if (cartItem.amount < 2) {
                  removeFromCart(id);
            }
      };

      // This returns the CartContext.Provider component which provides the cart state and related functions to child components
      return (
            <CartContext.Provider
                  value={{
                        cart,
                        addToCart,
                        removeFromCart,
                        clearCart,
                        increaseAmount,
                        decreaseAmount,
                        itemAmount,
                        total,
                  }}
            >
                  {children}
            </CartContext.Provider>
      );
};

export default CartProvider;