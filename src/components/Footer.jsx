// src/components/Footer.jsx
import { Facebook, Instagram, Twitter } from "lucide-react";

const columns = [
  { title: "Shop", links: ["All Products", "Best Sellers", "New Arrivals", "Sale"] },
  { title: "Categories", links: ["Men", "Women", "Accessories", "Shoes", "Bags"] },
  { title: "Customer Service", links: ["Help Center", "Track Order", "Returns", "Shipping Info", "FAQ"] },
  { title: "Company", links: ["About Us", "Contact Us", "Privacy Policy", "Terms of Service"] },
];

export default function Footer({ currency, setCurrency }) {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-6 gap-10">
        <div className="lg:col-span-2">
          <p className="font-display text-2xl font-bold text-gray-900 mb-4">
            Ariesly<span className="text-blue-600">.</span>
          </p>
          <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-xs">
            Your one-stop shop for quality products at the best prices. We're
            here to make your shopping experience easy and enjoyable.
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-sm font-semibold text-gray-900 mb-4">{col.title}</p>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="text-sm font-semibold text-gray-900 mb-4">Secure Payments</p>
          <p className="text-sm text-gray-500 mb-4">We accept all major credit cards and other secure payment methods.</p>
          
          {/* Official Brand Logos using CDN Images */}
          <div className="flex flex-wrap gap-2">
            <span className="h-8 px-2.5 flex items-center justify-center bg-white border border-gray-200 rounded-md">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/visa.svg" alt="Visa" className="h-4" />
            </span>
            <span className="h-8 px-2.5 flex items-center justify-center bg-white border border-gray-200 rounded-md">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mastercard.svg" alt="Mastercard" className="h-5" />
            </span>
            <span className="h-8 px-2.5 flex items-center justify-center bg-white border border-gray-200 rounded-md">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/paypal.svg" alt="PayPal" className="h-5" />
            </span>
            <span className="h-8 px-2.5 flex items-center justify-center bg-white border border-gray-200 rounded-md">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/applepay.svg" alt="Apple Pay" className="h-5" />
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>© 2026 Ariesly. All rights reserved.</span>
          
          {/* CURRENCY SELECTOR */}
          <div className="flex items-center gap-4">
            <span className="cursor-pointer hover:text-blue-600 transition-colors">English</span>
            <select 
              value={currency} 
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-white border border-gray-300 rounded-md px-3 py-1.5 text-xs font-medium text-gray-700 cursor-pointer hover:border-blue-600 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
            >
              <option value="USD">USD ($)</option>
              <option value="PHP">PHP (₱)</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}