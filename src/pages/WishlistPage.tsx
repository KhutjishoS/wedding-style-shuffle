import React from 'react';
import { Wishlist } from '../components/Wishlist';
import { useWishlist } from '../hooks/useWishlist';

export function WishlistPage() {
  const { items, removeItem } = useWishlist();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
      <Wishlist items={items} onRemoveItem={removeItem} />
    </div>
  );
} 