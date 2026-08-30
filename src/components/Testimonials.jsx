import { Star } from "lucide-react";
import { testimonials } from "../data/products";

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
        What Our Customers Say
      </h2>
      
      <div className="grid sm:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="border border-gray-200 rounded-2xl p-8 bg-white hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-5">
              
              {/* Real profile picture (Uses initials as a fallback) */}
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center shrink-0">
                {t.image ? (
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-sm font-bold text-gray-700">
                    {t.initials}
                  </span>
                )}
              </div>

              <div>
                <p className="text-sm font-bold text-gray-900">{t.name}</p>
                {/* Rating */}
                <div className="flex gap-0.5 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 leading-relaxed">"{t.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}