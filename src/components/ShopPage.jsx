// src/components/ShopPage.jsx
import { ArrowLeft, X, Search } from "lucide-react";
import ProductCard from "./ProductCard";

// Define the available categories here
const categories = ["All", "Men", "Women", "Accessories", "Shoes", "Bags"];

export default function ShopPage({ 
  wishlist, 
  onToggleWishlist, 
  onAddToCart, 
  onNavigate,
  products,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  setSearchQuery,
  currency,
  formatPrice
}) {
  return (
    <section className="min-h-screen bg-white pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col gap-4 mb-8">
          <div>
            <h1 className="font-display text-2xl sm:text-4xl font-bold text-gray-900">
              {searchQuery ? `Results for "${searchQuery}"` : (selectedCategory === "All" ? "All Products" : selectedCategory)}
            </h1>
            <p className="mt-2 text-gray-500 text-sm">
              Browse our full collection of {products.length} items.
            </p>
          </div>
          
          {/* Back to Home Button - Full width on mobile */}
          <button 
            onClick={() => onNavigate("home")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Home
          </button>
        </div>

        {/* Mobile Search Bar (Only shows on small screens) */}
        <div className="sm:hidden mb-6">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-full pl-10 pr-4 py-3 text-sm bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
            />
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Category Filter Bar - Allow horizontal scrolling on mobile */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                onSelectCategory(cat);
                setSearchQuery(""); // Clear search when switching category
              }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                selectedCategory === cat && !searchQuery
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
          
          {/* Clear Search Button */}
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-colors bg-red-50 text-red-600 hover:bg-red-100 flex items-center gap-1"
            >
              <X size={14} /> Clear Search
            </button>
          )}
        </div>

        {/* Full Grid - Adjusted for mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlist.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
                onAddToCart={onAddToCart}
                currency={currency}         // <-- Passed down
                formatPrice={formatPrice}   // <-- Passed down
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 mt-10">
              No products found matching "{searchQuery}".
            </p>
          )}
        </div>

      </div>
    </section>
  );
}