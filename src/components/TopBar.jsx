import { Truck } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#1a1a1a] text-white text-xs h-10 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Truck size={14} className="text-white" />
          <span className="font-medium">Free shipping on orders over $50!</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-gray-300 font-medium">
          <a href="#" className="hover:text-white transition-colors">Help</a>
          <a href="#" className="hover:text-white transition-colors">Track Order</a>
          <a href="#" className="hover:text-white transition-colors">Returns</a>
        </div>
      </div>
    </div>
  );
}