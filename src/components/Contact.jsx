// src/components/Contact.jsx
import { useState } from "react";
import { ArrowLeft, Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending message
    setTimeout(() => setSent(true), 1000);
  };

  if (sent) {
    return (
      <section className="min-h-screen bg-white pt-20 pb-20 flex items-center justify-center px-4">
        <div className="text-center max-w-md w-full">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h1>
          <p className="text-gray-500 mb-8">Thank you for reaching out. We'll get back to you within 24 hours.</p>
          <button 
            onClick={() => onNavigate("home")}
            className="w-full sm:w-auto bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-white pt-10 sm:pt-20 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        
        <button 
          onClick={() => onNavigate("home")}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-gray-600 hover:text-blue-600 mb-8"
        >
          <ArrowLeft size={16} /> Back to Home
        </button>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-10">We'd love to hear from you! Reach out to us anytime.</p>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                <Mail size={24} className="text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Email Us</p>
                <p className="text-sm text-gray-500">support@ariesly.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                <Phone size={24} className="text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Call Us</p>
                <p className="text-sm text-gray-500">+63 912 345 6789</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                <MapPin size={24} className="text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Visit Us</p>
                <p className="text-sm text-gray-500">Manila, Philippines</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-4 sm:p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  placeholder="Your Name" 
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 bg-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="your@email.com" 
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">Message</label>
                <textarea 
                  name="message" 
                  required 
                  rows={5}
                  placeholder="How can we help you?" 
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 bg-white resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}