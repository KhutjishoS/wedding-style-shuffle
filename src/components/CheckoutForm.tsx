import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Textarea } from './ui/textarea';
import { CheckCircle2, Loader2 } from 'lucide-react';

interface CheckoutFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: {
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
  }) => void;
}

export function CheckoutForm({ isOpen, onClose, onSubmit }: CheckoutFormProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentType: 'cash' as 'cash' | 'card',
    cardNumber: '',
    cardExpiry: '',
    cardCVC: '',
    cardHolder: '',
    referenceNumber: '',
    cart_items: '',
    total_amount: '0.00'
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const random = Math.floor(1000 + Math.random() * 9000);
      
      const referenceNumber = `AEH-${year}${month}${day}-${random}`;
      setFormData(prev => ({ ...prev, referenceNumber }));
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call or processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const submissionData = {
      ...formData,
      referenceNumber: formData.referenceNumber,
      title: `Order #${formData.referenceNumber} - ${formData.paymentType === 'cash' ? 'Cash Payment' : 'Card Payment'}`,
      payment_type: formData.paymentType.toUpperCase(),
      Abner_Exclusive_Hire: "ABNER EXCLUSIVE HIRE",
      cart_items: formData.cart_items,
      total_amount: formData.total_amount
    };

    console.log('Submitting data:', submissionData);
    onSubmit(submissionData);
    setIsLoading(false);
    setIsSuccess(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Format card number with spaces every 4 digits
    if (name === 'cardNumber') {
      const formatted = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
      setFormData(prev => ({
        ...prev,
        [name]: formatted.slice(0, 19) // Limit to 16 digits + 3 spaces
      }));
    }
    // Format expiry date with slash
    else if (name === 'cardExpiry') {
      const formatted = value.replace(/\D/g, '').replace(/(\d{2})(\d{0,2})/, '$1/$2');
      setFormData(prev => ({
        ...prev,
        [name]: formatted.slice(0, 5) // Limit to MM/YY format
      }));
    }
    // Limit CVC to 3 or 4 digits
    else if (name === 'cardCVC') {
      const formatted = value.replace(/\D/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: formatted.slice(0, 4)
      }));
    }
    else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handlePaymentMethodChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      paymentType: value as 'cash' | 'card'
    }));
  };

  if (isSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={() => {
        setIsSuccess(false);
        onClose();
      }}>
        <DialogContent className="sm:max-w-[425px]">
          <div className="flex flex-col items-center justify-center py-8">
            <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Order Submitted Successfully!</h3>
            <p className="text-gray-500 mt-2 mb-6">We will contact you shortly regarding your order.</p>
            <Button 
              onClick={() => {
                setIsSuccess(false);
                onClose();
                navigate('/');
              }}
              className="bg-rose hover:bg-rose-dark text-white"
            >
              Back to Home
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Checkout Details</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pr-2">
          <div className="space-y-2">
            <label htmlFor="referenceNumber" className="text-sm font-medium text-charcoal">
              Reference Number
            </label>
            <Input
              id="referenceNumber"
              name="referenceNumber"
              value={formData.referenceNumber}
              readOnly
              className="border-rose/20 bg-gray-50 cursor-not-allowed"
            />
            <p className="text-xs text-gray-500">This is your unique order reference number</p>
          </div>
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-charcoal">
              Full Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="border-rose/20 focus:border-rose focus:ring-rose"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-charcoal">
              Email Address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="border-rose/20 focus:border-rose focus:ring-rose"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-charcoal">
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="border-rose/20 focus:border-rose focus:ring-rose"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="address" className="text-sm font-medium text-charcoal">
              Home Address
            </label>
            <Textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="border-rose/20 focus:border-rose focus:ring-rose min-h-[100px]"
              placeholder="Enter your complete home address"
            />
          </div>
          <div className="space-y-2">
            <Label>Payment Method</Label>
            <RadioGroup
              name="paymentType"
              value={formData.paymentType}
              onValueChange={handlePaymentMethodChange}
              className="flex space-x-4"
              disabled={isLoading}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cash" id="cash" />
                <Label htmlFor="cash">Cash</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card">Card</Label>
              </div>
            </RadioGroup>
          </div>
          {formData.paymentType === 'card' && (
            <div className="space-y-4 pt-4 border-t border-rose/10">
              <div>
                <Label htmlFor="cardHolder">Card Holder Name</Label>
                <Input
                  id="cardHolder"
                  name="cardHolder"
                  value={formData.cardHolder}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  placeholder="Name on card"
                />
              </div>
              <div>
                <label htmlFor="cardNumber" className="text-sm font-medium text-charcoal">
                  Card Number
                </label>
                <Input
                  id="cardNumber"
                  name="cardNumber"
                  type="text"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="border-rose/20 focus:border-rose focus:ring-rose"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="expiryDate" className="text-sm font-medium text-charcoal">
                    Expiry Date
                  </label>
                  <Input
                    id="expiryDate"
                    name="cardExpiry"
                    type="text"
                    value={formData.cardExpiry}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="border-rose/20 focus:border-rose focus:ring-rose"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="cvv" className="text-sm font-medium text-charcoal">
                    CVV
                  </label>
                  <Input
                    id="cvv"
                    name="cardCVC"
                    type="text"
                    value={formData.cardCVC}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="border-rose/20 focus:border-rose focus:ring-rose"
                    placeholder="123"
                  />
                </div>
              </div>
            </div>
          )}
          <div className="flex justify-end gap-4 mt-6">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 border-rose/20 hover:bg-rose/5"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-rose-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-rose-700 transition-colors duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              Submit Order
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
} 