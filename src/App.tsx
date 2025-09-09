import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Planning from "./pages/Planning";
import OurApproach from "./pages/OurApproach";
import OurTeam from "./pages/OurTeam";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import { WishlistPage } from "./pages/WishlistPage";
import { CartPage } from "./pages/CartPage";
import Consultation from "./pages/Consultation";
import Venues from "./pages/Venues";
import Photography from "./pages/Photography";
import Catering from "./pages/Catering";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/our-approach" element={<OurApproach />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/offerings" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/catering" element={<Catering />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
