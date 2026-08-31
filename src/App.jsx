import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FeaturedProducts from "./components/FeaturedProducts";
import PromoBanners from "./components/PromoBanners";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import ShopPage from "./components/ShopPage";
import CartDrawer from "./components/CartDrawer";
import WishlistDrawer from "./components/WishlistDrawer";
import CustomerProfile from "./components/CustomerProfile";
import CheckoutPage from "./components/CheckoutPage";
import About from "./components/About";
import Contact from "./components/Contact";
import ProductDetail from "./components/ProductDetail"; // <-- ADDED IMPORT
import { products } from "./data/products";

// Correct Import Path for the Image
import userImage from "./components/assets/image2.png";

export default function App() {
  const [cart, setCart] = useState({});
  const [wishlist, setWishlist] = useState([]);
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // NEW: State for Product Detail Page
  const [selectedProductId, setSelectedProductId] = useState(null);
  
  // State for search
  const [searchQuery, setSearchQuery] = useState("");

  // State for currency
  const [currency, setCurrency] = useState("USD");

  // State for toggling drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const addToCart = (id) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const addToCartAndOpenCart = (id) => {
    addToCart(id);
    setIsWishlistOpen(false);
    setIsCartOpen(true);
  };

  const toggleWishlist = (id) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]));
  };

  // Utility to format prices based on selected currency
  const formatPrice = (price) => {
    if (currency === "PHP") return `₱${(price * 58.50).toFixed(2)}`;
    return `$${price.toFixed(2)}`;
  };

  const cartCount = useMemo(() => Object.values(cart).reduce((a, b) => a + b, 0), [cart]);
  const cartTotal = useMemo(
    () =>
      Object.entries(cart).reduce((sum, [id, qty]) => {
        const product = products.find((p) => p.id === Number(id));
        return sum + (product ? product.price * qty : 0);
      }, 0),
    [cart]
  );

  const filteredProducts = useMemo(() => {
    let result = products;
    
    // Filter by category
    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== "") {
      result = result.filter((p) => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return result;
  }, [selectedCategory, searchQuery]);

  // Function to open Product Detail Page
  const handleViewProduct = (id) => {
    setSelectedProductId(id);
    setCurrentPage("product");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        cartCount={cartCount} 
        cartTotal={cartTotal} 
        wishlistCount={wishlist.length} 
        onNavigate={setCurrentPage}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cart={cart}
        setCart={setCart}
        wishlist={wishlist}
        toggleWishlist={toggleWishlist}
        onAddToCart={addToCart}
        setIsCartOpen={setIsCartOpen}
        setIsWishlistOpen={setIsWishlistOpen}
        setIsProfileOpen={setIsProfileOpen}
        addToCartAndOpenCart={addToCartAndOpenCart}
        currency={currency}
        formatPrice={formatPrice}
        
        // Pass the correct image to Navbar
        user={{ 
          name: "Deil Aries Santos", 
          initials: "DS",
          image: userImage
        }}
      />
      
      {/* Conditional Rendering: Home, Shop, About, Contact, Product, or Checkout */}
      {currentPage === "home" ? (
        <>
          <Hero onNavigate={setCurrentPage} />
          
          <Features formatPrice={formatPrice} />
          
          <FeaturedProducts 
            wishlist={wishlist} 
            onToggleWishlist={toggleWishlist} 
            onAddToCart={addToCart} 
            onViewAll={() => {
              setSelectedCategory("All");
              setCurrentPage("shop");
            }}
            currency={currency}       
            formatPrice={formatPrice} 
            onViewProduct={handleViewProduct}
          />
          <PromoBanners />
          <Testimonials />
          <Newsletter />
        </>
      ) : currentPage === "shop" ? (
        <ShopPage 
          wishlist={wishlist} 
          onToggleWishlist={toggleWishlist} 
          onAddToCart={addToCart} 
          onNavigate={setCurrentPage}
          products={filteredProducts}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          currency={currency}
          formatPrice={formatPrice}
          onViewProduct={handleViewProduct}
        />
      ) : currentPage === "product" ? (
        <ProductDetail 
          productId={selectedProductId}
          onBack={() => setCurrentPage("shop")}
          onAddToCart={addToCart}
          onToggleWishlist={toggleWishlist}
          wishlist={wishlist}
          currency={currency}
          formatPrice={formatPrice}
        />
      ) : currentPage === "about" ? (
        <About onNavigate={setCurrentPage} />
      ) : currentPage === "contact" ? (
        <Contact onNavigate={setCurrentPage} />
      ) : currentPage === "checkout" ? (
        <CheckoutPage 
          cart={cart} 
          setCart={setCart} 
          onNavigate={setCurrentPage}
          currency={currency}
          formatPrice={formatPrice}
        />
      ) : null}
      
      <Footer currency={currency} setCurrency={setCurrency} />

      {/* Drawers & Modals */}
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart} 
        setCart={setCart} 
        onCheckout={() => {
          setIsCartOpen(false); // Close the cart drawer
          setCurrentPage("checkout"); // Open the checkout page
        }}
        currency={currency}
        formatPrice={formatPrice}
      />

      <WishlistDrawer 
        isOpen={isWishlistOpen} 
        onClose={() => setIsWishlistOpen(false)} 
        wishlist={wishlist} 
        toggleWishlist={toggleWishlist} 
        onAddToCart={addToCart}
        onAddAndOpenCart={addToCartAndOpenCart} 
        currency={currency}
        formatPrice={formatPrice}
      />

      <CustomerProfile 
        isOpen={isProfileOpen} 
        onClose={() => setIsProfileOpen(false)} 
        user={{ 
          name: "Deil Aries Santos", 
          initials: "DS", 
          image: userImage 
        }}
      />
    </div>
  );
}