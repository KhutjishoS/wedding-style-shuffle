import { useState, useEffect } from 'react';

interface WishlistItem {
  id: string;
  name: string;
  image: string;
  price: number;
}

export function useWishlist() {
  const [items, setItems] = useState<WishlistItem[]>(() => {
    const savedItems = localStorage.getItem('wishlist');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(items));
  }, [items]);

  const addItem = (item: WishlistItem) => {
    setItems((prevItems) => {
      if (prevItems.some((i) => i.id === item.id)) {
        return prevItems;
      }
      return [...prevItems, item];
    });
  };

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const isInWishlist = (id: string) => {
    return items.some((item) => item.id === id);
  };

  return {
    items,
    addItem,
    removeItem,
    isInWishlist,
  };
} 