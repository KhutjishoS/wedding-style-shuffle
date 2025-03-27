import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Heart, Trash2 } from 'lucide-react';

interface WishlistItem {
  id: string;
  name: string;
  image: string;
  price: number;
}

interface WishlistProps {
  items: WishlistItem[];
  onRemoveItem: (id: string) => void;
}

export function Wishlist({ items, onRemoveItem }: WishlistProps) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Heart className="w-16 h-16 text-gray-400 mb-4" />
        <h3 className="text-xl font-semibold text-gray-600">Your wishlist is empty</h3>
        <p className="text-gray-500 mt-2">Add items you love to your wishlist</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden">
          <CardHeader>
            <div className="relative aspect-square">
              <img
                src={item.image}
                alt={item.name}
                className="object-cover w-full h-full"
              />
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2"
                onClick={() => onRemoveItem(item.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-lg">{item.name}</CardTitle>
            <p className="text-gray-600 mt-2">R {item.price.toFixed(2)}</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">View Details</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
} 