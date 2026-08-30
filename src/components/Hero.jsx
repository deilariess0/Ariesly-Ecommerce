import { useEffect, useState } from "react";

export default function Hero({ onNavigate }) { // <-- Accept onNavigate
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Triggers the animation after the component mounts
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Function to scroll to the Featured Products section
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Column: Text with Animations */}
        <div className="flex flex-col items-start">
          <span 
            className={`inline-block text-sm font-semibold tracking-widest uppercase text-blue-600 mb-4 transition-all duration-700 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            New Collection
          </span>
          
          <h1 
            className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6 transition-all duration-700 delay-100 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Find Everything
            <br />
            You Love
          </h1>
          
          <p 
            className={`text-gray-600 max-w-md mb-8 text-lg leading-relaxed transition-all duration-700 delay-200 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Discover top-quality products at unbeatable prices. Shop the latest
            trends and get them delivered to your door.
          </p>
          
          <div 
            className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* UPDATED: Shop Now scrolls to #products */}
            <button
              onClick={scrollToProducts}
              className="bg-gray-900 text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-black transition-colors shadow-lg"
            >
              Shop Now
            </button>
            
            {/* UPDATED: Explore Categories still goes to Shop page */}
            <button
              onClick={() => onNavigate("shop")}
              className="border border-gray-300 text-gray-900 px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-50 transition-colors"
            >
              Explore Categories
            </button>
          </div>
          
          {/* Slider dots */}
          <div 
            className={`flex gap-2 mt-10 transition-all duration-700 delay-500 ease-out ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="h-1.5 w-8 rounded-full bg-gray-900 transition-all" />
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
          </div>
        </div>

        {/* Right Column: Image & Badge with Animations */}
        <div className="relative flex justify-center lg:justify-end">
          <div className={`relative w-full max-w-lg transition-all duration-1000 delay-200 ease-out ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}>
            
            {/* 
              UPDATED IMAGE: This matches the beige/tan bag style from your design.
            */}
            <img
              src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop"
              alt="Featured Collection"
              className="w-full h-auto object-cover rounded-3xl shadow-xl"
            />

            {/* 50% Off Badge with Pop Animation */}
            <div className={`absolute -top-6 -right-4 sm:-right-6 w-24 h-24 rounded-full bg-blue-600 text-white flex flex-col items-center justify-center text-center shadow-xl rotate-12 transition-all duration-700 delay-500 ease-out ${
              loaded ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}>
              <span className="text-[10px] font-medium leading-none uppercase">Up to</span>
              <span className="text-2xl font-extrabold leading-tight">50%</span>
              <span className="text-[10px] font-medium leading-none uppercase">Off</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}