import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center gap-6 justify-between">
        
        {/* Text Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
            <Mail size={22} />
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-lg">Subscribe to our Newsletter</p>
            <p className="text-sm text-gray-500 mt-1">Get updates on new arrivals, special offers, and more.</p>
          </div>
        </div>

        {/* Form Section - Flex-col on mobile, Row on Desktop */}
        <form
          className="flex flex-col sm:flex-row w-full md:w-auto gap-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="Enter your email address"
            className="w-full sm:flex-1 md:w-80 rounded-full px-5 py-3 text-sm bg-white border border-gray-300 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-gray-400"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-gray-900 text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-blue-600 transition-colors shrink-0"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}