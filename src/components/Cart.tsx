import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Trash2, Plus, Minus } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { CheckoutForm } from './CheckoutForm';

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
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleCheckout = async (customerDetails: {
    name: string;
    email: string;
    phone: string;
    address: string;
    paymentType: 'cash' | 'card';
  }) => {
    try {
      // Format cart items for email
      const cartItems = items.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        total: item.price * item.quantity
      }));

      // Format cart items for email display
      const formattedCartItems = cartItems.map(item => 
        `• ${item.name}\n  Quantity: ${item.quantity}\n  Price: R${item.price.toFixed(2)}\n  Total: R${item.total.toFixed(2)}`
      ).join('\n\n');

      // Prepare email template parameters
      const templateParams = {
        email: customerDetails.email,
        name: customerDetails.name,
        phone: customerDetails.phone,
        address: customerDetails.address,
        payment_type: customerDetails.paymentType.toUpperCase(),
        title: `Order Details - ${new Date().toLocaleDateString()}`,
        cart_items: formattedCartItems,
        total_amount: total.toFixed(2),
        'Abner Exclusive Hire': 'ABNER EXCLUSIVE HIRE'
      };

      console.log('EmailJS Configuration:', {
        serviceId: 'service_hznqbne',
        templateId: 'template_obmwzqv',
        publicKey: 'K6ZTxFGBeA-7jxyNX'
      });
      console.log('Template Parameters:', templateParams);

      // Initialize EmailJS with the public key
      emailjs.init('K6ZTxFGBeA-7jxyNX');

      // Send email using EmailJS
      const response = await emailjs.send(
        'service_hznqbne',
        'template_obmwzqv',
        templateParams
      );

      console.log('EmailJS Response:', response);

      if (response.status !== 200) {
        throw new Error(`EmailJS returned status ${response.status}`);
      }

      // Clear cart after successful email
      onClearCart();
    } catch (error) {
      console.error('EmailJS Error:', error);
      if (error instanceof Error) {
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
        
        // Check for specific EmailJS error types
        if (error.message.includes('template')) {
          alert('There was an error with the email template. Please contact support.');
        } else if (error.message.includes('service')) {
          alert('There was an error with the email service. Please contact support.');
        } else if (error.message.includes('public key')) {
          alert('There was an error with the email configuration. Please contact support.');
        } else {
          alert('There was an error processing your order. Please try again or contact support.');
        }
      } else {
        alert('An unexpected error occurred. Please try again or contact support.');
      }
    }
  };

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
      <div className="space-y-4">
        {items.map((item) => (
          <Card key={item.id} className="overflow-hidden border border-gray-100">
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <div className="relative w-full md:w-32 h-48 md:h-32 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full h-full rounded-md md:rounded-lg shadow-sm"
                  />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2 md:-top-2 md:-right-2 shadow-md hover:bg-rose"
                    onClick={() => onRemoveItem(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1 mt-2 md:mt-0">{item.name}</h3>
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
                <div className="text-right self-end md:self-auto pt-2 md:pt-0">
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
            onClick={() => setIsCheckoutOpen(true)}
          >
            Proceed to Checkout
          </Button>
        </CardFooter>
      </Card>

      <CheckoutForm
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onSubmit={handleCheckout}
      />
    </div>
  );
} 