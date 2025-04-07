import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { ShoppingCart, Heart, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2, Minimize2 } from 'lucide-react';

interface ItemDetailsModalProps {
  item: {
    id: string;
    name: string;
    image: string;
    images?: string[];
    price: number;
    category: string;
    description?: string;
    features?: string[];
  };
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: () => void;
  onAddToWishlist?: () => void;
  isInWishlist?: boolean;
}

export function ItemDetailsModal({
  item,
  isOpen,
  onClose,
  onAddToCart,
  onAddToWishlist,
  isInWishlist,
}: ItemDetailsModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const images = item.images || [item.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
    setZoomLevel(isZoomed ? 1 : 2);
    setPosition({ x: 0, y: 0 });
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (isZoomed) {
      e.preventDefault();
      const delta = e.deltaY * -0.01;
      setZoomLevel((prev) => Math.min(Math.max(prev + delta, 1), 3));
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isZoomed) {
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isZoomed) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`${isFullscreen ? 'max-w-[95vw] max-h-[95vh]' : 'max-w-4xl'}`}>
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">{item.name}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`relative ${isFullscreen ? 'aspect-auto h-[80vh]' : 'aspect-square'}`}>
            <div 
              className="relative w-full h-full overflow-hidden rounded-lg"
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={() => setDragStart({ x: 0, y: 0 })}
            >
              <img
                src={images[currentImageIndex]}
              alt={item.name}
                className={`object-contain w-full h-full transition-transform duration-300 ${
                  isZoomed ? 'cursor-move' : 'cursor-zoom-in'
                }`}
                style={{
                  transform: `scale(${zoomLevel}) translate(${position.x}px, ${position.y}px)`,
                  transformOrigin: 'center center'
                }}
                onClick={toggleZoom}
              />
              {images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}
              <div className="absolute top-2 right-2 flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-white/90 hover:bg-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFullscreen();
                  }}
                >
                  {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                </Button>
            <Button
              variant="ghost"
              size="icon"
                  className="bg-white/90 hover:bg-white"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute bottom-2 right-2 bg-white/90 hover:bg-white"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleZoom();
                }}
              >
                {isZoomed ? <ZoomOut className="h-4 w-4" /> : <ZoomIn className="h-4 w-4" />}
              </Button>
            </div>
            {images.length > 1 && (
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentImageIndex === index ? 'bg-rose w-4' : 'bg-rose/50'
                    }`}
                  />
                ))}
              </div>
            )}
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
              {onAddToWishlist && (
              <Button
                variant={isInWishlist ? "default" : "outline"}
                className="flex-1"
                onClick={onAddToWishlist}
              >
                <Heart className="w-4 h-4 mr-2" />
                {isInWishlist ? "Wishlisted" : "Wishlist"}
              </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 