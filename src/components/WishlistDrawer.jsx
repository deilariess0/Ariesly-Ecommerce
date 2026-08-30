import { X, Heart, ShoppingCart } from "lucide-react";
import { useEffect } from "react";
import { products } from "../data/products";

export default function WishlistDrawer({ isOpen, onClose, wishlist, toggleWishlist, onAddToCart, onAddAndOpenCart, currency, formatPrice }) {
  const wishlistItems = products.filter((p) => wishlist.includes(p.id));

  // Safety fallback if formatPrice isn't passed yet
  const priceFormatter = formatPrice || ((price) => `$${price.toFixed(2)}`);

  // Lock body scroll when the wishlist is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Helper function to add to cart, close wishlist, and open cart
  const handleAddToCart = (id) => {
    // 1. Add the item to the cart
    if (onAddAndOpenCart) {
      onAddAndOpenCart(id); // Adds item & opens the cart drawer
    } else {
      onAddToCart(id);
    }
    
    // 2. Remove the item from the wishlist (it's "moved" now)
    toggleWishlist(id);
  };

  return (
    <div className={`fixed inset-0 z-[100] ${isOpen ? "block" : "hidden"}`}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      {/* Drawer - Full width on mobile, max-w-md on desktop */}
      <div className={`absolute right-0 top-0 h-full w-full sm:max-w-md bg-white shadow-2xl flex flex-col transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
            <Heart size={20} className="text-red-500" /> My Wishlist
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Close">
            <X size={24} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {wishlistItems.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">Your wishlist is empty.</p>
          ) : (
            wishlistItems.map((item) => (
              <div key={item.id} className="flex gap-4 items-center border-b border-gray-100 pb-4">
                <img src={item.image} alt={item.name} className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg object-cover" />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                  {/* Uses safe formatter */}
                  <p className="text-gray-500 text-sm font-bold">{priceFormatter(item.price)}</p>
                </div>
                <div className="flex items-center gap-2">
                  {/* Larger Touch Target */}
                  <button 
                    onClick={() => handleAddToCart(item.id)}
                    className="w-9 h-9 flex items-center justify-center bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100"
                    title="Add to Cart"
                  >
                    <ShoppingCart size={18} />
                  </button>
                  <button onClick={() => toggleWishlist(item.id)} className="w-9 h-9 flex items-center justify-center text-red-500 hover:text-red-700" title="Remove">
                    <X size={18} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}