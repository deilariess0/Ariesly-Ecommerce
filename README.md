# Shoply — React + Tailwind Ecommerce Storefront

A storefront homepage built with **React**, **Tailwind CSS**, and **Vite**, featuring a frosted-glass navbar (inspired by Vila Magenta) that starts transparent over the hero and turns into a solid frosted panel on scroll.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

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

## Customizing

- **Products**: edit `src/data/products.js`. Swap the `emoji`/`bg` placeholders with a real `image` URL and update `ProductCard.jsx` to render an `<img>` instead of the emoji once you have real product photos.
- **Colors**: the `ink` color (near-black) and blue accent are used throughout — change them in `tailwind.config.js` and swap `bg-blue-*` classes.
- **Navbar glass effect**: in `Navbar.jsx`, the `scrolled` state (from a scroll listener) toggles between a transparent `bg-white/10 backdrop-blur-md` look and a solid `bg-white/70 backdrop-blur-xl` look — tweak the opacity/blur values to taste.
- **Cart & wishlist**: state is lifted to `App.jsx` (`cart`, `wishlist`) and passed down as props — there's no backend yet, so "Add to Cart" just increments a local counter. Wire this up to a real cart/checkout flow when you're ready.

## Tech stack

- React 19
- Tailwind CSS 3
- Vite 8
- lucide-react (icons)
