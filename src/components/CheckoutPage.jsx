// src/components/CheckoutPage.jsx
import { useState } from "react";
import { ArrowLeft, Lock, CreditCard } from "lucide-react";
import { products } from "../data/products";

export default function CheckoutPage({ cart, setCart, onNavigate, currency, formatPrice }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const cartItems = Object.entries(cart).map(([id, qty]) => {
    const product = products.find((p) => p.id === Number(id));
    return { ...product, qty };
  });

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // FIXED: Added e.preventDefault() to stop page reload
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setOrderPlaced(true);
      setCart({}); // Empty the cart
    }, 1000);
  };

  if (orderPlaced) {
    return (
      <section className="min-h-screen bg-white pt-20 pb-20 flex items-center justify-center px-4">
        <div className="text-center max-w-md w-full">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h1>
          <p className="text-gray-500 mb-8">Thank you for your purchase. A confirmation email has been sent to you.</p>
          <button 
            onClick={() => onNavigate("home")}
            className="w-full sm:w-auto bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-white pt-10 sm:pt-20 pb-32 sm:pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Back to Shop */}
        <button 
          onClick={() => onNavigate("shop")}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-gray-600 hover:text-blue-600 mb-8"
        >
          <ArrowLeft size={16} /> Back to Shop
        </button>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Shipping & Payment Form */}
          <div className="lg:col-span-2">
            <form id="checkout-form" onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Info */}
              <div className="bg-gray-50 rounded-2xl p-4 sm:p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    name="fullName" 
                    required 
                    placeholder="Full Name" 
                    onChange={handleChange}
                    className="px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 bg-white w-full"
                  />
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    placeholder="Email Address" 
                    onChange={handleChange}
                    className="px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 bg-white w-full"
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-gray-50 rounded-2xl p-4 sm:p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Shipping Address</h2>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    name="address" 
                    required 
                    placeholder="Street Address" 
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 bg-white"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      name="city" 
                      required 
                      placeholder="City" 
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 bg-white w-full"
                    />
                    <input 
                      type="text" 
                      name="zip" 
                      required 
                      placeholder="ZIP / Postal Code" 
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 bg-white w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-gray-50 rounded-2xl p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">Payment Information</h2>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="px-2 py-1 bg-gray-200 rounded">VISA</span>
                    <span className="px-2 py-1 bg-gray-200 rounded">MC</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="relative">
                    <CreditCard size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      type="text" 
                      name="cardNumber" 
                      required 
                      placeholder="Card Number" 
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 bg-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      name="expiry" 
                      required 
                      placeholder="MM/YY" 
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 bg-white w-full"
                    />
                    <input 
                      type="text" 
                      name="cvv" 
                      required 
                      placeholder="CVV" 
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 bg-white w-full"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:sticky lg:top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-14 h-14 rounded-lg object-cover" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900 truncate">{item.name}</p>
                      <p className="text-xs text-gray-500">Qty: {item.qty}</p>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">{formatPrice(item.price * item.qty)}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-2 mb-6">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-gray-900">{formatPrice(total)}</span>
              </div>

              <button 
                type="submit"
                form="checkout-form"
                onClick={handleSubmit}
                className="w-full bg-gray-900 text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
              >
                <Lock size={16} /> Place Order
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Checkout Button */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-200 p-4 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-gray-500">Total</p>
            <p className="text-xl font-bold text-gray-900">{formatPrice(total)}</p>
          </div>
          <button 
            type="submit"
            form="checkout-form"
            onClick={handleSubmit}
            className="flex-1 max-w-xs bg-gray-900 text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
          >
            <Lock size={16} /> Place Order
          </button>
        </div>
      </div>
    </section>
  );
}