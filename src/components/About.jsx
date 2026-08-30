// src/components/About.jsx
import { ArrowLeft, Users, Target, Heart } from "lucide-react";

export default function About({ onNavigate }) {
  return (
    <section className="min-h-screen bg-white pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <button 
          onClick={() => onNavigate("home")}
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-blue-600 mb-8"
        >
          <ArrowLeft size={16} /> Back to Home
        </button>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Ariesly</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Your one-stop shop for quality products at the best prices. We're here to make your shopping experience easy and enjoyable.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-gray-50 p-6 rounded-2xl">
            <Users size={32} className="text-blue-600 mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Our Mission</h3>
            <p className="text-sm text-gray-500">To provide the best products with exceptional customer service.</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-2xl">
            <Target size={32} className="text-blue-600 mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Our Vision</h3>
            <p className="text-sm text-gray-500">To become the leading e-commerce platform in the Philippines.</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl">
            <Heart size={32} className="text-blue-600 mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Our Values</h3>
            <p className="text-sm text-gray-500">Honesty, quality, and putting our customers first.</p>
          </div>
        </div>

        <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to start shopping?</h2>
          <button 
            onClick={() => onNavigate("shop")}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}