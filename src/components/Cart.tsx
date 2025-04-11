import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Trash2, Plus, Minus, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { CheckoutForm } from './CheckoutForm';
import { useNavigate } from 'react-router-dom';

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
  const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>(items);
  const navigate = useNavigate();

  const handleCheckout = async (customerDetails: {
    name: string;
    email: string;
    phone: string;
    address: string;
    paymentType: 'cash' | 'card';
    cardNumber?: string;
    cardExpiry?: string;
    cardCVC?: string;
    cardHolder?: string;
    referenceNumber: string;
    title: string;
    payment_type: string;
    Abner_Exclusive_Hire: string;
    cart_items: string;
    total_amount: string;
  }) => {
    try {
      // Initialize EmailJS with your public key
      emailjs.init('K6ZTxFGBeA-7jxyNX');

      // Format cart items for email
      const formattedCartItems = cartItems
        .map(item => `• ${item.name}\n  Quantity: ${item.quantity}\n  Price: R${item.price.toFixed(2)}\n  Total: R${(item.price * item.quantity).toFixed(2)}`)
        .join('\n\n');

      // Common email data for both templates
      const emailData = {
        name: customerDetails.name,
        email: customerDetails.email,
        phone: customerDetails.phone,
        address: customerDetails.address,
        payment_type: customerDetails.payment_type,
        referenceNumber: customerDetails.referenceNumber,
        title: customerDetails.title,
        cart_items: formattedCartItems,
        total_amount: total.toFixed(2)
      };

      // Send email to customer using template_obmwzqv
      const customerEmailResponse = await emailjs.send(
        'service_hznqbne',
        'template_obmwzqv',
        {
          ...emailData,
          to_email: customerDetails.email,
          from_email: 'khutsisoshogole@gmail.com'
        }
      );

      // Send email to company using template_zwbqick
      const companyEmailResponse = await emailjs.send(
        'service_hznqbne',
        'template_zwbqick',
        {
          ...emailData,
          to_email: 'khutsisoshogole@gmail.com',
          from_email: customerDetails.email
        }
      );

      console.log('Customer Email Response:', customerEmailResponse);
      console.log('Company Email Response:', companyEmailResponse);
      
      if (customerEmailResponse.status === 200 && companyEmailResponse.status === 200) {
        // Clear cart and show success message
        setCartItems([]);
        setIsCheckoutSuccess(true);
      } else {
        throw new Error('Failed to send one or both emails');
      }

    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('There was an error submitting your request. Please try again later or contact us directly at khutsisoshogole@gmail.com');
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
      {isCheckoutSuccess ? (
        <div className="flex flex-col items-center justify-center py-12 bg-white p-8 rounded-lg shadow-sm text-center">
          <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900">Order Submitted Successfully!</h3>
          <p className="text-gray-600 mt-2 mb-6">Thank you for your order. We will contact you shortly.</p>
          <Button 
            onClick={() => navigate('/')}
            className="w-full bg-rose-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-rose-700 transition-colors duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            Back to Home
          </Button>
        </div>
      ) : (
        <>
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
              <button
                onClick={() => setIsCheckoutOpen(true)}
                className="w-full bg-rose-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-rose-700 transition-colors duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                Proceed to Checkout
              </button>
            </CardFooter>
          </Card>

          <CheckoutForm
            isOpen={isCheckoutOpen}
            onClose={() => setIsCheckoutOpen(false)}
            onSubmit={handleCheckout}
          />
        </>
      )}
    </div>
  );
} 