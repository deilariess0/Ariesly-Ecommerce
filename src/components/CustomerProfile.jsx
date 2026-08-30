// src/components/CustomerProfile.jsx
import { useState } from "react";
import { X, User, Mail, Phone, MapPin, LogOut, Save } from "lucide-react";

export default function CustomerProfile({ isOpen, onClose, user }) {
  // Use the props passed from App.jsx, or fall back to defaults
  const [customer, setCustomer] = useState({
    name: user?.name || "Deil Aries Santos",
    email: user?.email || "deilariessantos@gmail.com",
    phone: "+63 912 345 6789",
    address: "Manila, Philippines",
    initials: user?.initials || "DS",
    image: user?.image || null, // <-- Accept the image prop
  });

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Update initials based on new name
    const newInitials = customer.name.split(" ").map(n => n[0]).join("").toUpperCase();
    setCustomer({ ...customer, initials: newInitials });
    
    // Close modal after saving
    onClose();
  };

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center ${isOpen ? "block" : "hidden"}`}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal - Responsive and Scrollable on Mobile */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          {/* Use image if available, otherwise show initials */}
          <div className="w-20 h-20 rounded-full overflow-hidden bg-blue-600 text-white flex items-center justify-center text-3xl font-bold mb-3 shadow-lg border-4 border-blue-100">
            {customer.image ? (
              <img 
                src={customer.image} 
                alt={customer.name} 
                className="w-full h-full object-cover"
              />
            ) : (
              customer.initials
            )}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center">{customer.name}</h2>
          <p className="text-sm text-gray-500 mt-1">Customer Profile</p>
        </div>

        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors">
          <X size={24} />
        </button>

        {/* Profile Form */}
        <form onSubmit={handleSave} className="space-y-4">
          
          <div className="relative">
            <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              name="name" 
              value={customer.name} 
              onChange={handleChange}
              placeholder="Full Name" 
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>

          <div className="relative">
            <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="email" 
              name="email" 
              value={customer.email} 
              onChange={handleChange}
              placeholder="Email Address" 
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>

          <div className="relative">
            <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              name="phone" 
              value={customer.phone} 
              onChange={handleChange}
              placeholder="Phone Number" 
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>

          <div className="relative">
            <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <textarea 
              name="address" 
              value={customer.address} 
              onChange={handleChange}
              placeholder="Shipping Address" 
              rows={3}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
            />
          </div>

          {/* Buttons - Mobile Friendly */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button 
              type="submit" 
              className="w-full sm:flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-500 transition-colors"
            >
              <Save size={18} /> Save Changes
            </button>
            
            <button 
              type="button" 
              onClick={onClose}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-5 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
            >
              <LogOut size={18} /> Logout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}