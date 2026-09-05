import { useEffect, useState } from "react";

export default function Hero({ onNavigate }) {
  const [loaded, setLoaded] = useState(false);
  // State for the current background image index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of 3 background images
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop", // Original
      alt: "Fashion shopping bags"
    },
    {
      url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop", // Clothing store interior
      alt: "Clothing store"
    },
    {
      url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop", // Fashion model
      alt: "Fashion model"
    }
  ];

  useEffect(() => {
    // Triggers the animation after the component mounts
    const timer = setTimeout(() => setLoaded(true), 100);
    
    // AUTO-SLIDE: Move to the next slide every 5 seconds
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(slideInterval);
    };
  }, [slides.length]);

  // Function to scroll to the Featured Products section
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className="relative bg-white overflow-hidden bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url('${slides[currentSlide].url}')`
      }}
    >
      {/* Dark overlay to make white text pop */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Column: Text (NO WHITE BACKGROUND) */}
        <div className="flex flex-col items-start">
          
          <span 
            className={`inline-block text-sm font-semibold tracking-widest uppercase text-white mb-4 transition-all duration-700 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.9)" }}
          >
            New Collection
          </span>
          
          <h1 
            className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 transition-all duration-700 delay-100 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ textShadow: "0 4px 15px rgba(0, 0, 0, 0.8), 0 2px 5px rgba(0, 0, 0, 0.9)" }}
          >
            Find Everything
            <br />
            You Love
          </h1>
          
          <p 
            className={`text-white max-w-md mb-8 text-lg leading-relaxed transition-all duration-700 delay-200 ease-out font-semibold ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.9), 0 2px 5px rgba(0, 0, 0, 0.8)" }}
          >
            Discover top-quality products at unbeatable prices. Shop the latest
            trends and get them delivered to your door.
          </p>
          
          <div 
            className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <button
              onClick={scrollToProducts}
              className="bg-white text-gray-900 px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors shadow-lg"
            >
              Shop Now
            </button>
            
            <button
              onClick={() => onNavigate("shop")}
              className="bg-transparent border-2 border-white text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-white hover:text-gray-900 transition-colors shadow-md"
            >
              Explore Categories
            </button>
          </div>
        </div>

        {/* Right Column: Large Text */}
        <div className="relative hidden lg:flex justify-center items-center pointer-events-none select-none">
          <div className={`transition-all duration-1000 delay-200 ease-out ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}>
            <h2 
              className="font-display text-[12rem] leading-none font-bold text-white/90 tracking-tighter"
              style={{ 
                textShadow: "0 8px 25px rgba(0, 0, 0, 0.8)" 
              }}
            >
              ARIESLY.
            </h2>
          </div>
        </div>

      </div>

      {/* Slider Dots - Located at the bottom left/center to navigate manually */}
      <div className="relative flex justify-center gap-2 pb-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-8 bg-white" : "w-1.5 bg-gray-300 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}