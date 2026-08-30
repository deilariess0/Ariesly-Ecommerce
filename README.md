# Ariesly — E-Commerce Storefront

A modern, responsive e-commerce website built with React, Tailwind CSS, and Vite. Ariesly provides users with a simple shopping experience for discovering products, browsing categories, managing their cart, and checking out.

## ✨ Features

- **Dynamic Product Catalog:** Browse products across multiple categories (Men, Women, Accessories, Shoes, Bags).
- **Cart & Wishlist:** Add items to your cart, adjust quantities, and save favorites to your wishlist.
- **Currency Switching:** Seamlessly switch between USD ($) and Philippine Pesos (₱) with real-time price formatting.
- **Search & Filtering:** Instantly search products or filter by category.
- **Secure Checkout:** A clean, responsive checkout flow with an order summary.
- **User Profile:** Built-in user profile modal to manage customer details.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop devices.
- **Glassmorphism UI:** Features a sleek, frosted-glass navbar that transitions on scroll.

## Project structure

```
src/
  components/
    TopBar.jsx             announcement bar
    Navbar.jsx              glass navbar, search, cart/wishlist, mobile menu
    Hero.jsx                 hero banner
    Features.jsx             shipping/payment/returns/support strip
    ProductCard.jsx          single product card
    FeaturedProducts.jsx     product grid
    PromoBanners.jsx         summer sale / new arrivals banners
    Testimonials.jsx         customer reviews
    Newsletter.jsx            email signup
    Footer.jsx                footer with columns + payment badges
  data/
    products.js              edit this to change your catalog
  App.jsx                    wires everything together + cart/wishlist state
  main.jsx                    React entry point
tailwind.config.js
```


## 🛠️ Tech Stack

- **Frontend:** React 19
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Icons:** Lucide React
- **Routing:** State-based navigation (no external router required)
