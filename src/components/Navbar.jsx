import { useEffect, useState } from "react";
import { Search, Heart, ShoppingCart, Menu, X, ChevronDown, Truck } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Shop", href: "#products" },
  { label: "Categories", href: "#", dropdown: true },
  { label: "About Us", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar({ 
  cartCount, 
  cartTotal, 
  wishlistCount, 
  onNavigate,
  onSelectCategory,
  searchQuery,
  setSearchQuery,
  setIsCartOpen,
  setIsWishlistOpen,
  setIsProfileOpen,
  currency,
  formatPrice,
  user = { name: "Deil Aries Santos", initials: "DS" } // Default profile
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // GLASSMORPHISM
  const shellClasses = scrolled
    ? "bg-white/80 backdrop-blur-xl border-b border-white/30 shadow-[0_1px_20px_rgba(0,0,0,0.08)]"
    : "bg-white/30 backdrop-blur-md border-b border-white/20";

  const textClasses = "text-gray-900";
  const iconHover = "hover:bg-black/5";

  // UPDATED NAVIGATION LOGIC
  const handleNavigate = (label) => {
    if (onNavigate) {
      if (label === "Home") {
        onNavigate("home");
        window.scrollTo({ top: 0, behavior: "smooth" }); // <-- Scrolls to top smoothly
      }
      else if (label === "Shop") onNavigate("shop");
      else if (label === "About Us") onNavigate("about");
      else if (label === "Contact") onNavigate("contact");
    }
  };

  const handleCategorySelect = (category) => {
    if (onSelectCategory) onSelectCategory(category);
    if (onNavigate) onNavigate("shop");
    setCategoryOpen(false);
    setMobileCategoryOpen(false);
    setMobileOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onNavigate("shop");
  };

  return (
    <>
      {/* TOPBAR */}
      <div className="bg-[#1a1a1a]/90 backdrop-blur-md text-white text-xs h-10 flex items-center z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Truck size={14} className="text-white" />
            {/* UPDATED: Use formatPrice to convert $50 */}
            <span>Free shipping on orders over {formatPrice(50)}!</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-gray-300 font-medium">
            <a href="#" className="hover:text-white transition-colors">Help</a>
            <a href="#" className="hover:text-white transition-colors">Track Order</a>
            <a href="#" className="hover:text-white transition-colors">Returns</a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR - GLASS */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${shellClasses}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-[72px] flex items-center justify-between gap-4">
          
          {/* CLICKING LOGO SCROLLS TO TOP */}
          <button 
            onClick={() => { 
              handleNavigate("Home"); 
              setSearchQuery(""); 
              window.scrollTo({ top: 0, behavior: "smooth" }); // <-- Additional scroll
            }}
            className={`font-display text-2xl font-bold tracking-tight ${textClasses}`}
          >
            Ariesly<span className="text-blue-600">.</span>
          </button>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative" onMouseEnter={() => setCategoryOpen(true)} onMouseLeave={() => setCategoryOpen(false)}>
                  <button className={`flex items-center gap-1 ${textClasses} hover:text-blue-600 transition-colors`}>
                    {link.label} <ChevronDown size={14} />
                  </button>
                  {categoryOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-44">
                      <div className="bg-white/90 backdrop-blur-xl rounded-xl shadow-lg border border-white/50 py-2 text-gray-700">
                        {["Men", "Women", "Accessories", "Shoes", "Bags"].map((c) => (
                          <button key={c} onClick={() => handleCategorySelect(c)} className="block w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                            {c}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button key={link.label} onClick={() => handleNavigate(link.label)} className={`${textClasses} hover:text-blue-600 transition-colors`}>
                  {link.label}
                </button>
              )
            )}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            {/* Controlled Search Box */}
            <form onSubmit={handleSearchSubmit} className="hidden md:flex items-center relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search products..."
                className="w-48 lg:w-64 rounded-full pl-4 pr-9 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 bg-white/70 border border-white/30"
              />
              <button type="submit" className="absolute right-3 text-gray-500 hover:text-blue-600">
                <Search size={16} />
              </button>
            </form>

            {/* PROFILE IMAGE BUTTON */}
            <button 
              onClick={() => setIsProfileOpen(true)} 
              className={`relative w-9 h-9 rounded-full ${iconHover} transition-all border-2 border-blue-500 overflow-hidden`} 
              aria-label="Account"
            >
              {user.image ? (
                <img 
                  src={user.image} 
                  alt={user.name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                  {user.initials}
                </div>
              )}
            </button>

            <button onClick={() => setIsWishlistOpen(true)} className={`relative p-2 rounded-full ${textClasses} ${iconHover} transition-colors`} aria-label="Wishlist">
              <Heart size={20} />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button onClick={() => setIsCartOpen(true)} className={`relative flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full ${textClasses} ${iconHover} transition-colors`}>
              <span className="relative">
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-blue-600 text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </span>
              
              {/* UPDATED TO USE formatPrice */}
              <span className="hidden sm:inline text-sm font-semibold">{formatPrice(cartTotal)}</span>
            </button>

            <button className={`lg:hidden p-2 rounded-full ${textClasses} ${iconHover} transition-colors`} onClick={() => setMobileOpen((v) => !v)} aria-label="Menu">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3 text-gray-700">
            <form onSubmit={handleSearchSubmit} className="relative mb-2">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search products..."
                className="w-full rounded-full pl-4 pr-9 py-2 text-sm bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Search size={16} />
              </button>
            </form>

            {navLinks.map((link) => 
              link.dropdown ? (
                <div key={link.label}>
                  {/* Categories Button */}
                  <button 
                    onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
                    className="w-full flex items-center justify-between py-1.5 text-sm font-medium hover:text-blue-600"
                  >
                    <span>Categories</span>
                    <ChevronDown size={14} className={`transition-transform ${mobileCategoryOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Category Options (Only shows if open) */}
                  {mobileCategoryOpen && (
                    <div className="pl-4 space-y-2 mt-2 mb-2 border-l-2 border-gray-200">
                      {["Men", "Women", "Accessories", "Shoes", "Bags"].map((c) => (
                        <button 
                          key={c}
                          onClick={() => handleCategorySelect(c)}
                          className="block text-sm text-gray-600 hover:text-blue-600"
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button 
                  key={link.label} 
                  onClick={() => { 
                    handleNavigate(link.label); 
                    setMobileOpen(false); 
                    setSearchQuery(""); 
                    if (link.label === "Home") window.scrollTo({ top: 0, behavior: "smooth" }); // <-- Scrolls on mobile too
                  }} 
                  className="block py-1.5 text-sm font-medium hover:text-blue-600 w-full text-left"
                >
                  {link.label}
                </button>
              )
            )}
          </div>
        )}
      </header>
    </>
  );
}