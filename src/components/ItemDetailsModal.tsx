import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { ShoppingCart, Heart, X } from 'lucide-react';

interface ItemDetailsModalProps {
  item: {
    id: string;
    name: string;
    image: string;
    price: number;
    category: string;
    description?: string;
    features?: string[];
  };
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: () => void;
  onAddToWishlist: () => void;
  isInWishlist: boolean;
}

export function ItemDetailsModal({
  item,
  isOpen,
  onClose,
  onAddToCart,
  onAddToWishlist,
  isInWishlist,
}: ItemDetailsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">{item.name}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-square">
            <img
              src={item.image}
              alt={item.name}
              className="object-cover w-full h-full rounded-lg"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 bg-white/90 hover:bg-white"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-4">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-rose/10 text-rose text-sm font-medium mb-2">
                {item.category}
              </span>
              <p className="text-2xl font-bold text-charcoal">R {item.price.toFixed(2)}</p>
            </div>
            
            <p className="text-charcoal/70">
              {item.description || `Experience the perfect ${item.name.toLowerCase()} for your special day. This ${item.category.toLowerCase()} package includes everything you need to create unforgettable memories.`}
            </p>

            {item.features && item.features.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Features:</h3>
                <ul className="space-y-2">
                  {item.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-charcoal/70">
                      <span className="w-1.5 h-1.5 bg-rose rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-4 pt-4">
              <Button
                className="flex-1"
                onClick={onAddToCart}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
              <Button
                variant={isInWishlist ? "default" : "outline"}
                className="flex-1"
                onClick={onAddToWishlist}
              >
                <Heart className="w-4 h-4 mr-2" />
                {isInWishlist ? "Wishlisted" : "Wishlist"}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 