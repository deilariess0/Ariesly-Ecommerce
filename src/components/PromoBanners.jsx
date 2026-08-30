export default function PromoBanners() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
      <div className="grid sm:grid-cols-2 gap-6">
        
        {/* Summer Sale Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-[#f0f5ff] p-8 sm:p-12 min-h-[260px] flex flex-col justify-center">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">Summer Sale</span>
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Up to 50% Off</h3>
          <p className="text-sm text-gray-600 max-w-xs mb-6 relative z-10">
            Don't miss out on our biggest sale of the season.
          </p>
          <a href="#products" className="inline-block bg-gray-900 text-white text-sm font-semibold px-6 py-3 rounded-full w-fit hover:bg-blue-600 transition-colors relative z-10">
            Shop Sale
          </a>
          
          {/* Image Container */}
          <div className="absolute inset-y-0 right-0 w-1/2">
            {/* REPLACE with your actual image import or URL */}
            <img 
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=400&auto=format&fit=crop" 
              alt="Summer Sale"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* New Arrivals Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-[#fcf9f5] p-8 sm:p-12 min-h-[260px] flex flex-col justify-center">
          <span className="text-xs font-bold tracking-widest uppercase text-gray-700 mb-3">New Arrivals</span>
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Fresh Styles Just In</h3>
          <p className="text-sm text-gray-600 max-w-xs mb-6 relative z-10">
            Check out the latest products added to our store.
          </p>
          <a href="#products" className="inline-block bg-gray-900 text-white text-sm font-semibold px-6 py-3 rounded-full w-fit hover:bg-blue-600 transition-colors relative z-10">
            Explore Now
          </a>
          
          {/* Image Container */}
          <div className="absolute inset-y-0 right-0 w-1/2">
            {/* REPLACE with your actual image import or URL */}
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=400&auto=format&fit=crop" 
              alt="New Arrivals"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}