// src/components/ProductDetail.jsx
import { useState, useEffect } from "react";
import { ArrowLeft, Heart, ShoppingCart, Star, Minus, Plus, Lock, ArrowRight } from "lucide-react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductDetail({ productId, onBack, onAddToCart, onToggleWishlist, wishlist, currency, formatPrice, onCheckout, onViewProduct }) {
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === Number(productId));

  const otherProducts = products.filter((p) => p.id !== Number(productId)).slice(0, 4);

  useEffect(() => {
    // INSTANT jump to top (no animation!)
    window.scrollTo({ top: 0, behavior: "instant" }); 
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

  const handleCheckoutNow = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product.id);
    }
    onCheckout();
  };

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

          <div className="space-y-6">
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

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-gray-900">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-lg text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
              )}
            </div>

            <button
              onClick={() => onToggleWishlist(product.id)}
              className="flex items-center gap-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100 transition-colors"
            >
              <Heart size={16} className={isWishlisted ? "fill-rose-500 text-rose-500" : "text-gray-400"} />
              {isWishlisted ? "Saved to Wishlist" : "Add to Wishlist"}
            </button>

            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-gray-900">Quantity:</span>
              <div className="flex items-center gap-3 border border-gray-300 rounded-full px-2 py-1">
                <button 
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100"
                >
                  <Minus size={14} />
                </button>
                <span className="w-6 text-center font-semibold text-gray-900">{quantity}</span>
                <button 
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <div className="flex flex-row gap-2 w-full">
              <button
                onClick={() => {
                  for (let i = 0; i < quantity; i++) {
                    onAddToCart(product.id);
                  }
                }}
                className="flex-1 bg-gray-100 text-gray-900 px-4 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors text-sm"
              >
                <ShoppingCart size={16} /> Add to Cart
              </button>

              <button
                onClick={handleCheckoutNow}
                className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-blue-500 transition-colors text-sm"
              >
                <Lock size={16} /> Checkout
              </button>
            </div>

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

        {/* "YOU MIGHT ALSO LIKE" */}
        <div className="mt-16 border-t border-gray-200 pt-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">You Might Also Like</h2>
            
            <button
              onClick={onBack}
              className="hidden sm:flex items-center gap-1 text-sm font-semibold text-gray-900 hover:text-blue-600 hover:gap-2 transition-all"
            >
              View All Products <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {otherProducts.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                isWishlisted={wishlist.includes(item.id)}
                onToggleWishlist={onToggleWishlist}
                onAddToCart={onAddToCart}
                currency={currency}
                formatPrice={formatPrice}
                onViewProduct={onViewProduct}
              />
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <button 
              onClick={onBack}
              className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-900 px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
            >
              View All Products <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}