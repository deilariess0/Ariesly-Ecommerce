import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function FeaturedProducts({ wishlist, onToggleWishlist, onAddToCart, onViewAll, currency, formatPrice, onViewProduct }) {
  // Only show the first 5 products on the homepage
  const featuredProducts = products.slice(0, 5);

  return (
    <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 scroll-mt-24">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-4">
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          Featured Products
        </h2>
        
        <button 
          onClick={onViewAll}
          className="hidden sm:flex items-center gap-1 text-sm font-semibold text-gray-900 hover:text-blue-600 hover:gap-2 transition-all"
        >
          View All Products <ArrowRight size={16} />
        </button>
      </div>

      {/* Grid Section */}
      <div className="flex overflow-x-auto gap-4 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 lg:grid-cols-5 sm:gap-6 sm:pb-0 snap-x">
        {featuredProducts.map((product) => (
          <div key={product.id} className="min-w-[75%] xs:min-w-[60%] sm:min-w-0 snap-start">
            <ProductCard
              product={product}
              isWishlisted={wishlist.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
              onAddToCart={onAddToCart}
              currency={currency}
              formatPrice={formatPrice}
              onViewProduct={onViewProduct} // <-- ADDED
            />
          </div>
        ))}
      </div>

      {/* Mobile "View All" Button */}
      <div className="mt-8 sm:hidden">
        <button 
          onClick={onViewAll}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-900 px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
        >
          View All Products <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
