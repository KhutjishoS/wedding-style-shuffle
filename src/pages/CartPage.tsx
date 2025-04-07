import React from 'react';
import { Cart } from '../components/Cart';
import { useCart } from '../hooks/useCart';

export function CartPage() {
  const { items, isLoading, removeItem, updateQuantity, clearCart, getTotal } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif mb-8">Your Cart</h1>
      <Cart
        items={items}
        isLoading={isLoading}
        onRemoveItem={removeItem}
        onUpdateQuantity={updateQuantity}
        onClearCart={clearCart}
        total={getTotal()}
      />
    </div>
  );
} 