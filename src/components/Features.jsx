import { Truck, ShieldCheck, RotateCcw, Headphones } from "lucide-react";

export default function Features({ formatPrice }) {
  // Use the formatPrice function to show the correct currency
  const items = [
    { icon: Truck, title: "Free Shipping", desc: `On all orders over ${formatPrice(50)}` },
    { icon: ShieldCheck, title: "Secure Payment", desc: "100% secure checkout" },
    { icon: RotateCcw, title: "Easy Returns", desc: "30-day return policy" },
    { icon: Headphones, title: "24/7 Support", desc: "We're here to help" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.05)] grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-gray-100">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-center gap-3 px-6 py-7">
            <Icon size={24} className="text-gray-800 shrink-0" strokeWidth={1.5} />
            <div>
              <p className="text-sm font-semibold text-gray-900 leading-tight">{title}</p>
              <p className="text-xs text-gray-500 leading-tight mt-0.5">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}