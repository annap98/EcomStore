import React, { useState, createContext } from 'react'; 

// Creating a new context 
export const SidebarContext = createContext();

// Used to wrap other components and provide them with access to the state of the sidebar via the SidebarContext object. Provides a centralized location for managing the state of the sidebar
const SidebarProvider = ({ children }) => {
      // Using the useState hook to create a new state variable called isOpen and a function called setIsOpen to update the state
      const[isOpen, setIsOpen] = useState(false);
      
      // Defining a function called handleClose that sets the isOpen state variable to false
      const handleClose = () => {
            setIsOpen(false);
      };
      
      // Creating a new component called SidebarProvider that wraps the children with the SidebarContect Provider component
      return (
            <SidebarContext.Provider value={{isOpen, setIsOpen, handleClose }}>
                  {children}
            </SidebarContext.Provider>
      );
};

export default SidebarProvider;