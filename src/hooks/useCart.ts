import { useState, useEffect, useCallback } from 'react';

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

// Create a custom event for cart updates
const CART_UPDATE_EVENT = 'cartUpdate';

export function useCart() {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const savedItems = localStorage.getItem('cart');
      return savedItems ? JSON.parse(savedItems) : [];
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      return [];
    }
  });

  // Save to localStorage and dispatch event whenever items change
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(items));
      // Dispatch custom event when cart updates
      window.dispatchEvent(new CustomEvent(CART_UPDATE_EVENT, { detail: items }));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [items]);

  // Listen for cart updates from other components
  useEffect(() => {
    const handleCartUpdate = (event: CustomEvent<CartItem[]>) => {
      setItems(event.detail);
    };

    window.addEventListener(CART_UPDATE_EVENT, handleCartUpdate as EventListener);
    return () => {
      window.removeEventListener(CART_UPDATE_EVENT, handleCartUpdate as EventListener);
    };
  }, []);

  const addItem = useCallback((item: Omit<CartItem, 'quantity'>) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id);
      return;
    }
    
    setItems((prevItems) => {
      const itemExists = prevItems.some(item => item.id === id);
      if (!itemExists) return prevItems;

      return prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
    });
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setItems([]);
    localStorage.removeItem('cart');
  }, []);

  const getTotal = useCallback(() => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [items]);

  const getItemQuantity = useCallback((id: string) => {
    const item = items.find(item => item.id === id);
    return item ? item.quantity : 0;
  }, [items]);

  return {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getTotal,
    getItemQuantity,
  };
} 