import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

const addItem = (product) => {
  setItems(currentItems => {
    const existingItem = currentItems.find(item => item.id === product.id);
    if (existingItem) {
      return currentItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      );
    }
    return [...currentItems, product];
  });
};

  const removeItem = (productId) => {
    setItems(currentItems => 
      currentItems.filter(item => item.id !== productId)
    );
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const getTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
    
  };


  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider value={{
      items,
      isOpen,
      setIsOpen,
      addItem,
      removeItem,
      updateQuantity,
      getTotal,
      getTotalItems,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

