import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Trash2, Plus, Minus } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartProps {
  items: CartItem[];
  onRemoveItem: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onClearCart: () => void;
  total: number;
}

export function Cart({ items, onRemoveItem, onUpdateQuantity, onClearCart, total }: CartProps) {
  if (!items || items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 bg-white rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-600">Your cart is empty</h3>
        <p className="text-gray-500 mt-2">Add items to your cart to see them here</p>
      </div>
    );
  }

  const handleQuantityUpdate = (id: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      onUpdateQuantity(id, newQuantity);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Shopping Cart</h2>
        <Button 
          variant="outline" 
          onClick={onClearCart}
          className="hover:bg-rose/10 hover:text-rose"
        >
          Clear Cart
        </Button>
      </div>
      
      <div className="space-y-4">
        {items.map((item) => (
          <Card key={item.id} className="overflow-hidden border border-gray-100">
            <CardContent className="p-6">
              <div className="flex items-center space-x-6">
                <div className="relative w-32 h-32">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full h-full rounded-lg shadow-sm"
                  />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute -top-2 -right-2 shadow-md hover:bg-rose"
                    onClick={() => onRemoveItem(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                  <p className="text-gray-600 mb-3">R {item.price.toFixed(2)}</p>
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-rose/10 hover:text-rose"
                      onClick={() => handleQuantityUpdate(item.id, Math.max(1, item.quantity - 1))}
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        if (!isNaN(value) && value >= 1) {
                          handleQuantityUpdate(item.id, value);
                        }
                      }}
                      className="w-16 text-center font-medium border rounded-md py-1"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-rose/10 hover:text-rose"
                      onClick={() => handleQuantityUpdate(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-rose">
                    R {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8 border border-gray-100">
        <CardContent className="p-6">
          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold">Total</span>
            <span className="text-2xl font-bold text-rose">R {total.toFixed(2)}</span>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button 
            className="w-full bg-rose hover:bg-rose-dark text-white"
            size="lg"
          >
            Proceed to Checkout
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
} 