import { Heart, ShoppingCart, Star } from "lucide-react";

export default function ProductCard({ product, isWishlisted, onToggleWishlist, onAddToCart, currency, formatPrice }) {
  const { id, name, price, originalPrice, rating, reviews, image, badge } = product;
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  return (
    <div className="group bg-white rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image Area */}
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        {badge && (
          <span className="absolute top-3 left-3 z-10 bg-gray-900 text-white text-[11px] font-bold px-2 py-1 rounded-md">
            {badge}
          </span>
        )}
        
        {/* Wishlist Heart */}
        <button
          onClick={() => onToggleWishlist(id)}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 transition-transform"
          aria-label="Toggle wishlist"
        >
          <Heart 
            size={15} 
            className={isWishlisted ? "fill-rose-500 text-rose-500" : "text-gray-400 hover:text-rose-500 transition-colors"} 
          />
        </button>

        {/* Real Product Image */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-sm font-semibold text-gray-900 truncate mb-1">{name}</h3>

        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={13}
              className={
                i < fullStars || (i === fullStars && hasHalf)
                  ? "fill-amber-400 text-amber-400"
                  : "text-gray-200"
              }
            />
          ))}
          <span className="text-xs text-gray-400 ml-1">({reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4 mt-auto">
          {/* UPDATED: Use formatPrice */}
          <span className="text-lg font-bold text-gray-900">
            {formatPrice(price)}
          </span>
          {originalPrice && (
            <span className="text-xs text-gray-400 line-through">{formatPrice(originalPrice)}</span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart(id)}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-full py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
        >
          <ShoppingCart size={15} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}