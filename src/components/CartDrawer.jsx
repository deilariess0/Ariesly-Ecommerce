import { X, Trash2, ShoppingBag, Plus, Minus } from "lucide-react";
import { useEffect } from "react";
import { products } from "../data/products";

export default function CartDrawer({ isOpen, onClose, cart, setCart, onCheckout, currency, formatPrice }) {
  const cartItems = Object.entries(cart).map(([id, qty]) => {
    const product = products.find((p) => p.id === Number(id));
    return { ...product, qty };
  });

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Lock body scroll when the cart is open
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

  const removeItem = (id) => {
    const newCart = { ...cart };
    delete newCart[id];
    setCart(newCart);
  };

  const increaseQty = (id) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const decreaseQty = (id) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[id] > 1) {
        newCart[id] -= 1;
      } else {
        delete newCart[id]; // Remove if quantity hits 0
      }
      return newCart;
    });
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
            <ShoppingBag size={20} /> Your Cart
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Close">
            <X size={24} />
          </button>
        </div>

        {/* Items - Added extra bottom padding so items don't hide behind mobile button */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 pb-40 sm:pb-6">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 items-center border-b border-gray-100 pb-4">
                <img src={item.image} alt={item.name} className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg object-cover" />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                  <p className="text-gray-500 text-sm">{formatPrice(item.price)}</p>
                  
                  {/* Quantity Controls - Larger touch targets */}
                  <div className="flex items-center gap-2 mt-2">
                    <button 
                      onClick={() => decreaseQty(item.id)}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="text-sm font-medium text-gray-900 w-6 text-center">{item.qty}</span>
                    <button 
                      onClick={() => increaseQty(item.id)}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                <button onClick={() => removeItem(item.id)} className="p-2 text-red-500 hover:text-red-700" aria-label="Remove">
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer for Desktop */}
        {cartItems.length > 0 && (
          <div className="hidden sm:block p-6 border-t border-gray-200 bg-white">
            <div className="flex justify-between mb-4">
              <span className="font-semibold text-gray-900">Total</span>
              <span className="font-bold text-gray-900">{formatPrice(total)}</span>
            </div>
            
            <button 
              onClick={onCheckout}
              className="w-full bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>

      {/* Mobile Sticky Checkout Bar (Shows only on mobile) */}
      {cartItems.length > 0 && (
        <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-[110]">
          <div className="flex justify-between items-center mb-3">
            <span className="font-semibold text-gray-900">Total</span>
            <span className="font-bold text-gray-900 text-lg">{formatPrice(total)}</span>
          </div>
          <button 
            onClick={onCheckout}
            className="w-full bg-gray-900 text-white py-3.5 rounded-full font-semibold hover:bg-blue-600 transition-colors"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}