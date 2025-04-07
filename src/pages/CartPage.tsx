import React from 'react';
import { Cart } from '../components/Cart';
import { useCart } from '../hooks/useCart';

export function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, getTotal } = useCart();

  return (
    <div className="container mx-auto px-4 pt-32 pb-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-serif text-charcoal">Shopping Cart</h1>
        <button
          onClick={clearCart}
          className="px-4 py-2 text-charcoal hover:text-rose border border-gray-200 rounded-md transition-colors duration-200 hover:border-rose"
        >
          Clear Cart
        </button>
      </div>
      <Cart
        items={items}
        onRemoveItem={removeItem}
        onUpdateQuantity={updateQuantity}
        onClearCart={clearCart}
        total={getTotal()}
      />
    </div>
  );
} 