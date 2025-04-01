import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import { useCart } from "../hooks/useCart";
import { Button } from "../components/ui/button";
import { ShoppingCart, Info, Search } from "lucide-react";
import { toast } from "sonner";
import { ItemDetailsModal } from "../components/ItemDetailsModal";
import { Input } from "../components/ui/input";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();
  const { addItem: addToCart } = useCart();
  const [selectedItem, setSelectedItem] = useState<typeof galleryImages[0] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryImages = [
    {
      id: "1",
      category: "Ceremonies",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Garden Ceremony",
      price: 2500,
      description: "A romantic outdoor ceremony surrounded by lush gardens and natural beauty.",
      features: [
        "Beautiful garden venue setup",
        "Floral arch and aisle decorations",
        "Seating for up to 100 guests",
        "Sound system and microphone",
        "Ceremony coordination"
      ]
    },
    {
      id: "2",
      category: "Receptions",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Elegant Reception",
      price: 3500,
      description: "A sophisticated reception with modern elegance and timeless charm.",
      features: [
        "Elegant table settings",
        "Centerpiece arrangements",
        "Lighting design",
        "Dance floor setup",
        "Reception coordination"
      ]
    },
    {
      id: "3",
      category: "Decor",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Floral Arrangements",
      price: 1800,
      description: "Stunning floral arrangements that bring natural beauty to your celebration.",
      features: [
        "Bridal bouquet",
        "Boutonnieres",
        "Centerpieces",
        "Aisle decorations",
        "Custom floral design"
      ]
    },
    {
      id: "4",
      category: "Couples",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Sunset Portrait",
      price: 1200,
      description: "Capture your love story with a romantic sunset photo session.",
      features: [
        "2-hour photo session",
        "Professional photographer",
        "All edited photos",
        "Online gallery",
        "Print release"
      ]
    },
    {
      id: "5",
      category: "Ceremonies",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Beachfront Vows",
      price: 2800,
      description: "Say 'I do' with the ocean as your backdrop in this stunning beach ceremony.",
      features: [
        "Beach venue setup",
        "Oceanfront ceremony arch",
        "Beach chairs and decor",
        "Sound system",
        "Ceremony coordination"
      ]
    },
    {
      id: "6",
      category: "Receptions",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Rustic Dining",
      price: 3200,
      description: "A charming rustic dining experience with warm ambiance and natural elements.",
      features: [
        "Rustic table settings",
        "Wooden centerpieces",
        "String lighting",
        "Buffet setup",
        "Reception coordination"
      ]
    },
    {
      id: "7",
      category: "Decor",
      image: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Table Settings",
      price: 1500,
      description: "Elegant table settings that create a sophisticated dining experience.",
      features: [
        "Table linens",
        "Charger plates",
        "Glassware",
        "Flatware",
        "Place cards"
      ]
    },
    {
      id: "8",
      category: "Couples",
      image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "First Dance",
      price: 900,
      description: "Make your first dance as a married couple truly special.",
      features: [
        "Dance floor setup",
        "Lighting effects",
        "Sound system",
        "Dance coordination",
        "Special effects"
      ]
    },
    
    
    {
      id: "9",
      category: "Details",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Wedding Details",
      price: 800,
      description: "Beautiful wedding rings to symbolize your eternal love.",
      features: [
        "Custom ring design",
        "High-quality materials",
        "Engraving service",
        "Ring box",
        "Insurance options"
      ]
    }
  ];

  const categories = ["All", "Ceremonies", "Receptions", "Decor", "Couples", "Details"];

  const filteredImages = galleryImages.filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (item: typeof galleryImages[0]) => {
    addToCart({
      id: item.id,
      name: item.title,
      image: item.image,
      price: item.price
    });
    toast.success("Added to cart", {
      description: `${item.title} has been added to your cart`,
      duration: 3000,
    });
  };

  return (
    <div className="page-transition-container">
      <section className="py-20 px-4 bg-rose/5 mt-16">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-rose/10 text-rose text-xs font-medium tracking-wide mb-3">
              Our Products & Services
            </span>
            <h1 className="text-4xl md:text-5xl font-serif mb-4">
              Our Products & Services
            </h1>
            <p className="text-charcoal/70 max-w-3xl mx-auto">
              Browse our collection of stunning events and be inspired for your special occasion.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100} className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal/50 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search by title or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 text-base border-rose/20 focus:border-rose focus:ring-rose"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full border transition-colors duration-300 ${
                  selectedCategory === category
                    ? "bg-rose text-white border-rose"
                    : "border-rose/20 hover:bg-rose hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </AnimatedSection>
        </div>
      </section>
      
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 50}>
                <div className="overflow-hidden rounded-lg shadow-sm group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                        <p className="text-sm font-medium text-rose/90 mb-1">{item.category}</p>
                        <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                        <p className="text-lg font-medium mb-4">R {item.price.toFixed(2)}</p>
                        <div className="flex gap-2">
                          <Button
                            variant="secondary"
                            size="sm"
                            className="flex-1"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAddToCart(item);
                            }}
                          >
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Add to Cart
                          </Button>
                          <Button
                            variant="secondary"
                            size="sm"
                            className="flex-1"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedItem(item);
                            }}
                          >
                            <Info className="w-4 h-4 mr-2" />
                            Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />

      {selectedItem && (
        <ItemDetailsModal
          item={{
            id: selectedItem.id,
            name: selectedItem.title,
            image: selectedItem.image,
            price: selectedItem.price,
            category: selectedItem.category,
            description: selectedItem.description,
            features: selectedItem.features
          }}
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          onAddToCart={() => handleAddToCart(selectedItem)}
        />
      )}
    </div>
  );
};

export default Gallery;
