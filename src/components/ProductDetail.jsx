// src/components/ProductDetail.jsx
import { useState, useEffect } from "react";
import { ArrowLeft, Heart, ShoppingCart, Star, Minus, Plus } from "lucide-react";
import { products } from "../data/products";

export default function ProductDetail({ productId, onBack, onAddToCart, onToggleWishlist, wishlist, currency, formatPrice }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null); // Reserved for future gallery use

  // Find the product from the ID passed in
  const product = products.find((p) => p.id === Number(productId));

  useEffect(() => {
    // Scroll to top whenever the page changes
    window.scrollTo(0, 0);
    setQuantity(1);
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Product not found.</p>
      </div>
    );
  }

  const fullStars = Math.floor(product.rating);
  const hasHalf = product.rating % 1 !== 0;
  const isWishlisted = wishlist.includes(product.id);

  return (
    <section className="min-h-screen bg-white pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-blue-600 mb-8"
        >
          <ArrowLeft size={16} /> Back to Shop
        </button>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          
          {/* Left Column: Image */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden">
              {product.badge && (
                <span className="absolute top-4 left-4 z-10 bg-gray-900 text-white text-sm font-bold px-3 py-1 rounded-md">
                  {product.badge}
                </span>
              )}
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Product Info */}
          <div className="space-y-6">
            
            {/* Title & Rating */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">{product.name}</h1>
              
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={
                        i < fullStars || (i === fullStars && hasHalf)
                          ? "fill-amber-400 text-amber-400"
                          : "text-gray-300"
                      } 
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">({product.reviews} Reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-gray-900">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-lg text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
              )}
            </div>

            {/* Wishlist Button */}
            <button
              onClick={() => onToggleWishlist(product.id)}
              className="flex items-center gap-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100 transition-colors"
            >
              <Heart size={16} className={isWishlisted ? "fill-rose-500 text-rose-500" : "text-gray-400"} />
              {isWishlisted ? "Saved to Wishlist" : "Add to Wishlist"}
            </button>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-gray-900">Quantity:</span>
              <div className="flex items-center gap-3 border border-gray-300 rounded-full px-2 py-1">
                <button 
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center font-semibold text-gray-900">{quantity}</span>
                <button 
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => {
                for (let i = 0; i < quantity; i++) {
                  onAddToCart(product.id);
                }
              }}
              className="w-full sm:w-auto bg-gray-900 text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors text-lg"
            >
              <ShoppingCart size={20} /> Add to Cart
            </button>

            {/* Description */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Product Description</h3>
              <p className="text-gray-600 leading-relaxed">
                Experience the perfect blend of style and functionality with our {product.name}. 
                Designed with premium materials and exceptional craftsmanship, this piece is 
                built to last while keeping you looking your best. Perfect for everyday use 
                and special occasions alike.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}